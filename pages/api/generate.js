import axios from 'axios';

export default async function (req, res) {
  if (!process.env.OPENAI_API_KEY) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }
 
  const ingredients = req.body.ingredients || [];
  const effortLevel = Number(req.body.effortLevel) || 1;

  if (ingredients.length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid list of ingredients",
      }
    });
    return;
  }

  try {
    const openaiResponse = await axios.post('https://api.openai.com/v1/chat/completions', {
      
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are an assistant that suggests 3 meal ideas based on a given list of ingredients. The meal ideas vary based on the amount of time and effort required to prepare them.'
        },
        {
          role: 'user',
          content: `I have these ingredients: ${ingredients.join(', ')}. I'm looking for meal ideas that are ${getEffortDescriptor(effortLevel)}.`
        }
      ],
      max_tokens: 200,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('OpenAI Response:', openaiResponse.data.choices[0].message);

    if (!openaiResponse.data || !openaiResponse.data.choices) {
      throw new Error('Unexpected response from OpenAI API');
  }
      
  const result = openaiResponse.data.choices[0].message.content;
  res.status(200).json({ result: result });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}
function getEffortDescriptor(effortLevel) {
  switch (effortLevel) {
    case 1: return "quick and easy to prepare";
    case 2: return "fairly quick to prepare";
    case 3: return "of moderate difficulty";
    case 4: return "requiring some effort";
    case 5: return "requiring a lot of time and effort";
    default: return "of moderate difficulty";
  }
}