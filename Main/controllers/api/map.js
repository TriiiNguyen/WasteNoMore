const mapkey = "AIzaSyCpSBx1lRYNTBGBAzxLUjWYaSLnKq1u1Us"

// Map option
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