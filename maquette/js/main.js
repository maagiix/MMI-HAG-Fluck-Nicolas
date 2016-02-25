$(document).ready(function() {
   $('.item1').on('click', function(){
      $('.key').children.deleteClass('bouncing');
      $('.key').children.addClass('bounceRight');
      $('.key').children.deleteClass('bounceTop');
   });

    $('.item2').on('click', function(){
    	$('.key').children.deleteClass('bouncing');
      $('key').children.addClass('bounceTop');
      $('.key').children.deleteClass('bounceRight');
   });
});