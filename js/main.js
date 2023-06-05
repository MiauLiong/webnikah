$(window).on("load", function () {
  // home section slideshow
  let slideIndex = $(".slide.active").index();
  const slideLen = $(".slide").length;

  function slideShow() {
    $(".slide").removeClass("active").eq(slideIndex).addClass("active");
    if (slideIndex == slideLen - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    setTimeout(slideShow, 6000);
  }
  slideShow();
});

$(document).ready(function () {
  // nav toggle
  $(".hamburger-btn").click(function () {
    $(".header .nav").slideToggle();
  });
  $(".header .nav a").click(function () {
    if ($(window).width() < 768) {
      $(".header .nav").slideToggle();
    }
  });

  // fixed header
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  });
});

// scrollIt

$(function () {
  $.scrollIt({
    topOffset: -50,
  });
});

// program hitung mundur
const tanggalTujuan = new Date("Dec 9, 2027 08:00:00").getTime();

const hitungMundur = setInterval(function () {
  const sekarang = new Date().getTime();
  const selisih = tanggalTujuan - sekarang;

  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((selisih % (1000 * 60)) / 1000);

  const waktuacara1 = document.getElementById("waktuacara1");
  waktuacara1.innerHTML = " Waktu acara akan dimulai, " + hari + " hari " + jam + " jam " + menit + " menit " + detik + " detik lagi ";

  const waktuacara2 = document.getElementById("waktuacara2");
  waktuacara2.innerHTML = " Waktu acara akan dimulai, " + hari + " hari " + jam + " jam " + menit + " menit " + detik + " detik lagi ";

  const waktuacara3 = document.getElementById("waktuacara3");
  waktuacara3.innerHTML = " Waktu acara akan dimulai, " + hari + " hari " + jam + " jam " + menit + " menit " + detik + " detik lagi ";

  if (selisih < 0) {
    clearInterval(hitungMundur);
    TextTrackList.innerHTML = "Acara sedang di mulai";
  }
}, 1000);
