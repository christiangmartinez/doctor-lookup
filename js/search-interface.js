var Search = require('./../js/search.js').searchModule;
var currentSearchObject = new Search();

var showDocs = function(docs) {
  $('#docs').empty();
  $('#docProfile').empty();
  docs.forEach(function(doc) {
    $('#docs').append('<div class="col-md-4" <li><h4 id="' + doc.uid + '" class="docName">' + doc.profile.first_name + ' ' + doc.profile.last_name + ', ' + doc.profile.title + '</h4><img src="' + doc.profile.image_url + '"alt="' + doc.profile.slug + '"></li></div>');
  });
}

var showProfile = function(profile) {
  $('#docs').empty();
  $('#docProfile').empty();
  $('#docProfile').append('<h2>' + profile.first_name + ' ' + profile.last_name + ', ' + profile.title + '</h2>' + '<img src="' + profile.image_url + '"alt="' + profile.slug + '">' + '<p>' + profile.bio + '</p>');
}

var showSpecialties = function(specialties) {
  specialties.forEach(function(specialty) {
    $('#allSpecialties').append('<li>' + specialty.name + '</li>');
  });
}

$(document).ready(function() {
  // $(window).on('load', function() {
  //   currentSearchObject.getSpecialties(showSpecialties);
  // });
  $('#bySpecialty').click(function() {
    currentSearchObject.getSpecialties(showSpecialties);
  });
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
