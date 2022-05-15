const getPrime = async (
  query: string,
  setResult: React.Dispatch<React.SetStateAction<string>>
) => {
  const requestOptions = {
    method: "GET",
  };

  const queryToInteger = parseInt(query, 10);

  if (query !== "" && !isNaN(queryToInteger)) {
    const requestUrl = `/api/checkprime/${query}`;

    fetch(requestUrl, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data: { isPrime: boolean }) => {
        console.log(data.isPrime);

        const responseText = data.isPrime
          ? `Given number ${queryToInteger} is a prime number.`
          : `Given number ${queryToInteger} is not a prime number.`;

        setResult(responseText);
      });
  }
};

export default getPrime;
