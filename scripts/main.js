
// disparition / apparition des éléments de la page
$(document).ready(function() {
  $(".buttonAccueil").click(
    function(){
			$(".accueil").fadeOut('slow').queue(function() {
    	$(".choiceGame").fadeIn('slow');
  		});
		});
});


$(document).ready(function() {
  $(".playerVsPlayer").click(
    function(){
      $(".choiceGame").fadeOut('slow').queue(function() {
      $(".choiceHouse").fadeIn('slow');
      });
    });
});

$(document).ready(function() {
  $(".playerVsAI").click(
    function(){
      $(".choiceGame").fadeOut('slow').queue(function() {
      $(".choiceHouse").fadeIn('slow');
      });
    });
});
