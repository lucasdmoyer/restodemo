const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDpuDmVr7Otj611tETNcETuIJgnWfrli-E",
    authDomain: "https://restodemo-lucas.firebaseio.com",
    projectId: "restodemo-lucas"
  });
  
var db = firebase.firestore();

menu = [
   {id: 1, source: "../../assets/images/1.jpg" },
   {id: 2, source: "../../assets/images/2.jpg" },
   {id: 3, source: "../../assets/images/3.jpg" },
   {id: 4, source: "../../assets/images/4.jpg" },
   {id: 5, source: "../../assets/images/5.jpg" },
   {id: 6, source: "../../assets/images/6.jpg" },
   {id: 7, source: "../../assets/images/7.jpg" },
   {id: 8, source: "../../assets/images/8.jpg" },
   {id: 9, source: "../../assets/images/9.jpg" },
   {id: 10, source: "../../assets/images/10.jpg" },
   {id: 11, source: "../../assets/images/11.jpg" },
   {id: 12, source: "../../assets/images/12.jpg" },
   {id: 13, source: "../../assets/images/13.jpg" },
   {id: 14, source: "../../assets/images/14.jpg" },
   {id: 15, source: "../../assets/images/15.jpg" },
   {id: 16, source: "../../assets/images/16.jpg" },
 ];

menu.forEach(function(obj) {
    db.collection("pictures").add({
        id: obj.id,
        source: obj.source
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});
