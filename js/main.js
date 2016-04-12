'use strict';
var main = function() {
  $('.menu-btn').click(function() {
    $('.menu-btn').children('.dropdown-menu').hide();
    $(this).children('.dropdown-menu').show();
  });
};

$(document).ready(main);
