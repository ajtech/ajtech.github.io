var mymap = L.map('mapid').setView([37.589518, -122.316996], 9);
	L.tileLayer('https://api.mapbox.com/styles/v1/ajtech/cjg2w5l222xig2sqynss5f7a2/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWp0ZWNoIiwiYSI6ImNpcW9kNmk0MzAxamFnbmpmYXI1aDB2ODkifQ.uqzMJErYGsvAA6NXYZEy-g', {
   	 attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
   	 maxZoom: 18,
 	   id: 'cjg2w5l222xig2sqynss5f7a2',
  	  accessToken: 'pk.eyJ1IjoiYWp0ZWNoIiwiYSI6ImNpcW9kNmk0MzAxamFnbmpmYXI1aDB2ODkifQ.uqzMJErYGsvAA6NXYZEy-g'
	}).addTo(mymap);

L.geoJSON(geojsonFeature).addTo(mapid);