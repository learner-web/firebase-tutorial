// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBR3zpdML8oR8XXZNcLDAP_vqiHcC2D8QM",
  authDomain: "kintu-57b0d.firebaseapp.com",
  databaseURL: "https://kintu-57b0d.firebaseio.com",
  projectId: "kintu-57b0d",
  storageBucket: "kintu-57b0d.appspot.com",
  messagingSenderId: "566718331871",
  appId: "1:566718331871:web:3b22ca877a03c3fbcbe26a",
  measurementId: "G-136R7893SG"
};
firebase.initializeApp(config);

var database = firebase.database();

database.ref('/').once('value', function(snapshot){
  console.log(snapshot.val());
});

var rootRef = database.ref('/');

rootRef.once('value', function(snapshot){
  console.log(snapshot.val());
});

function pushData(){
  var data = document.getElementById("dataValue").value;
  var dataRef = database.ref('/pushData').push();
  dataRef.set({
    value: data
  });
}

function setData(){
  var data = document.getElementById("dataValue").value;
  var dataRef = database.ref('/setData');
  console.log(data)
  dataRef.set({
    value: data
  });
}

setDataRef = database.ref("/setData");
setDataRef.on('child_changed', function(snapshot) {
  console.log("Below is the data from child_changed");
  console.log(snapshot.val());
});

pushDataRef = database.ref("/pushData");
pushDataRef.on("child_added", function(snapshot){
  console.log("Below is the data from child_added");
  console.log(snapshot.val());
});

database.ref('/pushData').once('value', function(snapshot){
  snapshot.forEach(function(data){
    console.log("Below are the child keys of the values in 'pushData'")
    console.log(data.key);
  });
  console.log(Object.keys(snapshot.val()));
});
