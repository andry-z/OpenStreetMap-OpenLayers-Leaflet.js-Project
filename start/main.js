import L from "leaflet";
<<<<<<< HEAD
import comunitaliani from "./data/comunitaliani.js";
import LayerRenderer from "ol/renderer/Layer";
=======
import data from "./data/comuni_italiani.js";
>>>>>>> 59e4055f75cb8195281e2dc711a3b9d54025a5f4

const coords = {
  bari: [41.117143, 16.871871],
};

<<<<<<< HEAD
const map = L.map("map", {
  center: coords.bari,
  zoom: 10,
});

L.tileLayer("https://a.tile.openstreetmap.org/{z}/{x}/{y}.png ", {
=======
L.Icon.Default = L.Icon.extend({
  iconUrl: "https://www.flaticon.com/svg/static/icons/svg/678/678100.svg",
  iconSize: [64, 64],
});

const map = L.map("map", {
  center: coords.bari,
  zoom: 10,
  maxZoom: 18,
});

/* L.tileLayer(
  "https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}@2x.jpg?key=BbRkFHV6XvPHPDamG2nz",
  {
    attribution:
      'Map data &copy; <a href="https://www.openseamap.org/">OpenSeaMap</a> contributors',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(map); */

L.tileLayer("https://a.tile.openstreetmap.org/{z}/{x}/{y}.png", {
>>>>>>> 59e4055f75cb8195281e2dc711a3b9d54025a5f4
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
  tileSize: 512,
  zoomOffset: -1,
}).addTo(map);

<<<<<<< HEAD
L.tileLayer(
  "https://api.maptiler.com/tiles/hillshades/{z}/{x}/{y}.png?key=0bkLgBXblfwR15z6e8m9 ",
  {
    // attribution:
    // 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
=======
/* 
L.tileLayer("http://tiles.openseamap.org/seamark/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="https://www.openseamap.org/">OpenSeaMap</a> contributors',
  maxZoom: 18,
  tileSize: 512,
  zoomOffset: -1,
}).addTo(map); */

L.tileLayer(
  "https://api.maptiler.com/tiles/hillshades/{z}/{x}/{y}.png?key=BbRkFHV6XvPHPDamG2nz",
  {
>>>>>>> 59e4055f75cb8195281e2dc711a3b9d54025a5f4
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(map);

<<<<<<< HEAD
L.tileLayer("http://tiles.openseamap.org/seamark/{z}/{x}/{y}.png", {
  attribution:
    '<a href="https://www.openseamap.org/">OpenSeaMap</a> contributors',
  maxZoom: 18,
  tileSize: 512,
  zoomOffset: -1,
}).addTo(map);

var circle = L.circle(["41.1501", "16.7662"], {
  color: "red",
  fillColor: "#84170e",
  fillOpacity: 0.9,
  radius: 130,
});

circle.addTo(map);

L.geoJSON(comunitaliani)
  .addTo(map)
  .bindPopup(function (comuni) {
    return (
      "<b>" +
      comuni.feature.properties.nome_com +
      "</b><br/><a href='" +
      comuni.feature.properties.link +
      "' >Portale opendata</a>"
=======
var circle = L.circle(coords.bari, {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 50,
}).addTo(map);

L.geoJSON(data)
  .bindPopup(function (layer) {
    return (
      '<a href="' +
      layer.feature.properties.link +
      '" target="_blank">' +
      layer.feature.properties.nome_com +
      "</a>"
>>>>>>> 59e4055f75cb8195281e2dc711a3b9d54025a5f4
    );
  })
  .addTo(map);
