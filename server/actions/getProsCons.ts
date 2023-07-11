export const getProsCons = async (userInput: string) => {
  try {
    const response = await fetch(``);
    const processedResponse = response.json();
    return processedResponse;
  } catch (err) {
    console.log(err);
  }
};
