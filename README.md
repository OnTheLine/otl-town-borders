# otl-town-borders
Scroll-driven story map of Hartford County, Connecticut town borders, with narrative text and ability to insert tile layers and GeoJSON layers

## Link
- http://jackdougherty.github.io/otl-town-borders/index-frame.html

## embed shortcode in http://OnTheLine.trincoll.edu
```
[iframe src='http://jackdougherty.github.io/otl-town-borders/index.html' width='100%' height=525]
```

## Based on
- http://github.com/jackdougherty/leaflet-storymap-layers

## Credits
- Thanks @ilyankou for coding the add/remove tiles and layers with the scrolling interface  

## Historical sources

See narrative text in map.csv (easy to edit in any spreadsheet tool, manually synced into map.geojson with http://geojson.io)

Boundaries shown here are NOT exact, but approximated from the best available digital sources:
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
- Also consulted other digital map repositories (http://www.davidrumsey.com/home
 and http://maps.nypl.org/warper/ and http://mapwarper.net), but did not find any sources that added new info for this purpose, with possible exception of 1842 Morse map described in known issues.

For historical background, start with:
- Diana Ross McCain, “Andover to Woodstock: How Connecticut Ended Up with 169 Towns,” ConnecticutHistory.org, 2016, http://connecticuthistory.org/andover-to-woodstock-how-connecticut-ended-up-with-169-towns/.
- Kristen N. Keegan and William F. Keegan, “Exploring Early Connecticut Mapmaking,” ConnecticutHistory.org, 2012, http://connecticuthistory.org/exploring-early-connecticut-mapmaking/.
- Robert Baron, “Surveying Connecticut’s Borders,” ConnecticutHistory.org, 2012, http://connecticuthistory.org/surveying-connecticuts-borders/.


## Known border issues

The following borders are based on best estimates from available digital sources, and do not include detailed archival research. If you have better information, please share.

- unclear border between Hartford and Windsor/Bloomfield from 1600s into early 1800s

- unclear borders between West Hartford, Farmington, Avon, and Bloomfield in 1840s-50s. See NYPL 1842 Morse map (http://maps.nypl.org/warper/maps/7363) that displays smaller initial boundary for Bloomfield, but cannot use until georectification is improved.
```
  var map1842 = new L.tileLayer.wms("http://maps.nypl.org/warper/maps/wms/7363?", {
     attribution: '1842 <a href="http://maps.nypl.org/warper/">NYPL Map Warper</a>'
  });
  controlLayers.addBaseLayer(map1842, '1842 map');
```
- for more detail on borders between Newington, Wethersfield, Farmington, and Berlin, see Charles Burpee, "Chapter LVI: Frontier Parish Confusions," History of Hartford County, volume 2 (1928), pp. 1160-1174, https://archive.org/details/historyofhartfor02burp

- on border between Wethersfield and Glastonbury prior to 1873, see Glastonbury town statement from that year, http://www.worldcat.org/oclc/49389998

- boundaries from 1639 to 1758 are estimated based on AHCBP for Hartford County

Also, note that borders and historical maps may not match precisely due to the original source and the georectification process.

## How it works
- All of the narrative text and map data are stored in open-source formats (csv and GeoJson), separate from the open-source Leaflet Javascript mapping code, for historical preservation and future platform migration.
- The narrative text and zoom points are stored in map.csv (editable in any spreadsheet tool), then converted into map.geojson with the http://geojson.io tool
- Boundary layers were edited in QGIS, exported into GeoJson files in the layer folder, and referenced by year in map.csv
- Background map tile layers are listed in script.js, and referenced by year in map.csv. Historical map tile layers are hosted on a WMS server at UConn Libraries MAGIC.
- Selected images are stored in the img folder and referenced in map.csv
- The storymap title can be modified in index.html
- Thanks @ilyankou for creative solution on using jQuery to imitate "click" in legend control layers radio button to change tile layers. In this version, the legend is hidden in style.css, with option to display if desired.
- Note: If for some reason the last chapter doesn't get active (the case for big screen sizes), replace value of areaTop in script.js from -100 to -200 or more.
- Learn more about related Leaflet Storymap code templates in http://DataVizForAll.org

## To Do
- display starIcon to indicate Hartford, but prevent removal? in script.js
```
//  TO DO: Add star on modern State Capitol and prevent removal?
var starIcon = L.icon({
  iconUrl: 'img/star-18.png',
  iconRetinaUrl: 'img/star-18@2x.png',
  iconSize: [18, 18]
});
L.marker([41.7646, -72.6823], {icon: starIcon}).addTo(map);
```

- Add onEachFeature hover feature to display town name in info window? Is this necessary or desirable?
