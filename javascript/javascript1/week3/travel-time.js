const travelInformation = {
  speed: 50,
  destinationDistance: 432,
  calculator: function () {
    const time =
      (travelInformation.destinationDistance / travelInformation.speed) * 3600;
    const sec_num = parseInt(time, 10);
    const hours = Math.floor(sec_num / 3600);
    const minutes = Math.floor((sec_num - hours * 3600) / 60);
    return [hours, minutes];
  },
};

const travelTime = travelInformation.calculator();
console.log(travelTime); // 8 hours and 38 minutes*/
