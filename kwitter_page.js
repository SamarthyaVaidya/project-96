//YOUR FIREBASE LINKS
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
  room_name = localStorage.getItem("room_name");

  function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = " ";
  }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
