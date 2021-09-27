const mapkey = "AIzaSyCpSBx1lRYNTBGBAzxLUjWYaSLnKq1u1Us"

function initMap(){
  const options = {
    center: { lat: 33.7175, lng: 117.8311},
    zoom: 8
  }

  map = new google.maps.Map(document.getElementById("map"), options)
}