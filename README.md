# otl-historical-town-borders
Scroll-driven story map, with narrative text and multiple GeoJSON layers

## Demo
http://jackdougherty.github.io/otl-historical-town-borders/index.html

## Based on
- http://github.com/jackdougherty/leaflet-storymap-layers

## Credits
- Thanks @ilyankou for coding the add/remove layers with the scrolling interface  
- Adapted from MUX Lab, Map Effects 100: https://github.com/muxlab/map-effects-100, see http://muxlab.github.io/map-effects-100/Leaflet/11_scroll-driven-map-navigation.html

## To create individual map layers for this map
- start with present-day polygon map and go backwards in time
- create CSV of prior year towns, and use Mapshaper.org
  - join CT-towns-merged.csv keys=town,town
  - dissolve merged


## Create your own version
- Start with map.csv template and add chapters, descriptions, zoom levels, center coordinates, images, layers
- Convert the map.csv into map.geojson with http://geojson.io
- Upload additional GeoJSON layer files (such as boundaries to be displayed) into layer folder
- See more details (to come) in http://DataVizForAll.org

## To Do
- Ilya's note: If for some reason the last chapter doesn't get active (the case for big screen sizes), replace value of areaTop in script.js from -100 to -200 or more.
- remove my placeholder images and create a richer story
- remove unnecessary files from the template and move to otl-version
- add polygon styling, display feature properties via click or hover
- add instructions in DataVizForAll.org
- explain how to add markers if desired
