var participant = 1;
$('#add').on('click', function(e){
  e.preventDefault();
  participant++;
  var inputEl = $('<input>');
  inputEl.attr({
    'type':'text',
    'name':'name-'+participant,
    'id':'name-'+particant,
    'class':'class-name',
    'placeholder': 'Enter name ...'
    });
  $('#add').parent('p').after(inputEl);
  console.log(participant);
  console.log(inputEl);
});
$('#send').on('click', function(e){
  e.preventDefault();
  var nameElements = $("input[name^='name']");

  console.log(nameElements);
});