const getPrime = async (
  query: string,
  setResult: React.Dispatch<React.SetStateAction<string>>
) => {
  const requestOptions = {
    method: "GET",
  };

  if (query !== "") {
    const requestUrl = `/api/checkprime/${query}`;

    fetch(requestUrl, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data: { isPrime: boolean }) => {
        console.log(data.isPrime);

        const responseText = data.isPrime
          ? `Given number ${query} is a prime number.`
          : `Given number ${query} is not a prime number.`;

        setResult(responseText);
      });
  }
};

export default getPrime;
