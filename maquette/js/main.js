$(document).ready(function() {
   var trait = $('hr');
   var brand1 = $('.brand1');
   var brand2 = $('.brand2');
   var brand3 = $('.brand3');
   var brand4 = $('.brand4');
   var brand5 = $('.brand5');
   var textBrand = $('.text-brand');


   brand1.on("mouseover", function(){

   		brand1.css( "cursor", "pointer" );
   		trait.css("border", "3px solid #57c5a0");
   		textBrand.css("color", "#FFF");
   });

   brand2.on('mouseover', function(){
   		brand2.css( "cursor", "pointer" );
   		trait.css("border", "3px solid #57c5a0");
   		textBrand.css("color", "#FFF");
   });

   brand3.on('mouseover', function(){
   		brand3.css( "cursor", "pointer" );
   		trait.css("border", "3px solid #57c5a0");
   		textBrand.css("color", "#FFF");
   });

   brand4.on('mouseover', function(){
   		brand4.css( "cursor", "pointer" );
   		trait.css("border", "3px solid #57c5a0");
   		textBrand.css("color", "#FFF");
   });

   brand5.on('mouseover', function(){
   		brand5.css( "cursor", "pointer" );
   		trait.css("border", "3px solid #57c5a0");
   		textBrand.css("color", "#FFF");
   });




   brand1.on("mouseleave", function(){

   		brand1.css( "cursor", "pointer" );
   		trait.css("border", "3px solid #57c5a0");
   		textBrand.css("color", "#FFF");
   });

   brand2.on('mouseleave', function(){
   		brand2.css( "cursor", "pointer" );
   		trait.css("border", "3px solid #57c5a0");
   		textBrand.css("color", "#FFF");
   });

   brand3.on('mouseleave', function(){
   		brand3.css( "cursor", "pointer" );
   		trait.css("border", "3px solid #57c5a0");
   		textBrand.css("color", "#FFF");
   });

   brand4.on('mouseleave', function(){
   		brand4.css( "cursor", "pointer" );
   		trait.css("border", "3px solid #57c5a0");
   		textBrand.css("color", "#FFF");
   });

   brand5.on('mouseleave', function(){
   		trait.css("border", "3px solid #000");
   		textBrand.css("color", "#979797");
   });












});