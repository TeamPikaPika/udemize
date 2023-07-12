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
    console.log('in getUdemyLink')
    const clientID = 'oxA4W4FQAIsGrPM1Bx6pqH6e5DE4OD9jUGBzHuEP';
    const clientSecret = 'NaljNaYRM6b5i0bdzVjKTYHRgxgLKyB49fcarvO2X07Jq4NIVCcK9tioBuFViVgX9VwFVCBpFpGCvGsWo4FxC1SwwJasketOkgv2PtJ7IVvHppENbxMxgrQdm8hn2RvN'
    const accessToken = btoa(`${clientID}:${clientSecret}`)
    const response = await fetch(
      `https://www.udemy.com/api-2.0/courses/?&page=1&page_size=3&search=${userInput}`,
      {
        headers: {
          Authorization: `Basic ${accessToken}`, // Replace with access token
        },
      }
    );
    const processedResponse = await response.json();
    return processedResponse;
  } catch (error) {
    console.error(error);
  }
};

