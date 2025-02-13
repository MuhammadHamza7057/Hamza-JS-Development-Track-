function showTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let amPm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  // Formatting time to always have two digits
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let timeString = `${hours}:${minutes}:${seconds} ${amPm}`;
  document.getElementById("clock").innerText = timeString;

  setTimeout(showTime, 1000); // Update every second
}

showTime(); // Call function initially
