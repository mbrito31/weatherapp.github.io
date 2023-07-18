const key = '13d66dc32ab3410287a00852230607';
const fetchData = async (city) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;

  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json();
  return data;
};

export default fetchData;
