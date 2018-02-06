// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(function() {
	$("#sizePicker").submit(function(evt){
		evt.preventDefault();
		makeGrid();
	});
});

function makeGrid() {
	clearGrid();

	var rows = Number($("#inputHeight").val());
	var columns = Number($("#inputWeight").val());

	var table = $("<table id=\"pixelCanvas\"></table>");
	$("body").append(table);
	for (var row =1; row <= rows; row++){
		var rowElement = $("<tr></tr>");
		$("#pixelCanvas").append(rowElement);
		for(var column=1; column<=columns; column++){
			var cell = $("<td></td>");
			rowElement.append(cell);
		}
	}

	table.on("click", "td", function(evt){
		var color = $("#colorPicker").val();
		$(evt.target).css("background-color",color);
	});

}
function clearGrid(){
	$("#pixelCanvas").remove();
}
