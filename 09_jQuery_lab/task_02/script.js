var participant = 1;
$('#add').on('click', function(e){
  e.preventDefault();
  participant++;
  var inputEl = $('<input>');
  inputEl.attr('name','name-'+participant);
  $('#add').after(inputEl);
  console.log(participant)
  console.log(inputEl)
});
$('#send').on('click', function(){
  var nameElements = $("input[name^='name']");

  console.log(nameElements)
});