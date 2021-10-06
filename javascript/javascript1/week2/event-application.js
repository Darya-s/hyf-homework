getEventWeekday = (daysToEvent) => {
  const d = new Date();
  const today = d.getDay();

  const q = (daysToEvent + today) % 7;

  for (i = 1; i <= 7; i++) {
    switch (q) {
      case 1:
        return "Monday";
        break;
      case 2:
        return "Tuesday";
        break;
      case 3:
        return "Wednsday";
        break;
      case 4:
        return "Thursday";
        break;
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 7:
        return "Saunday";

        break;
      default:
        return "Error XD!";
    }
  }
};

console.log("The event is being held on " + getEventWeekday(9));
