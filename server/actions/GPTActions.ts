import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.GPT_KEY,
});
const openai = new OpenAIApi(configuration);

const GPTActions: any = {}

GPTActions.prompt = async (proompt: string): Promise<string> => {
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: proompt,
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

export default GPTActions;
