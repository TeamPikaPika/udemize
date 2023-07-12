// const dotenv = require('dotenv');
// dotenv.config();

const key = process.env.GPT_KEY;

export const getProsCons = async (userInput: string) => {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        max_tokens: 2048,
        temperature: 0.7,
        messages: [{ role: 'user', content: `Another word for ${userInput}?` }],
      }),
    });
    const processedResponse = response.json();
    return processedResponse;
  } catch (err) {
    console.log(err);
  }
};
