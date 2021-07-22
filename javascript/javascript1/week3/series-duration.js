let total = 0;
const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function logOutSeriesText() {
  for (let serie of seriesDurations) {
    let hours = serie.days * 24 + serie.hours;

    let spentLife = ((hours * 100) / 700800).toFixed(3);

    total += spentLife; //I have no idea why it s not letting me to add :(

    console.log(serie.title + " took " + spentLife + " of my life ");
  }
  console.log("In total it took " + total);
}
logOutSeriesText(seriesDurations);
