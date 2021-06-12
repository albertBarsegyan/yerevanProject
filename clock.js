// variables
const secHand = document.querySelector('.sec-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  // Seconds
  const seconds = now.getSeconds();
  const secToDeg = (seconds / 60) * 360 + 90;
  secHand.style.transform = `rotate(${secToDeg}deg)`;

  // Minutes
  const mins = now.getMinutes();
  const minsToDeg = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsToDeg}deg)`;

  // Hours
  const hours = now.getHours();
  const hourToDeg = (hours / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourToDeg}deg)`;
}

setInterval(setDate, 1000);
