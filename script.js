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
    templeMarker = new google.maps.Marker({
    	map: map,
    	draggable: false,
    	animation: google.maps.Animation.DROP,
    	position: {lat: 16.79955056, lng: 96.149766},
    	icon: 'buddha.png'
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
		map.setCenter({lat: lat, lng: lng});
	}
	else if (id === "right") {
		lng += 10 / Math.pow(2,map.getZoom());
		map.setCenter({lat: lat, lng: lng});
	}
	else if (id === "up") {
		lat += 10 / Math.pow(2,map.getZoom());
		map.setCenter({lat: lat, lng: lng});
	}
	else if (id === "down") {
		lat -= 10 / Math.pow(2,map.getZoom());
		map.setCenter({lat: lat, lng: lng});
	}
	else if (id === "P") {
		lat = 16.798354;
		lng = 96.149705;
		map.setCenter({lat: lat, lng: lng});
	}
	else if (id === "J") {
		lat = 59.325695;
		lng = 18.071869;
		map.setCenter({lat: lat, lng: lng});
	}
	else if (id === "centre") {
		if (navigator.geolocation) {
			map.setZoom(17);
     			navigator.geolocation.getCurrentPosition(function (position) {
         			gpsLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
				map.setCenter(gpsLocation);
				
     			});
 		}
		else{
			lat = 59.325695;
			lng = 18.071869;
			map.setZoom(14);
		}
		//lat = 59.349796;
		//lng = 18.072728;
		
	};
	//map.setCenter({lat: lat, lng: lng}); 
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

