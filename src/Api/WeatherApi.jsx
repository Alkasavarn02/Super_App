
const weatherApi = async(city) => {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=8b99a6509ea94652a6a93610240408&q=${city}`);
    return response;
}

export default weatherApi;