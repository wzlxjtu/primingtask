$( document ).ready(function(){
	localStorage.clear();
    $('#selschool').change(function () {
		var selectedText = $(this).find("option:selected").text().replace(/\s/g,'');
		localStorage.setItem("School", selectedText);
	});
	
	$('#selcondition').change(function () {
		var selectedText = $(this).find("option:selected").text().replace(/\s/g,'');
		localStorage.setItem("Condition", selectedText);
	});
	
	$('#txtparticipant').change(function () {
		var participantID = $(this).val();
		localStorage.setItem("ParticipantID", participantID);
	});
	
	$("#btn_start").click(function(){
		var startTime = (new Date).getTime();
		localStorage.setItem("startTime",startTime);
	});
});
