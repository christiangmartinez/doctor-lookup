var apiKey = require('./../.env').apiKey;

Search = function(){

}

Search.prototype.getDocsBySymptom = function(userSymptom, showDocs) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ userSymptom +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     var docs = result.data;
     showDocs(docs);
    })
   .fail(function(error) {
      console.log("fail");
    });
}

Search.prototype.getDocProfile = function (uid, showProfile) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors/' + uid +'?user_key=' + apiKey)
  .then(function(result) {
    var profile = result.data.profile;
    showProfile(profile);
    console.log(profile);
  })
  .fail(function(error) {
    console.log('ERROR');
  });
}

exports.searchModule = Search;
