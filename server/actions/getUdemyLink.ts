export const getUdemyLink = async (userInput: string) => {
  try {
    const response = await fetch(
      `https://api.udemy.com/v1/courses?search=${encodeURIComponent(
        userInput
      )}`,
      {
        headers: {
          Authorization: 'Bearer YOUR_ACCESS_TOKEN', // Replace with access token
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
