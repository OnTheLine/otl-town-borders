# otl-historical-town-borders
Scroll-driven story map, with narrative text and multiple GeoJSON layers

## Demo
http://jackdougherty.github.io/otl-historical-town-borders/index.html

## Based on
- http://github.com/jackdougherty/leaflet-storymap-layers

## Credits
- Thanks @ilyankou for coding the add/remove layers with the scrolling interface  
- Adapted from MUX Lab, Map Effects 100: https://github.com/muxlab/map-effects-100, see http://muxlab.github.io/map-effects-100/Leaflet/11_scroll-driven-map-navigation.html

## Create your own version
- Start with map.csv template and add chapters, descriptions, zoom levels, center coordinates, images, layers
- Convert the map.csv into map.geojson with http://geojson.io
- Upload additional GeoJSON layer files (such as boundaries to be displayed) into layer folder
- See more details (to come) in http://DataVizForAll.org

## To create individual map layers
- start with present-day polygon map and go backwards in time to add towns back into their origin polygons
- create CSV of prior year towns, and use Mapshaper.org to join, dissolve, join, rename:
  - join year18xx.csv keys=Town,Town
  - dissolve Merged
  - join year18xx.csv keys=Merged,Town
  - rename-fields Town=Merged
- for years when a town was incorporated from two towns (eg 1858 East Granby came from Granby and Windsor Locks), used geojson.io map editor button to manually drag both boundaries into place, as shown on historical map

## MAGIC WMS historical map layers to consider

- 1792 Blodget
http://geoserver.lib.uconn.edu:8080/geoserver/MAGIC/wms?service=WMS&version=1.1.0&request=GetMap&layers=MAGIC:1792_Blodget&styles=&bbox=-73.79212017731558,40.746652042182845,-71.622700316519,42.13667880169626&width=768&height=492&srs=EPSG:4326&format=application/openlayers

- 1795 Doolittle (use)
http://geoserver.lib.uconn.edu:8080/geoserver/MAGIC/wms?service=WMS&version=1.1.0&request=GetMap&layers=MAGIC:Connecticut_Doolittle_1795&styles=&bbox=-73.9224412221173,40.79874366827494,-71.5702012221173,42.17902366827494&width=768&height=450&srs=EPSG:4326&format=application/openlayers

- 1797 Doolittle
http://geoserver.lib.uconn.edu:8080/geoserver/MAGIC/wms?service=WMS&version=1.1.0&request=GetMap&layers=MAGIC:Connecticut_Doolittle_1797&styles=&bbox=-73.89549101846971,40.7188080233761,-71.56849301846972,42.231240023376095&width=768&height=499&srs=EPSG:4326&format=application/openlayers

- 1796 Tanner
http://geoserver.lib.uconn.edu:8080/geoserver/MAGIC/wms?service=WMS&version=1.1.0&request=GetMap&layers=MAGIC:Connecticut_Tanner_1796&styles=&bbox=-73.97467578550467,40.6754746928396,-71.55141978550468,42.216340692839594&width=768&height=488&srs=EPSG:4326&format=application/openlayers

- 1796 Sotzmann
http://geoserver.lib.uconn.edu:8080/geoserver/MAGIC/wms?service=WMS&version=1.1.0&request=GetMap&layers=MAGIC:Connecticut_Sotzmann_1796&styles=&bbox=-73.82097063567721,40.773271453148524,-71.60172163567721,42.16310045314852&width=768&height=480&srs=EPSG:4326&format=application/openlayers

- 1811 Warren (use)
http://geoserver.lib.uconn.edu:8080/geoserver/MAGIC/wms?service=WMS&version=1.1.0&request=GetMap&layers=MAGIC:1811_Warren&styles=&bbox=-73.89135389600216,40.716840125072665,-71.55342102041162,42.145477391639&width=768&height=469&srs=EPSG:4326&format=application/openlayers

- 1855 Woodford (use) http://geoserver.lib.uconn.edu:8080/geoserver/MAGIC/wms?service=WMS&version=1.1.0&request=GetMap&layers=MAGIC:HartfordCounty_Woodford_1855&styles=&bbox=-73.2127567185954,41.327786392292275,-72.24597452643688,42.273108007408794&width=768&height=750&srs=EPSG:4326&format=application/openlayers


## To Do
- asked Ilya for help with fillColor issue
- Ilya's note: If for some reason the last chapter doesn't get active (the case for big screen sizes), replace value of areaTop in script.js from -100 to -200 or more.
- remove my placeholder images and create a richer story
- add polygon styling, display feature properties via click or hover
- add instructions in DataVizForAll.org
- explain how to add markers if desired
