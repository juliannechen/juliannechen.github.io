var view;
var map;
var initialLocation;
var london;
var sfBayArea;

function init(){
  initialLocation = ol.proj.fromLonLat([41.043316,28.862457]);
  london = ol.proj.fromLonLat([-0.12755, 51.507222]);

  view = new ol.View({
    center: initialLocation,
    zoom: 6
  });

  map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    loadTilesWhileAnimating: true,
    view: view
  });
}

function panHome() {
  view.animate({
    center: london,
    duration: 2000
  })
}

function rotate() {
  view.animate({
    rotation: view.getRotation() - Math.PI / 2
  })
}


window.onload = init;
