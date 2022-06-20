// Mostrar e ocultar bara de navegação lateral 

$('#btn-mobile').click(function () {
  $('#menu').toggleClass('mostrar')
  $('#btn-mobile').toggleClass('transformar')
})

// Mostrar e ocultar bara de navegação lateral ao clicar em link

$('#menu a').click(function () {
  var menu = document.getElementById('menu');
  var btn = document.getElementById('btn-mobile');
  menu.classList.remove('mostrar');
  btn.classList.remove('transformar');
})

// Scroll suave

$('nav a').click(function (e) {
  e.preventDefault();
  var id = $(this).attr('href')
  var targetOffset = $(id).offset().top
  var menuHeight = $('nav').innerHeight

  $('html, body').animate({
    scrollTop: targetOffset
  }, 500)
})

$('.saiba-mais a').click(function (e) {
  e.preventDefault();
  var id = $(this).attr('href')
  var targetOffset = $(id).offset().top
  var menuHeight = $('nav').innerHeight

  $('html, body').animate({
    scrollTop: targetOffset
  }, 500)
})

// Slider

let slideIndex = 1;
showSlides(slideIndex);

// Controle anterior/proximo
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Controle de thumbnails
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("my-slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//Scroll to top

var timeout = null;

$(window).bind('scroll', function () {
  clearTimeout(timeout);
  timeout = setTimeout(function () {

    if ($(window).scrollTop() > 200) {
      $('.back-to-top').animate({ height: "40px" });
      $('.back-to-top i').css('visibility', 'visible')
    }
    else {
      $('.back-to-top').animate({ height: "0" });
      $('.back-to-top i').css('visibility', 'hidden')
    }

  }, 100);
});

$(".back-to-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 800);
});


