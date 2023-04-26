const firebaseConfig = {
      apiKey: "AIzaSyCzWG38jOZxYoomVaJLzoMyAq559YTWQlM",
      authDomain: "kwitter-2d9d0.firebaseapp.com",
      databaseURL: "https://kwitter-2d9d0-default-rtdb.firebaseio.com",
      projectId: "kwitter-2d9d0",
      storageBucket: "kwitter-2d9d0.appspot.com",
      messagingSenderId: "449980890922",
      appId: "1:449980890922:web:e7282faf4f398476de2853"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
//ADD YOUR FIREBASE LINKS HERE
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id = "+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";

}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location = "index.html"
}