// Program#9: Write a program that determine the day of week. Ask the user for a number (1-7)
function Day(num: number) {
  if (num >= 0 && num <= 7) {
    if (num === 1) {
      console.log("Sunday");
    } else if (num === 2) {
      console.log("Monday");
    } else if (num === 3) {
      console.log("TuesDay");
    } else if (num === 4) {
      console.log("WednesDay");
    } else if (num === 5) {
      console.log("ThursDay");
    } else if (num === 6) {
      console.log("FriDay");
    } else if (num === 7) {
      console.log("SatureDay");
    }
  } else {
    console.log("Please enter the number between 1 and 7");
  }
}
Day(8);
