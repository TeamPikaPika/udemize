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
          content: `give me 3 pros of the tech ${userInput} where each point in no more that 250 characters including whitespace I cannot hold more characters that that in my database.`,
        },
      ],
    });
    console.log(completion.data.choices[0].message.content)
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
          content: `give me 3 cons of the tech ${userInput} where each point in no more that 250 characters including whitespace I cannot hold more characters that that in my database.`,
        },
      ],
    });
    console.log(completion.data.choices[0].message.content)
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
