var firebaseConfig = {
    apiKey: "AIzaSyCXDf76yh-t5WdKMzD0fsiOHfFOFP89gx4",
    authDomain: "kwitter-project-bfded.firebaseapp.com",
    projectId: "kwitter-project-bfded",
    storageBucket: "kwitter-project-bfded.appspot.com",
    messagingSenderId: "867411351147",
    appId: "1:867411351147:web:238ed85a44ead42197c32e"
  };

  //Initializing Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) 
    {
  
    //Start code
   
  //End code
    });});}

getData();