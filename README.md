# otl-town-borders
Scroll-driven historical story map of Hartford County, Connecticut town borders, with narrative text and ability to insert tile layers and GeoJSON layers

## Link
- https://ontheline.github.io/otl-town-borders/index-frame.html

## Embed in [On The Line book](http://ontheline.trincoll.edu)
```
<iframe src="https://ontheline.github.io/otl-town-borders/index.html" width="100%" height=500></iframe>
```

## Based on
- http://github.com/jackdougherty/leaflet-storymap-layers

## Credits
- Thanks @ilyankou for coding the add/remove tiles and layers with the scrolling interface  

## Historical sources

Boundaries shown here are NOT exact, but approximated from the best available digital sources:
- Began with present-day Hartford County town boundaries at 1:100,000 scale from UConn Libraries MAGIC / US Census http://magic.lib.uconn.edu/connecticut_data.html#boundaries
- Working backward in time, edited boundaries to match historical sources listed below
- UConn Libraries MAGIC historical maps http://magic.lib.uconn.edu, specifically these layers on their WMS server http://geoserver.lib.uconn.edu:8080/geoserver/web/?wicket:bookmarkablePage=:org.geoserver.web.demo.MapPreviewPage
  - MAGIC:Connecticut_Griswold_1625
  - MAGIC:Connecticut_Park_1766
  - MAGIC:Covens_1780
  - MAGIC:Connecticut_Doolittle_1795
  - MAGIC:1811_Warren
  - MAGIC:HartfordCounty_Woodford_1855
  - MAGIC:Hurd_1893_page_12_13
- Atlas of Historical County Boundaries at Newberry Library (Connecticut narrative and GIS files) http://publications.newberry.org/ahcbp/pages/Connecticut.html
- Connecticut State Register and Manual, Connecticut Towns in the Order of their Establishment (last updated 2008) http://www.ct.gov/sots/cwp/view.asp?a=3188&q=392440
- Roland Mather Hooker, Boundaries of Connecticut (New Haven: Published for the Tercentenary Commission by the Yale University Press, 1933), http://www.worldcat.org/oclc/370937
- “Map of the School Districts of the City of Hartford,” 1917, georectified at http://mapwarper.net/maps/14781, from the “Sanborn Fire Insurance Map from Hartford, Hartford County, Connecticut.,” map (1917), Library of Congress, https://www.loc.gov/item/sanborn01132_004/.

Also consulted other digital map repositories:
- David Rumsey map collection http://www.davidrumsey.com/home
- NYPL map collection http://maps.nypl.org/warper/
- MapWarper http://mapwarper.net

But did not find any sources that added new info for this purpose, with possible exception of 1842 Morse map described in known issues section.

For historical background, start with:
- Diana Ross McCain, “Andover to Woodstock: How Connecticut Ended Up with 169 Towns,” ConnecticutHistory.org, 2016, http://connecticuthistory.org/andover-to-woodstock-how-connecticut-ended-up-with-169-towns/.
- Kristen N. Keegan and William F. Keegan, “Exploring Early Connecticut Mapmaking,” ConnecticutHistory.org, 2012, http://connecticuthistory.org/exploring-early-connecticut-mapmaking/.
- Robert Baron, “Surveying Connecticut’s Borders,” ConnecticutHistory.org, 2012, http://connecticuthistory.org/surveying-connecticuts-borders/.

## Known border issues

The following borders are based on best estimates from available digital sources, and do not include detailed archival research. If you have better information, please share.

- unclear borders between West Hartford, Farmington, Avon, and Bloomfield in 1840s-50s. See NYPL 1842 Morse map (http://maps.nypl.org/warper/maps/7363) that displays smaller initial boundary for Bloomfield, but cannot use until georectification is improved.
```
  var map1842 = new L.tileLayer.wms("http://maps.nypl.org/warper/maps/wms/7363?", {
     attribution: '1842 <a href="http://maps.nypl.org/warper/">NYPL Map Warper</a>'
  });
  controlLayers.addBaseLayer(map1842, '1842 map');
```
- for more detail on borders between Newington, Wethersfield, Farmington, and Berlin, see Charles Burpee, "Chapter LVI: Frontier Parish Confusions," History of Hartford County, volume 2 (1928), pp. 1160-1174, https://archive.org/details/historyofhartfor02burp

- on border between Wethersfield and Glastonbury prior to 1873, see Glastonbury town statement from that year, http://www.worldcat.org/oclc/49389998

- town boundaries on the edges of Hartford County from 1639 to 1806 are based on Atlas of Historical County Boundaries Project, but boundaries inside the county outline are estimated

Also, note that borders and historical maps may not match precisely due to the original source and the georectification process.

## How it works
- All of the narrative text and map data are stored in open-source formats (csv and GeoJSON), separate from the open-source Leaflet Javascript mapping code (index.html, script.js, and style.css), for historical preservation and future platform migration.
- The narrative text and zoom points are stored in map.csv (editable in any spreadsheet tool), then converted into map.geojson with the http://geojson.io tool, which is read by the script.js code.
- Boundary layers were edited in QGIS, saved for any future edits in Esri GIS format (in qgis folder), and exported into GeoJson files (in layer folder), and referenced by year in map.csv
- Background map tile layers are listed in script.js, and referenced by year in map.csv. Historical map tile layers are hosted on a WMS server at UConn Libraries MAGIC.
- Selected images are stored in the img folder and referenced in map.csv
- The storymap title can be modified in index.html
- The code uses jQuery to imitate "click" in legend control layers radio button to change tile layers. In this version, the legend is hidden in style.css, with option to display if desired.
- Note: If for some reason the last chapter doesn't get active (the case for big screen sizes), replace value of areaTop in script.js from -100 to -200 or more.
- Learn more about related Leaflet Storymap code templates in http://DataVizForAll.org
