import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Icon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHY",
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
    CLEAR_DAY: "#FF9E80",
    CLEAR_NIGHY: "#1E88E5",
    PARTLY_CLOUDY_DAY: "#43A047",
    PARTLY_CLOUDY_NIGHT: "#64818E",
    CLOUDY: "#FFC61B",
    RAIN: "#4DB6AC",
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
