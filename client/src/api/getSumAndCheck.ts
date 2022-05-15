const getSumAndCheck = async (
  query: string,
  setResult: React.Dispatch<React.SetStateAction<string>>
) => {
  const requestOptions = {
    method: "GET",
  };

  if (query !== "") {
    const requestUrl = `/api/sumandcheck/${query}`;

    fetch(requestUrl, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data: { result: number; isPrime: boolean }) => {
        const sumText = `Sum of given numbers is ${data.result}. `;

        const primeText = data.isPrime
          ? `This is a prime number.`
          : `This is not a prime number.`;

        const responseText = sumText + primeText;
        setResult(responseText);
      });
  }
};

export default getSumAndCheck;
