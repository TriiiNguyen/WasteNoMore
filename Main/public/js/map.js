// put key in .env file 
// Create variable inside of dotenv file to replace with actual key
const gardensData = require("../../seeds/gardensData.json");
const lng = gardensData.longitude;
const lat = gardensData.latitude;

require('dotenv').config();



// const mapkey = "MAPKEY"
// generateMap([33.7175, -117.8311])
// front end function (will need API info)
// JSon fetched info which is used in the below function


function initMap() {
  const options = { lat: 33.7175, lng: -117.8311 };

  //New Map
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: options,
  });

  const marker = new google.maps.Marker({
    position: options,
    map: map,
  });
}
  
  addMarker({location{lat, lng}});

  //Listen for click on map location
  google.maps.event.addListener(map, "click", (event) => 
    addMarker({location:event.latLng})
  )
