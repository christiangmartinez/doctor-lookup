var Search = require('./../js/search.js').searchModule;

$(document).ready(function() {
  $('#docsBySymptom').submit(function() {
    event.preventDefault();
    var currentSearchObject = new Search;
    var userSymptom = $('#userSymptom').val();
    currentSearchObject.getDoctors(userSymptom);
  });
});
