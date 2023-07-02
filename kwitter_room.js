// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAqKddLo8_NiMSMQ-adNfEwF3J4TuVZ_e8",
  authDomain: "kwitter-ca3b5.firebaseapp.com",
  databaseURL: "https://kwitter-ca3b5-default-rtdb.firebaseio.com",
  projectId: "kwitter-ca3b5",
  storageBucket: "kwitter-ca3b5.appspot.com",
  messagingSenderId: "846728442622",
  appId: "1:846728442622:web:3b03aa6ad7a36695c7ebaf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
room = document.getElementById("roominput").value;
storeName = localStorage.getItem("Username: ");
localStorage.setItem("Room Name: ",room);
document.getElementById("userlabel").innerHTML = "Welcome, "+storeName;

function addaroom() {
  roomName = document.getElementById("roominput").value;
  firebase.database().ref("/").child(roomName).update({
    purpose: "adding a room name"
  });
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      roomButton = "<div class='room' id="+Room_names+" onclick='redirect(this.id)'>"+Room_names+"</div>";
      document.getElementById("output").innerHTML +=roomButton;
      //End coder
      });});}
getData();

function redirect(name) {
  console.log(name);
  window.location = "kwitter_page.html";
}
function logout(){
  window.location.replace("index.html");
  localStorage.removeItem("Username: ");
}