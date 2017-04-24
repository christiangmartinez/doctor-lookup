var apiKey = require('./../.env').apiKey;

Search = function(){

}

Search.prototype.getDocsBySymptom = function(userSymptom, showDocs) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ userSymptom +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=100&user_key=' + apiKey)
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
    console.log(result.data);
    var profile = result.data.profile;
    showProfile(profile);
  })
  .fail(function(error) {
    console.log('ERROR');
  });
}

Search.prototype.getSpecialties = function (showSpecialties) {
  $.get('https://api.betterdoctor.com/2016-03-01/specialties?limit=20&user_key=' + apiKey)
  .then(function(result) {
    console.log('BLAAARG');
    var specialties = result.data;
    console.log(specialties[0].name);
  })
  .fail(function(error) {
    console.log("meltdown");
  });
}

exports.searchModule = Search;
