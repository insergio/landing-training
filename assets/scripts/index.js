'use strict';
import '../styles/style.scss';

var menuButton = document.querySelector('#js-menu-button');
var menuNav = document.querySelector('.js-main-nav');

menuButton.addEventListener('click', function (event) {
  menuNav.classList.toggle("visible-menu");
});

$(document).ready(function(){
  $('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    adaptiveHeight: true
  });
});