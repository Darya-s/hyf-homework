weatherWear = (temperature) => {
  if (temperature < -50 || temperature > 50) {
    return "Error,temperature is unreal";
  } else if (temperature < 0) {
    return "a warm down jacket";
  } else if (temperature >= 0 && temperature <= 15) {
    return " a jacket";
  } else if (temperature >= 16 && temperature <= 20) {
    return " a light jacket";
  } else if (temperature > 20) {
    return " just a T-shirt";
  }
};

console.log(weatherWear(-60));
console.log(weatherWear(-5));
console.log(weatherWear(0));
console.log(weatherWear(5));
console.log(weatherWear(16));
console.log(weatherWear(21));
console.log(weatherWear(51));
