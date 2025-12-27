import React from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${props.city}  is ${response.data.main.temp}°C`);
  }
  let apiKey = "743bee57fddbfaf52447193a87d5dd25";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="orange"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ margin: "20px" }}
      wrapperClass="custom-loader"
      visible={true}
    />
  );
}
