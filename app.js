const openurl = require('openurl'); // https://www.npmjs.com/package/openurl

var args = process.argv.slice(2);

const URL = args[0];
const MIN = Number(args[1]);
const MAX = Number(args[2]);

function minutesToHours(minutes) {
  var num = minutes;
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return rhours + 'H' + rminutes;
}

function getCurrentTime() {
  const today = new Date();
  const time = today.getHours() + 'H' + today.getMinutes();
  return time;
}

/* Sleeping 1 minute by default */

function sleep(n = 1) {
  const minute = 60 * 1000; /* 1s */

  console.log('Now sleeping', minutesToHours(n));

  return new Promise(resolve => setTimeout(resolve, n * minute));
}

/* default will be = Math.random() */
function getRandomInt(min = 0, max = 1) {
  return min + Math.floor(Math.random() * Math.floor(max - min));
}

async function start(url, min, max) {
  console.log('Start [', minutesToHours(min), '-', minutesToHours(max), ']');

  while (true) {
    console.log('open ' + url, 'at', getCurrentTime());

    openurl.open(url);

    await sleep(getRandomInt(min, max));
  }
}

start(URL, 30, 90);


// https://www.npmjs.com/package/forever // todo later 