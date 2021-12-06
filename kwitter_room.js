// Firebase Links
var firebaseConfig = {
  apiKey: "AIzaSyCXDf76yh-t5WdKMzD0fsiOHfFOFP89gx4",
  authDomain: "kwitter-project-bfded.firebaseapp.com",
  databaseURL: "https://kwitter-project-bfded-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-bfded",
  storageBucket: "kwitter-project-bfded.appspot.com",
  messagingSenderId: "867411351147",
  appId: "1:867411351147:web:238ed85a44ead42197c32e"
};

//Initializing Firebase
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("user_name");
function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
    });
    //Start code
    console.log("Room name is - " + Room_names);
    Row_output = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName()'> # " + Room_names + "</div>";
    document.getElementById("output").innerHTML += Row_output;
    //End code
  });
}
getData();
function AddRoom() {
  RoomName = document.getElementById("RoomName").value;
  firebase.database().ref("/").child(RoomName).update({
    Type: "Newfolder"
  });
}
function logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("roomname");
  window.location = "Kwitter.html";
}

function redirectToRoomName(name) {
  localStorage.setItem("roomname", name);
  window.location = "kwitter_page.html";
}