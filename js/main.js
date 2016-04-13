'use strict';
var main = function() {
  $('#gamesCarousel').carousel();
  $('#gamesCarousel').click(function() {
    $('#gamesCarousel').carousel('next');
  });

  $('.left').click(function(){
    $('#gamesCarousel').carousel('prev');
  });

//  $('.dropdown-toggle').dropdown('toggle');
  //$('.menu-btn').click(function() {
//    $('.menu-btn').children('.dropdown-menu').hide();
//    $(this).children('.dropdown-menu').slideDown(100);
  //});
};

$(document).ready(main);
