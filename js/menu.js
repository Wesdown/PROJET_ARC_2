$(document).ready(function(){

	var ref = $(".niveau_accueil li");
	var nbelement = ref.length;
	var hauteur = ref.height();

	var h = 33*nbelement;

	// Modification du placement du bloc des prestations

	$('#accueil li').mouseover(function() {
		$('#prestations').css("margin-top", h);
	});
	
	$('#accueil li').mouseout(function() {
		$('#prestations').css("margin-top", (h - h));
	});

	//
});