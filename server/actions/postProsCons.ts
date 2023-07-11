import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.GPT_KEY,
});
const openai = new OpenAIApi(configuration);

export const getPros = async (userInput: string) => {
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `In one word, what is another word for ${userInput}?`,
        },
      ],
    });

    return completion.data.choices[0].message.content;
  } catch (err) {
    if (err.response) {
      console.log(err.response.status);
      console.log(err.response.data);
      return err;
    } else {
      console.log(err.message);
      return err;
    }
  }

  // try {
  //   const response = await fetch('https://api.openai.com/v1/chat/completions', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${key}`,
  //     },
  //     body: JSON.stringify({
  //       model: 'gpt-3.5-turbo',
  //       max_tokens: 2048,
  //       temperature: 0.7,
  //       messages: [{ role: 'user', content: `Another word for ${userInput}?` }],
  //     }),
  //   });
  //   const processedResponse = response.json();
  //   return processedResponse;
  // } catch (err) {
  //   console.log(err);
  // }
};
