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

  const mealTitle = req.body.mealTitle;
  
  if (!mealTitle) {
    res.status(400).json({
      error: {
        message: "Please provide a meal title",
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
          content: 'You are a helpful assistant that provides full recipes based on given meal titles. No need for an introduction, just start with the ingredients. Keep your response concise and within the 500 token limit'
        },
        {
          role: 'user',
          content: `Give me the full recipe for this meal: ${mealTitle}. Include a recommendation for wine pairing.`
        }
      ],
      max_tokens: 500,
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
