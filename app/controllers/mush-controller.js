"use strict";

'use strict';

app.controller("MushroomCtrl", function($scope, MushroomStorage, FBCreds) {

  MushroomStorage.getJSON()
  .then(function(mushroomCollection) {
    $scope.mushrooms = mushroomCollection;
  });

});

app.run(($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain,
    databaseURL: creds.databaseURL
    };
});