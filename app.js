document.addEventListener('DOMContentLoaded', function() {
  var map = L.map('map').setView([35, -35], 3);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  fetch('locations.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(locations) {
      locations.forEach(function(location) {
        var marker = L.marker([
          location.position.latitude,
          location.position.longitude
        ]).addTo(map);

        marker.bindPopup('<b>' + location.name + '</b>, ' + location.country);
      });
    });
});
