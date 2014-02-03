$(document).ready(function(){

	// Modification du placement du bloc des produits

	var ref = $(".niveau_prestations li");
	var nbelement_prestations = ref.length;

	var h_prestations = 33*nbelement_prestations;

	$('#prestations li').mouseover(function() {
		$('#produits').css("margin-top", h_prestations);
	});
	
	$('#prestations li').mouseout(function() {
		$('#produits').css("margin-top", (h_prestations - h_prestations));
	});

	// Modification du placement du bloc des partenaires

	var ref = $(".niveau_produits li");
	var nbelement_produits = ref.length;

	var h_produits = 33*nbelement_produits;

	$('#produits li').mouseover(function() {
		$('#partenaires').css("margin-top", h_produits);
	});
	
	$('#produits li').mouseout(function() {
		$('#partenaires').css("margin-top", (h_produits - h_produits));
	});
});