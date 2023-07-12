// export const getUdemyLink = async (userInput: string) => {
//   try {
//     const response = await fetch(
//       `https://api.udemy.com/v1/courses?search=${encodeURIComponent(
//         userInput
//       )}`,
//       {
//         headers: {
//           Authorization: 'Bearer YOUR_ACCESS_TOKEN', // Replace with access token
//         },
//       }
//     );
//     const processedResponse = await response.json();
//     return processedResponse;
//   } catch (error) {
//     console.error(error);
//   }
// };

export const getUdemyLink = async (userInput: string) => {
  try {
    console.log('in getUdemyLink');
    const clientID = process.env.UDEMY_CLIENT_ID;
    const clientSecret = process.env.UDEMY_CLIENT_SECRET;
    const accessToken = btoa(`${clientID}:${clientSecret}`);
    const response = await fetch(
      `https://www.udemy.com/api-2.0/courses/?&page=1&page_size=3&search=${userInput}`,
      {
        headers: {
          Authorization: `Basic ${accessToken}`, // Replace with access token
        },
      },
    );
    const processedResponse = await response.json();
    return processedResponse;
  } catch (error) {
    console.error(error);
  }
};
