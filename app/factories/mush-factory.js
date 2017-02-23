"use strict";

app.factory("", ($q, $http, FBCreds) => {                                                                 
                                                                                                                                  
  let getItemList = () => {                                                                                                   
    let mushrooms = [];                                                                                                               
    return $q((resolve, reject) => {                                                                                              
      $http.get(`${FBCreds.databaseURL}/mushrooms.json?orderBy="uid"&equalTo="${user}"`)                                              
      .then((itemObject) => {                                                                                                     
        let itemCollection = itemObject.data;                                                                                     
        Object.keys(itemCollection).forEach((key) => {                                                                            
          itemCollection[key].id = key;                                                                                           
          mushrooms.push(itemCollection[key]);                                                                                        
        });                                                                                                                       
      resolve(mushrooms);                                                                                                             
      })                                                                                                                          
      .catch((error) => {                                                                                                         
        reject(error);                                                                                                            
      });                                                                                                                         
    });                                                                                                                           
  };    

return {getItemList};                                                                                  
                                                                                                                                  
});


// 'use strict';

// app.factory('MushroomStorage',function($q, $http, FBCreds) {

//   let getJSON = () => {
//     let mushroomArray = [];
//     return $q((resolve, reject) => {
//       $http.get(`${FBCreds.databaseURL}/mushrooms.json`)
//       .then((mushroomObject) => {
//         let mushroomCollection = mushroomObject.data;
//         Object.keys(mushroomCollection).forEach((key) => {
//           mushroomCollection[key].id = key;
//           mushroomArray.push(mushroomCollection[key]);
//         });
//         resolve(mushroomArray);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//     });
//   };

//   return {getJSON};
// });