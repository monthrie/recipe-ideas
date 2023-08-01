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
 
  const movies = req.body.movies || [];
  const uniqueness = Number(req.body.uniqueness) || 1;

  if (movies.length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid list of movie titles",
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
          content: 'You are an assistant that suggests 5 movies based on a given list of favorite movies. Your introduction is just "Here are 5 recomendations based on your favourites:". You give a concise one sentence description of each movie and include the year it was made in brackets after the title.'
        },
        {
          role: 'user',
          content: `My favorite movies are: ${movies.join(', ')}. I'm looking for recommendations that are ${getUniquenessDescriptor(uniqueness)}.`
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
function getUniquenessDescriptor(level) {
  switch (level) {
    case 1: return "very popular and mainstream";
    case 2: return "fairly popular";
    case 3: return "a mix of popular and less known";
    case 4: return "fairly unique and lesser-known";
    case 5: return "very obscure, and almost unknown";
    default: return "a mix of popular and less known";
  }
}