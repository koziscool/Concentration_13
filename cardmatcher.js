

$(document).ready( function(){
	$("#grid-size").focus();
	$("#grid-size-submit").click( function(e){
		console.log("here");
		e.preventDefault();
		var size = $("#grid-size").val();
		matcherController.init(size);
		$("#grid-size-form").hide();
		matcherView.updateGameView()
	});
});

