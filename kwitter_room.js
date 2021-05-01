
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA72PG7t7QtCVdWrK9p1e9u0AlkEFZ4f_g",
    authDomain: "kwitter-app-a56e7.firebaseapp.com",
    databaseURL: "https://kwitter-app-a56e7-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-a56e7",
    storageBucket: "kwitter-app-a56e7.appspot.com",
    messagingSenderId: "570551883604",
    appId: "1:570551883604:web:c1f1b05d2bd2fa616fdac1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
