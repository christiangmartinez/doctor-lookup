var Search = require('./../js/search.js').searchModule;

var showDocs = function(docs) {
  docs.forEach(function(doc) {
    $('#docs').append('<li> <img src="' + doc.profile.image_url + '"alt="' + doc.profile.slug + '"><h4>' + doc.profile.first_name + ' ' + doc.profile.last_name + ', ' + doc.profile.title + '</h4></li>');
  });
}

$(document).ready(function() {
  $('#docsBySymptom').submit(function() {
    event.preventDefault();
    var currentSearchObject = new Search();
    var userSymptom = $('#userSymptom').val();
    currentSearchObject.getDocsBySymptom(userSymptom, showDocs);
  });
});
