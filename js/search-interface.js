var Search = require('./../js/search.js').searchModule;

$(document).ready(function() {
  $('#docsBySymptom').submit(function() {
    event.preventDefault();
    var userSymptom = $('#userSymptom').val();
  });
});
