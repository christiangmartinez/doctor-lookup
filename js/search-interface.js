var Search = require('./../js/search.js').searchModule;

var showDocs = function(docs) {
  $('#docs').empty()
  docs.forEach(function(doc) {
    $('#docs').append('<li><h4 id="' + doc.uid + '" class="docName">' + doc.profile.first_name + ' ' + doc.profile.last_name + ', ' + doc.profile.title + '</h4><img src="' + doc.profile.image_url + '"alt="' + doc.profile.slug + '"></li>');
  });
}

$(document).ready(function() {
  $('#docsBySymptom').submit(function() {
    event.preventDefault();
    var currentSearchObject = new Search();
    var userSymptom = $('#userSymptom').val();
    currentSearchObject.getDocsBySymptom(userSymptom, showDocs);
  });
  $(document).on('click', '.docName', function() {
    var uid = $(this).attr('id');
    console.log(uid);
  });
});
