# otl-historical-town-borders
Scroll-driven story map, with narrative text and multiple GeoJSON layers

## Links
- Demo http://jackdougherty.github.io/otl-historical-town-borders/index.html
- iframe [iframe src='http://jackdougherty.github.io/otl-historical-town-borders/index.html' width='100%' height=525]

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
  - create year18xx.csv with Town, Year, Flag
  - join year18xx.csv keys=Town,Town
  - dissolve Merged
  - join year18xx.csv keys=Merged,Town
  - rename-fields Town=Merged
- for years when a town was incorporated from two towns (eg 1858 East Granby came from Granby and Windsor Locks), used geojson.io map editor button to manually drag both boundaries into place, as shown on historical map


## To Do
- Create index-frame version with caption and source info
- Find better boundary source info for West Hartford/Farmington/Bloomfield
- Add WMS layers to the map story, to insert at appropriate times when maps were published
- I hard-coded fillColor, but asked Ilya for help with fillColor issue
- Ilya's note: If for some reason the last chapter doesn't get active (the case for big screen sizes), replace value of areaTop in script.js from -100 to -200 or more.
