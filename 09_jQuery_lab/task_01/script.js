var images = [
            ['Title image 1', 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'],
            ['Title image 2', 'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'],
            ['Title image 3', 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=350'],
            ['Title image 4', 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&h=350'],
            ['Title image 5', 'https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&h=350']
        ], flagLeft = 0, flagRight = 0;

$('#left').on('click', function(){
  if(!flagLeft){
  	flagLeft = images.length-1;
  	console.log($('#slider-image img').attr('src'));
  	$('#slider-image img').attr('src', images[flagLeft][1]);
  } else {
  	console.log(flagLeft)
  	console.log($('#slider-image img').attr('src'));

  	$('#slider-image img').attr('src', images[flagLeft-1][1]);
  	flagLeft--
  }
});