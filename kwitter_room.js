// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDzLIg4vgA8JkDgH-BT8HK1kHukLAe0fg0",
      authDomain: "kwitter-43c57.firebaseapp.com",
      databaseURL: "https://kwitter-43c57-default-rtdb.firebaseio.com",
      projectId: "kwitter-43c57",
      storageBucket: "kwitter-43c57.appspot.com",
      messagingSenderId: "11693731578",
      appId: "1:11693731578:web:e89cb6c2931e9d96256343"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome " + user_name + "!!";

    function addRoom()
    {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location=kwitter_page.html;
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room_name:" + Room_names);
       row="<div class='room_name' id="+ Room_names + "; onclick='redirectToRoomName(this.id);'># "+ Room_names + " </div> <hr>";
       document.getElementById("output").innerHTML+=row;
      });});}
getData();
 
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location=kwitter_page.html;
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location="index.html";
}