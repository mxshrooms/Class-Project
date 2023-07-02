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
username = localStorage.getItem("Username: ");
room_name = localStorage.getItem("Room Name: ");

function send() {
      text = document.getElementById("textinput").value;
      firebase.database().ref(room_name).push({
            name: username, 
            message: text,
            likes: 0
      });
      document.getElementById("textinput").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name = message_data['name'];
message = message_data['message'];
likes = message_data['likes'];

nametag = "<h2> "+name+"<img id='tick'src='tick.png'></h2>";
messagetag = "<h2> " +message+ "</h2>";
liketag = "<button id="+firebase_message_id+"class='btn btn-info' value="+likes+" onlclick='updatelikes(this.id)'>";
icontag = "<span class='glyphicon glyphicon-thumbs-up'>Likes: "+likes+ "</span></button>";

final = nametag+messagetag+liketag+icontag;
document.getElementById("output").innerHTML += final;

//End code
      } });  }); }
getData();

function logout() {
      window.location = "index.html";
      localStorage.removeItem("Username: ");
}