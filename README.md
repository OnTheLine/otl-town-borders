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

## Decide on text format

The three Constitution towns:
- Windsor settled 1633, named 1637
- Wethersfield settled 1633, named 1637
- Hartford founded 1633, settled 1635, named 1637
Early new towns:
- Farmington, settled 1640, incorporated and named 1645
- Simsbury, settled and named, 1670
Towns carved out of existing towns (or annexed from Massachusetts)
- Glastonbury, set off from Wethersfield and incorporated, 1692-93
- Suffield, annexed from Massachusetts to Connecticut, 1749
- Enfield, annexed from Massachusetts to Connecticut, 1749
- Hartland, incorporated 1761
- East Windsor, incorporated from Windsor, 1768
- Southington, incorporated from Farmington, 1779
- East Hartford, incorporated from Hartford, 1783
- Berlin, incorporated from Farmington, Middletown, Wethersfield, 1785
- Bristol, incorporated from Farmington, 1785
- Granby, incorporated from Simsbury, 1786
- Marlborough, incorporated from Colchester, Glastonbury and Hebron, 1803
- Burlington, incorporated from Bristol, 1806
- Canton, incorporated from Simsbury, May, 1806,
- Manchester, incorporated from East Hartford, May, 1823,
- Avon, incorporated from Farmington, May, 1830
- Bloomfield, incorporated from Windsor, May, 1835
- Rocky Hill, incorporated from Wethersfield, May, 1843.
- South Windsor, incorporated and named from East Windsor, 1845
- New Britain, incorporated from Berlin, 1850
- West Hartford, incorporated from Hartford, 1854
- Windsor Locks, incorporated from Windsor, 1854
- East Granby, incorporated from Granby and Windsor Locks, 1858.
- Plainville, incorporated from Farmington, 1869.
- Newington, incorporated from Wethersfield, 1871.




## To Do
- Add WMS tiles to the map story, to insert at appropriate times when maps were published
- Create index-frame version with caption and source info
- Find better boundary source info for West Hartford/Farmington/Bloomfield
- I hard-coded fillColor, but asked Ilya for help with fillColor issue
- Ilya's note: If for some reason the last chapter doesn't get active (the case for big screen sizes), replace value of areaTop in script.js from -100 to -200 or more.
