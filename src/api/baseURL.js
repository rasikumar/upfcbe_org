import axios from "axios";

const baseURL = axios.create({
  base: "https://api.openweathermap.org/data/3.0/onecall",
  headers: { "Content-Type": "application/json" },
});
export default baseURL;
