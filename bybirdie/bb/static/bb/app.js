
const storage = new Storage();

const userLocation = storage.getLocationData();

const myLocation = new Location(userLocation.latitude, userLocation.longitude);

const ui = new UI;

const changeBtn = document.getElementById('loc-change-btn');

const dropMenuBtn = document.getElementById('drawerMenu');

const ebirdAPIkey = document.getElementById('ebirdAPI').value;


//Event Listeners
document.addEventListener('DOMContentLoaded', getLocationData);
changeBtn.addEventListener('click', updateLocation);
dropMenuBtn.addEventListener('click', openDrawerMenu);

function getLocationData() {

  myLocation.getNotables(ebirdAPIkey)
        .then(results => {
          ui.displayNotablesList(results);
        })
        .catch(err => console.log(err))

  myLocation.getHotspots()
        .then(results => {
          //ui.displayHotspotMap(results);
          ui.displayHotspotList(results);
        })
        .catch(err => console.log(err))
  
  myLocation.initMap();
}

function saveLocation(position) {
  let newLatitude = parseFloat(position.coords.latitude);
  let newLongitude = parseFloat(position.coords.longitude);

  // Store user location in local storage
  storage.setLocationData(newLatitude, newLongitude);

  // Update location for outgoing 
  myLocation.changeLocation(newLatitude, newLongitude);
  
  // 
  getLocationData();

  // Pass location to backend
  document.getElementById("currlon").value = newLongitude;
  document.getElementById("currlat").value = newLatitude;
  document.getElementById("currloc").submit();
}

function errorHandler(err) {
  if(err.code == 1) {
    alert("Error: Access is denied!");
  } else if( err.code == 2) {
    alert("Error: Position is unavailable!");
  }
}			
  
function updateLocation() {
  if(navigator.geolocation) {               
  // timeout at 60000 milliseconds (60 seconds)
    var options = {timeout:60000};
    navigator.geolocation.getCurrentPosition(saveLocation, errorHandler, options);
  } else {
      alert("Sorry, browser does not support geolocation!");
  }
}
  

// UI functions
function openDrawerMenu(){
  var x = document.getElementById("mainNavBar");
  if (x.className === "navBar"){
    x.className += " responsive";
  } else {
    x.className = "navBar";
  }
}