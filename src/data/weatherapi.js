import axios from "axios";

const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
const apiKey = "1927acadf58018da86b605642c62bdca";

export const getWeatherData = async (cityname) => {
  try {
    const { data } = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
    return data;
  } catch (error) {
    throw error;
  }
};
