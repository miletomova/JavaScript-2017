$('#btn').on('click', function(e){	
	e.preventDefault();
	
	if ($('span').length) {
	$('span').remove();	
	}
	
	var name = $('#name').val();
	
	if(!name){

		var spanEl = $('<span></span>').html('Name is required').css('color', 'red');
		
		$('#name').parent().append(spanEl);
		}
	
});
