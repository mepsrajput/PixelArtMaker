
$(document).ready(function(){
	
	
	$('#sizePicker').submit(function makeGrid(grid) {
		/* ------- Clear previous grid (if present) ------- */
		$('#pixelCanvas').empty();
		
		/* ------- Select size input ------- */
		let row_input = $('#inputHeight').val();
		let col_input = $('#inputWidth').val();
		for (i = 1; i <= row_input; i++) {
		    $('table').append("<tr></tr>");
		    for (j = 1; j <= col_input; j++) {
				$('tr:last').append("<td></td>");
				$('td').attr("class", 'cells');
		    }
		}
		
		/* ------- Select color input ------- */
		$('.cells').click(function (event) {
			const paint = $('#colorPicker').val();
			$(event.target).css('background-color', paint);
		});
		
		return false;
	});
});

function resetCanvas() {
	$('#pixelCanvas').empty(); 
}

function resetColor() {
    $('td').css({"background-color": ""});
  }