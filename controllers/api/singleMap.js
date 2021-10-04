function initMap() {
  const myLatLng = { lat: 33.83264331062641, lng: -117.9073882819386 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

function getGardens() {
  return fetch('/api/gardens').then(data => data.json());
}