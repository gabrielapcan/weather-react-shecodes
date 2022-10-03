import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Icon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "SLEET",
    "11n": "SLEET",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  const colorMapping = {
    CLEAR_DAY: "#FFC61B",
    CLEAR_NIGHT: "#0b6ec4",
    PARTLY_CLOUDY_DAY: "#6f9efc",
    PARTLY_CLOUDY_NIGHT: "#0b6ec4",
    CLOUDY: "#a0a0a0",
    RAIN: "#6a5a72",
    SLEET: "#8C9EFF",
    SNOW: "#FFFFFF",
    FOG: "#E63F3B",
  };
  let icon = codeMapping[props.code];
  let color = colorMapping[icon];

  return (
    <ReactAnimatedWeather
      icon={icon}
      color={color}
      size={props.size}
      animate={true}
    />
  );
}
