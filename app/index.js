'use strict';
import './style.scss';

var menuButton = document.querySelector('#menu-button');
var menuNav = document.querySelector('.main-nav');

menuButton.addEventListener('click', function (event) {
  menuNav.classList.toggle("visible-menu");
});

$(document).ready(function(){
  $('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});