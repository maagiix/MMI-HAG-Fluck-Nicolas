$(document).ready(function() {
   var brand1 = $('.brand1');
   var brand2 = $('.brand2');
   var brand3 = $('.brand3');
   var brand4 = $('.brand4');
   var brand5 = $('.brand5');
   var trait = $(this).children(".trait hr");
   var textBrand = $('.text-brand');
   var bulle = $('.bulle4');

   brand1.hover(function() {
      $(this).children(".trait").children("hr").css('border', '3px solid #57c5a0');

   }, function() {
      $(this).children(".trait").children("hr").css('border', '3px solid #000');
   });

   brand2.hover(function() {
      $(this).children(".trait").children("hr").css('border', '3px solid #57c5a0');

   }, function() {
      $(this).children(".trait").children("hr").css('border', '3px solid #000');
   });


brand3.hover(function() {
      $(this).children(".trait").children("hr").css('border', '3px solid #57c5a0');

   }, function() {
      $(this).children(".trait").children("hr").css('border', '3px solid #000');
   });


brand4.hover(function() {
      $(this).children(".trait").children("hr").css('border', '3px solid #57c5a0');

   }, function() {
      $(this).children(".trait").children("hr").css('border', '3px solid #000');
   });


brand5.hover(function() {
      $(this).children(".trait").children("hr").css('border', '3px solid #57c5a0');

   }, function() {
      $(this).children(".trait").children("hr").css('border', '3px solid #000');
   });







});