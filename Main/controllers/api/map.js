// put key in .env file 
// Create variable inside of dotenv file to replace with actual key


require('dotenv').config();



const mapkey = "MAPKEY"

// front end function (will need API info)
// JSon fetched info which is used in the below function

function initMap(){
  const options = {
    center: { lat: 33.7175, lng: 117.8311},
    zoom: 8
  }

  map = new google.maps.Map(document.getElementById("map"), options)
}