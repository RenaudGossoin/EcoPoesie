var map = L.map("map", { zoomControl: true, position: "bottomright" }).setView(
  [22.734371, 1.9625],
  4
);
L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
  {
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 3,
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    crossOrigin: true,
  }
).addTo(map);

const iconSize = [15, 15];
const popupAnchor = [-3, -10];

var iconBati = L.icon({
  iconUrl: "/Assets/icon/icon_bati.png",
  //shadowUrl: 'leaf-shadow.png',
  iconSize: iconSize,
  //shadowSize:  [50, 64],
  iconAnchor: [10, 10],
  //shadowAnchor: [4, 62],
  popupAnchor: popupAnchor,
});

var iconEau = L.icon({
  iconUrl: "/Assets/icon/icon_eau.png",
  //shadowUrl: 'leaf-shadow.png',
  iconSize: iconSize,
  //shadowSize:  [50, 64],
  iconAnchor: [10, 10],
  //shadowAnchor: [4, 62],
  popupAnchor: popupAnchor,
});

var iconExtraction = L.icon({
  iconUrl: "/Assets/icon/icon_extraction.png",
  //shadowUrl: 'leaf-shadow.png',
  iconSize: iconSize,
  //shadowSize:  [50, 64],
  iconAnchor: [10, 10],
  //shadowAnchor: [4, 62],
  popupAnchor: popupAnchor,
});

let blue = false;
let white = false;
let red = false;
let markerEau = {};
let clikMaker = {};

function showBlue() {
  if (!blue) {
    markerEau = L.marker([14.497401, -14.452362], { icon: iconEau })
      .addTo(map)
      .bindPopup("markerEau");
    clikMaker = L.marker([-11.601573, -12.868937], { icon: iconEau })
      .addTo(map)
      .bindPopup("Pour afficher les points bleus");
    blue = true;
  } else if (blue) {
    map.removeLayer(markerEau);
    map.removeLayer(clikMaker);
    console.log(blue);
    blue = false;
  }
}

const markerBati = L.marker([12.85837, 10.294481], { icon: iconBati })
  .addTo(map)
  .bindPopup("markerBati");
const markerExtraction = L.marker([22.734371, 1.9625], { icon: iconExtraction })
  .addTo(map)
  .bindPopup("markerExtraction");

// bouton pour afficher les points sur la carte
