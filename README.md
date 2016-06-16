# otl-historical-town-borders
Scroll-driven story map, with narrative text and ability to insert tile layers and GeoJSON layers

## Links
- Demo http://jackdougherty.github.io/otl-historical-town-borders/index-frame.html
- iframe [iframe src='http://jackdougherty.github.io/otl-historical-town-borders/index.html' width='100%' height=525]

## Based on
- http://github.com/jackdougherty/leaflet-storymap-layers

## Credits
- Thanks @ilyankou for coding the add/remove layers with the scrolling interface  
- Adapted from MUX Lab, Map Effects 100: https://github.com/muxlab/map-effects-100, see http://muxlab.github.io/map-effects-100/Leaflet/11_scroll-driven-map-navigation.html

## Create your own version
- Start with map.csv template and add chapters, descriptions, zoom levels, center coordinates, tile layers, GeoJSON layers, and images
- Convert the map.csv into map.geojson with http://geojson.io
- Upload GeoJSON layer files (such as boundaries to be displayed) into layer folder
- See more details (to come) in http://DataVizForAll.org
- Note: If for some reason the last chapter doesn't get active (the case for big screen sizes), replace value of areaTop in script.js from -100 to -200 or more.

## To create and insert GeoJSON layers
- start with present-day polygon map and go backwards in time to add towns back into their origin polygons
- create CSV of prior year towns, and use Mapshaper.org to join, dissolve, join, rename:
  - create year18xx.csv with Town, Year, Flag (see script.js fillColor style to highlight selected polygons)
  - join year18xx.csv keys=Town,Town
  - dissolve Merged
  - join year18xx.csv keys=Merged,Town
  - rename-fields Town=Merged
- for years when a town was incorporated from two towns (eg 1858 East Granby came from Granby and Windsor Locks), used geojson.io map editor button to manually drag both boundaries into place, as shown on historical map
- for years when town boundaries are significantly redrawn, import GeoJSON boundary into QGIS, resave as shapefile layer, use QGIS editing tools to redraw lines, export as GeoJSON (see my more detailed notes)

## To insert tile layers
- in this version, the tile layers must be coded into the script.js file, with variable names
- in map.csv, insert tile layer legend display names into the tile column; avoid blanks and misspellings
- Thanks @ilyankou for creative solution for using jQuery to imitate "click" in legend control layers radio button to change tile layers; option to hide legend in style.css

## To Do
- Ask MAGIC about best sources for me to draw map boundaries, using their WMS layers in QGIS
- Go back and revise map boundaries for 1835-54 West Hartford/Farmington/Bloomfield
- Add onEachFeature styling to show town name on click or hover

## Towns from source: CT State Register, http://www.ct.gov/sots/cwp/view.asp?a=3188&q=392440

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

## Selected Historical Maps from MAGIC, Rumsey, NYPL
### Decide which to display, and which to use for drawing

MAGIC:Connecticut_Griswold_1625   (Native Americans, drawn 1930)
1758 Kitchin - asked MAGIC to WMS (no Suffield, Enfield?) http://magic.lib.uconn.edu/historical_maps_connecticut.html
MAGIC:Connecticut_Park_1766 (Suffield, Enfield appear; Hartland not in county yet)
1780 Covens - asked MAGIC to WMS  (clear map but very odd shape for county) http://magic.lib.uconn.edu/historical_maps_connecticut.html
MAGIC:1792_Blodget  (use to check lines, but very yellow, hard to show contrast)
MAGIC:Connecticut_Doolittle_1795 (use to check lines, but maybe drop due to mistaken yellow line?)
MAGIC:Connecticut_Tanner_1796  (use to check lines only; dull colors)
MAGIC:Connecticut_Sotzmann_1796  (also in Rumsey)  (use to check lines, use for colors?)
MAGIC:Connecticut_Anderson_1799  (Marlborough appears but is not labeled -- too early)
MAGIC:1811_Warren (use because Marlborough, Canton labeled)
1814 Carey in NYPL  (do not use, no Canton appears)
1826 Finley in Rumsey (no Manchester yet)
1836 Tanner in Rumsey (Manchester, but no Bloomfield yet)
1838 Bradford in Rumsey (Manchester, but Bloomfield not yet outlined)
1842 Morse in NYPL (Bloomfield as small box)
1845 Tanner in Rumsey (no West Hartford yet)
MAGIC:Mitchell_18501
1854 Brown in Rumsey (colorful, but no West Hartford or Windsor Locks)
MAGIC:HartfordCounty_Woodford_1855
1855 Mitchell in Rumsey (avoid using since no South Windsor shown)
1858 Brown in Rumsey (colorful, with small West Hartford; W Locks; E Granby not sep)
MAGIC:1859_Tackabury
1859 Mitchell in Rumsey (no East Granby)
1859b Mitchell in Rumsey (similar to above)
1893 Hurd (12-13) - asked MAGIC to WMS http://magic.lib.uconn.edu/historical_maps_connecticut.html
MAGIC:USGS_1895_s24
