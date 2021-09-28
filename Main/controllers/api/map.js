// put key in .env file 
// Create variable inside of dotenv file to replace with actual key


require('dotenv').config();



const mapkey = "AIzaSyCpSBx1lRYNTBGBAzxLUjWYaSLnKq1u1Us"

// front end function (will need API info)
// JSon fetched info which is used in the below function

function initMap(){
  const options = {
    center: { lat: 33.7175, lng: -117.8311},
    zoom: 8
  }

  //New Map
  map = new google.maps.Map(document.getElementById("map"), options)

  //Marker
  function addMarker(location){

  
    const marker = new google.maps.Marker({
      position:location,
      map: map 
    });
  }
  addMarker{ lat: 33.7175, lng: -117.8311 }

}