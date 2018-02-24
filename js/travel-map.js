const cities = {
  amalfi: { lat: 40.634003, lng: 14.602681 },
  amsterdam: { lat: 52.370216, lng: 4.895168 },
  athens: { lat: 37.98381, lng: 23.727539 },
  banff: { lat: 47.497912, lng: 19.040235 },
  banff: { lat: 51.178363, lng: -115.570769 },
  barcelona: { lat: 41.385064, lng: 2.173403 },
  calgary: { lat: 51.048615, lng: -114.070846 },
  charlottetown: { lat: 46.23824, lng: -63.13107 },
  edinburgh: { lat: 55.953252, lng: -3.188267 },
  edmonton: { lat: 53.544389, lng: -113.490927 },
  eugene: { lat: 44.052069, lng: -123.086754 },
  Ferndale: { lat: 40.576241, lng: -124.263944 },
  florence: { lat: 43.76956, lng: 11.255814 },
  goreme: { lat: 38.643056, lng: 34.828889 },
  grandCanyon: { lat: 36.106965, lng: -112.112997 },
  greatFalls: { lat: 47.494184, lng: -111.283345 },
  istanbul: { lat: 41.008238, lng: 28.978359 },
  london: { lat: 51.507351, lng: -0.127758 },
  marrakech: { lat: 31.629472, lng: -7.981084 },
  marseille: { lat: 43.296482, lng: 5.36978 },
  matera: { lat: 40.666379, lng: 16.60432 },
  minneapolis: { lat: 44.977753, lng: -93.265011 },
  montreal: { lat: 45.501689, lng: -73.567256 },
  nice: { lat: 43.710173, lng: 7.261953 },
  ottawa: { lat: 45.42153, lng: -75.697193 },
  palma: { lat: 39.5696, lng: 2.65016 },
  paris: { lat: 48.856614, lng: 2.352222 },
  portland: { lat: 45.523062, lng: -122.676482 },
  seattle: { lat: 47.606209, lng: -122.332071 },
  prague: { lat: 50.075538, lng: 14.4378 },
  rome: { lat: 41.902783, lng: 12.496366 },
  saltLakeCity: { lat: 40.760779, lng: -111.891047 },
  santorini: { lat: 36.393156, lng: 25.461509 },
  spokane: { lat: 47.65878, lng: -117.426046 },
  symi: { lat: 36.585572, lng: 27.842865 },
  tofino: { lat: 49.152984, lng: -125.906618 },
  toronto: { lat: 43.653226, lng: -79.383184 },
  toronto: { lat: 43.653226, lng: -79.383184 },
  vancouver: { lat: 49.282729, lng: -123.120738 },
  venice: { lat: 45.440847, lng: 12.315515 }
};

function initMap() {
  const center = { lat: 35.850837, lng: -41.082645 };
  const map = new google.maps.Map(document.getElementsByClassName("map")[0], {
    zoom: 3,
    center: center
  });

  const markers = Object.keys(cities).map(cityKey => {
    new google.maps.Marker({
      position: cities[cityKey],
      map: map
    });
  });
}
