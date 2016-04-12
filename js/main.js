'use strict';
var main = function() {
  $('.menu-btn').click(function() {
    $('.menu-btn').children('.dropdown-menu').hide();
    $(this).children('.dropdown-menu').slideDown(100);
  });
};

$(document).ready(main);
