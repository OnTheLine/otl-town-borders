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

  - Later, try to add this http://geoserver.lib.uconn.edu:8080/geoserver/MAGIC/wms?service=WMS&version=1.1.0&request=GetMap&layers=MAGIC:HartfordCounty_Woodford_1855&styles=&bbox=-73.2127567185954,41.327786392292275,-72.24597452643688,42.273108007408794&width=768&height=750&srs=EPSG:4326&format=application/openlayers


## To Do
- asked Ilya for help with fillColor issue
- Ilya's note: If for some reason the last chapter doesn't get active (the case for big screen sizes), replace value of areaTop in script.js from -100 to -200 or more.
- remove my placeholder images and create a richer story
- add polygon styling, display feature properties via click or hover
- add instructions in DataVizForAll.org
- explain how to add markers if desired
