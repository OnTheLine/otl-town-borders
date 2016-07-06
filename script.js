var imageContainerMargin = 70;  // Margin + padding
var currentBox = 0;
var scrollPosition = 0;

// This watches for the scrollable container
$('div#contents').scroll(function() {
  scrollPosition = $(this).scrollTop();
});

// This highlights selected GeoJSON polygons marked with flag = 1; values not listed in ranges below display as the last color (white)
function getFillColor(d) {
  return  d == 1 ? 'red' :
          'white';
}

function style(feature) {
  return {
    color: 'blue',
    fillColor: getFillColor(feature.properties.flag),
    weight: 2,
    fillOpacity: 0.2
  };
}

// This adds data as a new layer to the map
function refreshLayer(data, map, coord, zoom) {
  var dataLayer = L.geoJson(data, {
      style: style,
      //onEachFeature: onEachFeature // future option to show town name on click or hover
  });
  dataLayer.addTo(map);
  map.setView([coord[1], coord[0]], zoom);
}

function initMap() {
  // Although all coordinates and zoom are pulled from map.geojson, insert initial data here for smooth startup
  var map = L.map('map', {
    center: [41.79, -72.717],
    zoom: 10,
    scrollWheelZoom: false
  });

  // This customizes link to view source code; add your own GitHub repository
  map.attributionControl
  .setPrefix('View <a href="http://github.com/jackdougherty/otl-town-borders" target="_blank">code on GitHub</a> with <a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>');

  // Legend control layers - global variable with (null, null) allows indiv layers to be added inside functions below
  // See style.css code that intentionally hides legend control in this version
  var controlLayers = L.control.layers( null, null, {
    position: "bottomright",
    collapsed: false // false = open by default
  }).addTo(map);

  // tileLayer.WMS as a baselayer - see http://leafletjs.com/reference.html#tilelayer-wms
  // UConn MAGIC WMS settings - see http://geoserver.lib.uconn.edu:8080/geoserver/web/?wicket:bookmarkablePage=:org.geoserver.web.demo.MapPreviewPage
  var map1625 = new L.tileLayer.wms("http://geoserver.lib.uconn.edu:8080/geoserver/MAGIC/wms?", {
    layers: 'MAGIC:Connecticut_Griswold_1625',
    attribution: 'c1625 <a href="http://magic.library.uconn.edu">MAGIC UConn</a>'
  });
  controlLayers.addBaseLayer(map1625, '1625 map');

  var map1758 = new L.tileLayer.wms("http://geoserver.lib.uconn.edu:8080/geoserver/MAGIC/wms?", {
    layers: 'MAGIC:Kitchin_1758',
    attribution: '1758 <a href="http://magic.library.uconn.edu">MAGIC UConn</a>'
  });
  controlLayers.addBaseLayer(map1758, '1758 map');

  var map1780 = new L.tileLayer.wms("http://geoserver.lib.uconn.edu:8080/geoserver/MAGIC/wms?", {
    layers: 'MAGIC:Covens_1780',
    attribution: '1780 <a href="http://magic.library.uconn.edu">MAGIC UConn</a>'
  });
  controlLayers.addBaseLayer(map1780, '1780 map');

  var map1795 = new L.tileLayer.wms("http://geoserver.lib.uconn.edu:8080/geoserver/MAGIC/wms?", {
    layers: 'MAGIC:Connecticut_Doolittle_1795',
    attribution: '1795 <a href="http://magic.library.uconn.edu">MAGIC UConn</a>'
  });
  controlLayers.addBaseLayer(map1795, '1795 map');

  var map1811 = new L.tileLayer.wms("http://geoserver.lib.uconn.edu:8080/geoserver/MAGIC/wms?", {
    layers: 'MAGIC:1811_Warren',
    attribution: '1811 <a href="http://magic.library.uconn.edu">MAGIC UConn</a>'
  });
  controlLayers.addBaseLayer(map1811, '1811 map');

  var map1855 = new L.tileLayer.wms("http://geoserver.lib.uconn.edu:8080/geoserver/MAGIC/wms?", {
    layers: 'MAGIC:HartfordCounty_Woodford_1855',
    attribution: '1855 <a href="http://magic.library.uconn.edu">MAGIC UConn</a>'
  });
  controlLayers.addBaseLayer(map1855, '1855 map');

  var map1893 = new L.tileLayer.wms("http://geoserver.lib.uconn.edu:8080/geoserver/MAGIC/wms?", {
    layers: 'MAGIC:Hurd_1893_page_12_13',
    attribution: '1893 <a href="http://magic.library.uconn.edu">MAGIC UConn</a>'
  });
  controlLayers.addBaseLayer(map1893, '1893 map');

  // This displays the default tile layer
  var lightAll = new L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
  }).addTo(map);
  controlLayers.addBaseLayer(lightAll, 'present');

  //  FIX star on modern State Capitol
  var starIcon = L.icon({
    iconUrl: 'img/star-18.png',
    iconRetinaUrl: 'img/star-18@2x.png',
    iconSize: [18, 18]
  });
  L.marker([41.7646, -72.6823], {icon: starIcon}).addTo(map);

  // This loads the GeoJSON map data file from a local folder
  $.getJSON('map.geojson', function(data) {
    var geojson = L.geoJson(data, {
      onEachFeature: function (feature, layer) {
        (function(layer, properties) {

          // This creates the contents of each chapter from the GeoJSON data. Unwanted items can be removed, and new ones can be added
          var chapter = $('<p></p>', {
            text: feature.properties['chapter'],
            class: 'chapter-header'
          });

          // images and source credits been commented-out from this version
          // var image = $('<img>', {
          //   src: feature.properties['image'],
          // });

          // var source = $('<a>', {
          //   text: feature.properties['source-credit'],
          //   href: feature.properties['source-link'],
          //   target: "_blank",
          //   class: 'source'
          // });

          var description = $('<p></p>', {
            text: feature.properties['description'],
            class: 'description'
          });

          var container = $('<div></div>', {
            id: 'container' + feature.properties['id'],
            class: 'image-container'
          });

          // var imgHolder = $('<div></div', {
          //   class: 'img-holder'
          // });
          //
          // imgHolder.append(image);

          // imgHolder.append(image);
          // container.append(chapter).append(imgHolder).append(source).append(description);

          container.append(chapter).append(description);
          $('#contents').append(container);

          var i;
          var areaTop = -100;
          var areaBottom = 0;

          // Calculating total height of blocks above active
          for (i = 1; i < feature.properties['id']; i++) {
            areaTop += $('div#container' + i).height() + imageContainerMargin;
          }

          areaBottom = areaTop + $('div#container' + feature.properties['id']).height();

          $('div#contents').scroll(function() {
            if ($(this).scrollTop() >= areaTop && $(this).scrollTop() < areaBottom) {
              if (feature.properties['id'] != currentBox) {
                currentBox = feature.properties['id'];

                $('.image-container').removeClass("inFocus").addClass("outFocus");
                $('div#container' + feature.properties['id']).addClass("inFocus").removeClass("outFocus");

                // This removes all layers except the default base layer; change name if necessary
                map.eachLayer(function (layer) {
                  if (layer != lightAll) {
                    map.removeLayer(layer);
                  }
                });

                // This adds another data layer
                $.getJSON(feature.properties['layer'], function(data) {
                  var coord = feature.geometry['coordinates'];
                  var zoom = feature.properties['zoom'];
                  refreshLayer(data, map, coord, zoom);
                });

                // This loads the tile layer from map.geojson by imitating a click to the legend control span
                var tile = feature.properties['tile'];
                $($('span:contains(" ' + tile + '")').get(0)).siblings("input").click();
              }
            }
          });

        })(layer, feature.properties);
      }
    });

    $('#contents').append("<div class='space-at-the-bottom'><a href='#space-at-the-top'><i class='fa fa-chevron-up'></i></br><small>Top</small></a></div>");

  });
}


initMap();

$("div#contents").animate({ scrollTop: 5 });
