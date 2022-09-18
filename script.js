const newYork = {
  city: "New York",
  dates: "October 14 - October 29",
  images: [
    "https://images.wallpapersden.com/image/download/new-york-cityscape_bGdpbGWUmZqaraWkpJRobWllrWdma2U.jpg",
    "https://images6.alphacoders.com/737/737617.jpg",
    "https://wallpaperaccess.com/full/3704220.jpg",
  ],
  timeZone: "America/New_York",
};

const berlin = {
  city: "Berlin",
  dates: "October 30 - November 27",
  images: [
    "https://images2.alphacoders.com/542/542288.jpg",
    "https://images5.alphacoders.com/795/795688.jpg",
    "https://imgproxy.nanxiongnandi.com/6KmC4-V2pChnuQXNQuC7bMoTOMjcX50ygeyUW6QC1Ew/w:1280/aHR0cHM6Ly9pbWcu/bmFueGlvbmduYW5k/aS5jb20vMjAxNDEx/L0JlcmxpbldhbGxf/MTM2Nng3NjguanBn.jpg",
  ],
  timeZone: "Europe/Berlin",
};

const bruselas = {
  city: "Bruselas",
  dates: "November 28 - December 22",
  images: [
    "https://wallpaperaccess.com/full/134407.jpg",
    "https://www.wallpaperup.com/uploads/wallpapers/2019/05/02/1321807/f3871247fc0f4f04f039eeeea1465ae4-1000.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/elle-bruselas-1563797802.jpg",
  ],
  timeZone: "Europe/Brussels",
};

const valencia = {
  city: "Valencia",
  dates: "December 23 - January 1",
  images: [
    "https://wallpaperaccess.com/full/1612457.jpg",
    "https://wallpaperaccess.com/full/2613412.jpg",
    "https://wallpaperaccess.com/full/1612460.jpg",
  ],
  timeZone: "Europe/Barcelona",
};

const seul = {
  city: "Seul",
  dates: "January 2 - January 31",
  images: [
    "https://wallpaperaccess.com/full/2146222.jpg",
    "https://wallpapercave.com/wp/wp8505052.jpg",
    "https://www.10wallpaper.com/wallpaper/1920x1080/1405/Korea_Seoul_city_scenery_Photography_Wallpaper_15_1920x1080.jpg",
  ],
  timeZone: "Asia/Seoul",
};

const argentina = {
  city: "Argentina",
  dates: "Departure: October 14",
  images: [
    "https://images.wallpapersden.com/image/download/new-york-cityscape_bGdpbGWUmZqaraWkpJRobWllrWdma2U.jpg",
    "https://images6.alphacoders.com/737/737617.jpg",
    "https://wallpaperaccess.com/full/2146222.jpg",
    "https://imgproxy.nanxiongnandi.com/6KmC4-V2pChnuQXNQuC7bMoTOMjcX50ygeyUW6QC1Ew/w:1280/aHR0cHM6Ly9pbWcu/bmFueGlvbmduYW5k/aS5jb20vMjAxNDEx/L0JlcmxpbldhbGxf/MTM2Nng3NjguanBn.jpg",
    "https://images2.alphacoders.com/542/542288.jpg",
    "https://wallpaperaccess.com/full/1612460.jpg",
    "https://wallpaperaccess.com/full/134407.jpg",
    "https://images5.alphacoders.com/795/795688.jpg",
    "https://wallpaperaccess.com/full/3704220.jpg",
    "https://www.wallpaperup.com/uploads/wallpapers/2019/05/02/1321807/f3871247fc0f4f04f039eeeea1465ae4-1000.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/elle-bruselas-1563797802.jpg",
    "https://www.10wallpaper.com/wallpaper/1920x1080/1405/Korea_Seoul_city_scenery_Photography_Wallpaper_15_1920x1080.jpg",
    "https://wallpaperaccess.com/full/1612457.jpg",
    "https://wallpaperaccess.com/full/2613412.jpg",
    "https://wallpapercave.com/wp/wp8505052.jpg",
  ],
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
  let { city, images, timeZone } = getData();
  let body = document.getElementsByClassName("bg")[0];
  let h1 = document.getElementsByTagName("h1")[0];
  let time = document.getElementsByClassName("clock")[0];
  h1.innerHTML = `${city}`;
  body.style.backgroundImage = `url(${images[slideIndex]})`;
  slideIndex++;
  if (slideIndex >= images.length) {
    slideIndex = 0;
  }
  time.innerHTML = new Date().toLocaleString("es", { timeZone }).toString();
  setTimeout(showSlides, 5000);
}

var countDownDate = new Date("Oct 14, 2022 00:00:00").getTime();
var x = setInterval(function () {
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
    let { dates } = getData();
    h2.innerHTML = `${dates}`;
  }
}, 1000);
