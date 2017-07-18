function sendMessage() {
	alert ($("editor").get(0).text())
}

function showKMAResult(data) {
	var html = "";
	
	html = "<b><응답></b><p>";

	html += "<p>msg: " + data["msg"] + "</p>";
	html += "<p>query: " + data["query"] + "</p>";

	$('#analysis_result').get(0).innerHTML = html;
}

function analyze_kma() {
	var text = $('#postagger_textarea').get(0).value;
	var param = "http://localhost:8080/home.ncue?cmd=getData&query="+encodeURIComponent(text);

    $.ajax({
        url : param,
        type: 'POST',
        data : "id=user",
        dataType : "jsonp",
        jsonp : "callback",
        error: function(){
            alert('Error loading data');
        },
        success: function(data) {
            showKMAResult(data);
        }
    });
}





