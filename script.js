var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: 59.349796, lng: 18.070728},
	  zoom: 14,
	  mapTypeId: 'satellite' //alt: 'roadmap', 'satellite', 'hybrid'
	});
	//map.setTilt(45); //DOESN'T WORK?
	marker = new google.maps.Marker({
          map: map,
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: {lat: 59.349796, lng: 18.070728}
        });
    marker.addListener('click', toggleBounce);

    undragableMarker = new google.maps.Marker({
          map: map,
          draggable: false,
          animation: google.maps.Animation.DROP,
          position: {lat: 59.349796, lng: 18.072728}
        });
    undragableMarker.addListener('click', toggleBounce);
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
		lng = lng - 0.001;
	}
	else if (id === "right") {
		lng = lng + 0.001
	}
	else if (id === "up") {
		lat = lat + 0.001;
	}
	else if (id === "down") {
		lat = lat - 0.001;
	};
	map.setCenter({lat: lat, lng: lng}); 
}

