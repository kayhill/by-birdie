
function saveLocation(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  // Store user location in local storage
  localStorage.setItem('latitude', latitude);
  localStorage.setItem('longitude', longitude);

  // Pass location to backend
  document.getElementById("currlon").value = longitude;
  document.getElementById("currlat").value = latitude;
  document.getElementById("currloc").submit();
}

function errorHandler(err) {
  if(err.code == 1) {
    alert("Error: Access is denied!");
  } else if( err.code == 2) {
    alert("Error: Position is unavailable!");
  }
}			
  
function getLocation() {
  if(navigator.geolocation) {               
  // timeout at 60000 milliseconds (60 seconds)
    var options = {timeout:60000};
    navigator.geolocation.getCurrentPosition(saveLocation, errorHandler, options);
  } else {
      alert("Sorry, browser does not support geolocation!");
  }
}
  
function openDrawerMenu(){
  var x = document.getElementById("mainNavBar");
  if (x.className === "navBar"){
    x.className += " responsive";
  } else {
    x.className = "navBar";
  }
}

