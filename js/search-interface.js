var Search = require('./../js/search.js').searchModule;
var currentSearchObject = new Search();

var showDocs = function(docs) {
  $('#docs').empty();
  docs.forEach(function(doc) {
    $('#docs').append('<li><h4 id="' + doc.uid + '" class="docName">' + doc.profile.first_name + ' ' + doc.profile.last_name + ', ' + doc.profile.title + '</h4><img src="' + doc.profile.image_url + '"alt="' + doc.profile.slug + '"></li>');
  });
}

var showProfile = function(profile) {
  $('#docs').empty();
  $('#docs').append('<h2>' + profile.first_name + ' ' + profile.last_name + ', ' + profile.title + '</h2>');
}

$(document).ready(function() {
  $('#docsBySymptom').submit(function() {
    event.preventDefault();
    var userSymptom = $('#userSymptom').val();
    currentSearchObject.getDocsBySymptom(userSymptom, showDocs);
  });
  $(document).on('click', '.docName', function() {
    var uid = $(this).attr('id');
    currentSearchObject.getDocProfile(uid, showProfile);
  });
});
