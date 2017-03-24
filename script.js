var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: 59.349796, lng: 18.072728},
	  disableDefaultUI: true,
	  zoom: 14,
	  mapTypeId: 'satellite' //alt: 'roadmap', 'satellite', 'hybrid'
	});
	map.setTilt(0); //DOESN'T WORK?
	
	marker = new google.maps.Marker({
          map: map,
          draggable: true,
          animation: google.maps.Animation.BOUNCE,
          position: {lat: 59.349796, lng: 18.070728}
        });
	
    undragableMarker = new google.maps.Marker({
          map: map,
          draggable: false,
          animation: google.maps.Animation.DROP,
          position: {lat: 59.349796, lng: 18.072728}
        });
}

function zoom(id) {
	if (id === "zoomIn") {
		map.setZoom(map.getZoom()+1);
	}
	else{
		map.setZoom(map.getZoom()-1);
	};
}

function panning(id) {
	var lat = map.getCenter().lat();
	var lng = map.getCenter().lng();
	if (id === "left") {
		lng -= 10 / Math.pow(2,map.getZoom());
	}
	else if (id === "right") {
		lng += 10 / Math.pow(2,map.getZoom());
	}
	else if (id === "up") {
		lat += 10 / Math.pow(2,map.getZoom());
	}
	else if (id === "down") {
		lat -= 10 / Math.pow(2,map.getZoom());
	}
	else if (id === "P") {
		lat = 16.798354;
		lng = 96.149705;
	}
	else if (id === "J") {
		lat = 59.325695;
		lng = 18.071869;
	}
	else if (id === "centre") {
		if (navigator.geolocation) {
     			navigator.geolocation.getCurrentPosition(function (position) {
         			//initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
				lat = position.coords.latitude;
				lng = position.coords.longitude;
     			});
 		}
		//lat = 59.349796;
		//lng = 18.072728;
		map.setZoom(14);
	};
	map.setCenter({lat: lat, lng: lng}); 
}
var tiltBool = true;
function tilt() {
	if (tiltBool) {
		map.setTilt(45);
		tiltBool = false;
	}
	else {
		map.setTilt(0);
		tiltBool = true;
	}
	
}

