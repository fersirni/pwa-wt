const newYork = {
  city: "New York",
  dates: "October 14 - October 29",
  images: [
    "./images/new-york-1.jpg",
    "./images/new-york-2.jpg",
    "./images/new-york-3.jpg",
  ],
  timeZone: "America/New_York",
};

const berlin = {
  city: "Berlin",
  dates: "October 30 - November 27",
  images: [
    "./images/berlin-1.jpg",
    "./images/berlin-2.jpg",
    "./images/berlin-3.jpg",
  ],
  timeZone: "Europe/Berlin",
};

const bruselas = {
  city: "Bruselas",
  dates: "November 28 - December 22",
  images: [
    "./images/bruselas-1.jpg",
    "./images/bruselas-2.jpg",
    "./images/bruselas-3.jpg",
  ],
  timeZone: "Europe/Brussels",
};

const valencia = {
  city: "Valencia",
  dates: "December 23 - January 1",
  images: [
    "./images/valencia-1.jpg",
    "./images/valencia-2.webp",
    "./images/valencia-3.jpg",
  ],
  timeZone: "Europe/Madrid",
};

const seul = {
  city: "Seul",
  dates: "January 2 - January 31",
  images: [
    "./images/seoul-1.jpg",
    "./images/seoul-2.webp",
    "./images/seoul-3.jpg",
  ],
  timeZone: "Asia/Seoul",
};

const argentina = {
  city: "Argentina",
  dates: "Departure: October 14",
  images: [
    "./images/new-york-1.jpg",
    "./images/berlin-1.jpg",
    "./images/bruselas-1.jpg",
    "./images/valencia-1.jpg",
    "./images/seoul-1.jpg",
    "./images/new-york-3.jpg",
    "./images/berlin-3.jpg",
    "./images/bruselas-3.jpg",
    "./images/valencia-3.jpg",
    "./images/seoul-3.jpg",
    "./images/new-york-2.jpg",
    "./images/berlin-2.jpg",
    "./images/bruselas-2.jpg",
    "./images/valencia-2.webp",
    "./images/seoul-2.webp",
  ],
  timeZone: "America/Argentina/Buenos_Aires",
};
let slideIndex = 0;
showSlides();

function getData() {
  var now = new Date();
  if (now.getMonth() == 10 && now.getDate() > 14 && now.getDate() <= 29) {
    return newYork;
  } else if (
    (now.getMonth() == 10 && now.getDate() > 29) ||
    (now.getMonth() == 11 && now.getDate() < 28)
  ) {
    return berlin;
  } else if (
    (now.getMonth() == 11 && now.getDate() > 27) ||
    (now.getMonth() == 12 && now.getDate() < 23)
  ) {
    return bruselas;
  } else if (
    (now.getMonth() == 12 && now.getDate() > 22) ||
    (now.getMonth() == 1 && now.getDate() < 2)
  ) {
    return valencia;
  } else if (now.getMonth() == 1) {
    return seul;
  } else {
    return argentina;
  }
}

function showSlides() {
  let { city, images } = getData();
  let body = document.getElementsByClassName("bg")[0];
  let h1 = document.getElementsByTagName("h1")[0];
  h1.innerHTML = `${city}`;
  body.style.backgroundImage = `url(${images[slideIndex]})`;
  slideIndex++;
  if (slideIndex >= images.length) {
    slideIndex = 0;
  }
  setTimeout(showSlides, 5000);
}

var countDownDate = new Date("Oct 14, 2022 00:00:00").getTime();
var x = setInterval(function () {
  let { dates, timeZone } = getData();
  let time = document.getElementsByClassName("clock")[0];
  time.innerHTML = new Date().toLocaleString("es", { timeZone });

  let h2 = document.getElementsByTagName("h2")[0];
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  h2.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    h2.innerHTML = `${dates}`;
  }
}, 1000);
