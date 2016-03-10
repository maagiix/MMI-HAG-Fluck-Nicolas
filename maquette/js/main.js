$(document).ready(function() {
  var a = $('.margin a');
   var li = $('#menu').children();

   a.on('click', function(){

      li.removeClass("active");

        $(this).parent().parent().addClass("active");
   })

});



/*var menu = document.getElementById('menu');
var li = menu.childNodes;

function active(item){

  console.log(li.getAttribute('class'));

  
   menu.childNodes.className = document.getElementById("active").className.replace( /(?:^|\s)active(?!\S)/g , "" );
  

 

  item.parentNodes.parentNodes.className = "active";

}*/