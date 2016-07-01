# otl-town-borders
Scroll-driven story map, with narrative text and ability to insert tile layers and GeoJSON layers

## Links
- http://jackdougherty.github.io/otl-town-borders/index-frame.html
- http://jackdougherty.github.io/otl-town-borders/test.html

## embed shortcode in http://OnTheLine.trincoll.edu
```
[iframe src='http://jackdougherty.github.io/otl-town-borders/index.html' width='100%' height=525]
```

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
- Go back and revise map boundaries for 1835-54 West Hartford/Farmington/Bloomfield
- Add onEachFeature styling to show town name on click or hover

## Towns from source

CT State Register, http://www.ct.gov/sots/cwp/view.asp?a=3188&q=392440

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

## Digitized CT or Hartford County maps with town boundaries from MAGIC, Rumsey, NYPL
- MAGIC historical map collection http://magic.lib.uconn.edu/historical_maps_connecticut.html
- MAGIC WMS http://geoserver.lib.uconn.edu:8080/geoserver/web/?wicket:bookmarkablePage=:org.geoserver.web.demo.MapPreviewPage
- http://www.davidrumsey.com/home
- http://maps.nypl.org/warper/

Notes on which to use for QGIS digitization and/or display in storymap

Check "history of hartford county" book for maps and list of towns (Middletown?)

* = display

- * MAGIC:Connecticut_Griswold_1625 (circa 1625 Native Americans, drawn 1930 https://www.flickr.com/photos/uconnlibrariesmagic/3332840235/)
- * MAGIC:1758_Kitchin - requested WMS; hard to georef (no Suffield, Enfield? https://www.flickr.com/photos/uconnlibrariesmagic/3333721828/)
- * MAGIC:Connecticut_Park_1766 (probably inexact boundaries; southern towns appear inside Hartford County; Suffield, Enfield appear; Hartland not yet https://www.flickr.com/photos/uconnlibrariesmagic/3333722298/)
- * MAGIC:1780_Covens (probably inexact boundaries; southern towns appear inside Hartford County; Hartland not yet https://www.flickr.com/photos/uconnlibrariesmagic/3332887013/)
- * MAGIC:Connecticut_1792_Blodget  (inexact boundaries but more complete https://www.flickr.com/photos/uconnlibrariesmagic/3333723742/)
- MAGIC:Connecticut_Doolittle_1795 (southern towns appear inside Hartford County)
- * MAGIC:Connecticut_Tanner_1796  (more precise than Doolittle_1795; no county line)
- MAGIC:Connecticut_Sotzmann_1796  (county outline is closer to contemporary)
- MAGIC:Connecticut_Anderson_1799  (Marlborough appears early but not yet labeled)
- * MAGIC:1811_Warren (very exact county outline; Marlborough, Canton labeled)
- NYPL 1814 Carey (do not use, no Canton appears)
- Rumsey 1826 Finley (no Manchester yet; NOT yet georef)
- Rumsey 1836 Tanner (Manchester, but no Bloomfield yet; NOT yet georef)
- Rumsey 1838 Bradford (Manchester, but Bloomfield not yet outlined)
- NYPL 1842 Morse in NYPL (Bloomfield as small box; can download georectTIFF for QGIS and XYZ.png, but does not match county outline; http://maps.nypl.org/warper/maps/7363#Export_tab)
- Rumsey 1845 Tanner (no West Hartford yet)
- * MAGIC:Mitchell_18501 (colorful counties but hard to see town details)
- Rumsey 1854 Brown (colorful, but no West Hartford or Windsor Locks)
- * MAGIC:HartfordCounty_Woodford_1855 (matches county boundaries better than Mitchell 1850; includes West Hartford, South Windsor)
- Rumsey 1855 Mitchell (avoid using since no South Windsor shown)
- Rumsey 1858 Brown (colorful, with small West Hartford; W Locks; E Granby not sep)
- * MAGIC:1859_Tackabury (hard to see details, but geographically precise)
- Rumsey 1859 Mitchell (no East Granby)
- Rumsey 1859b Mitchell (similar to above)
- * MAGIC:Hurd_1893_12_13 (shows Newington)
- MAGIC:USGS_1895_s24 (hard to see boundaries?)

### Combined towns and maps

- * MAGIC:Connecticut_Griswold_1625 (circa 1625 Native Americans, drawn 1930 https://www.flickr.com/photos/uconnlibrariesmagic/3332840235/)
The three Constitution towns:
- Windsor settled 1633, named 1637
- Wethersfield settled 1633, named 1637
- Hartford founded 1633, settled 1635, named 1637
* ADD Hartford 1640 map (drawn 1886?) https://www.flickr.com/photos/uconnlibrariesmagic/3836896031/
Early new towns:
- Farmington, settled 1640, incorporated and named 1645
- Simsbury, settled and named, 1670
Towns carved out of existing towns (or annexed from Massachusetts)
- Glastonbury, set off from Wethersfield and incorporated, 1692-93
- Suffield, annexed from Massachusetts to Connecticut, 1749
- Enfield, annexed from Massachusetts to Connecticut, 1749
- Hartland, incorporated 1761
- * MAGIC:Connecticut_Park_1766 (probably inexact boundaries; southern towns appear inside Hartford County; Suffield, Enfield appear; Hartland not yet https://www.flickr.com/photos/uconnlibrariesmagic/3333722298/)
- East Windsor, incorporated from Windsor, 1768
- Southington, incorporated from Farmington, 1779
- * MAGIC:1780_Covens (probably inexact boundaries; southern towns appear inside Hartford County; Hartland not yet https://www.flickr.com/photos/uconnlibrariesmagic/3332887013/)
- East Hartford, incorporated from Hartford, 1783
- Berlin, incorporated from Farmington, Middletown, Wethersfield, 1785
- Bristol, incorporated from Farmington, 1785
- Granby, incorporated from Simsbury, 1786
- * MAGIC:Connecticut_Tanner_1796  (more precise than Doolittle_1795; no county line)
- Marlborough, incorporated from Colchester, Glastonbury and Hebron, 1803
- Burlington, incorporated from Bristol, 1806
- Canton, incorporated from Simsbury, May, 1806,
- * MAGIC:1811_Warren (very exact county outline; Marlborough, Canton labeled)
- Manchester, incorporated from East Hartford, May, 1823,
- Avon, incorporated from Farmington, May, 1830
- Bloomfield, incorporated from Windsor, May, 1835
- Rocky Hill, incorporated from Wethersfield, May, 1843.
- South Windsor, incorporated and named from East Windsor, 1845
- * MAGIC:Mitchell_18501 (colorful counties but hard to see town details)
- New Britain, incorporated from Berlin, 1850
- West Hartford, incorporated from Hartford, 1854
- Windsor Locks, incorporated from Windsor, 1854
- * MAGIC:HartfordCounty_Woodford_1855 (matches county boundaries better than Mitchell 1850; includes West Hartford, South Windsor)
- East Granby, incorporated from Granby and Windsor Locks, 1858.
- * MAGIC:1859_Tackabury (hard to see details, but geographically precise)
- Plainville, incorporated from Farmington, 1869.
- Newington, incorporated from Wethersfield, 1871.
- * MAGIC:Hurd_1893_12_13 (shows Newington)

## notes
- Town boundaries are estimated based on the best available digitized maps, and are not based on detailed archival records. Inexact lines include the 1850s boundary divisions between West Hartford, Farmington, Avon, and Bloomfield.

## START again
- with Marlborough
