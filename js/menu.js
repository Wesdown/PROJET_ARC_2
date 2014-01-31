$(document).ready(function(){

	// Modification du placement du bloc des produits

	var ref = $(".niveau_prestations li");
	var nbelement = ref.length;
	var hauteur = ref.height();

	var h = 33*nbelement;

	$('#prestations li').mouseover(function() {
		$('#produits').css("margin-top", h);
	});
	
	$('#prestations li').mouseout(function() {
		$('#produits').css("margin-top", (h - h));
	});

	// Modification du placement du bloc des partenaires

	var ref = $(".niveau_produits li");
	var nbelement = ref.length;
	var hauteur = ref.height();

	var h = 33*nbelement;

	$('#produits li').mouseover(function() {
		$('#partenaires').css("margin-top", h);
	});
	
	$('#produits li').mouseout(function() {
		$('#partenaires').css("margin-top", (h - h));
	});
});