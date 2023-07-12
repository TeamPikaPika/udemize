import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.GPT_KEY,
});
const openai = new OpenAIApi(configuration);

const GPTActions: any = {}

GPTActions.getPros = async (userInput: string): Promise<string> => {
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `give me 3 pros of the tech ${userInput} in one sentance each where all combined points are 750 characters or less I cannot hold more characters that that in my database.`,
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
};

GPTActions.getCons = async (userInput: string): Promise<string> => {
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
}

export default GPTActions;
