// Initialize and add the map
function initMap() {
    // The location of Voodoo
    const voodoo = { lat: 43.444841, lng: -80.51547 };
    // The map, centered at Voodoo
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: voodoo,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        styles: [
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }],
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{ visibility: 'off' }],
            },
            {
                featureType: 'landscape',
                elementType: 'natural.landCover.geometry',
                stylers: [{ color: '#fcfaf6' }],
            },
            {
                featureType: 'administrative',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }],
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#bababa' }],
            },
            {
                featureType: 'transit',
                elementType: 'line',
                stylers: [{ color: '#eaebed' }],
            },
            {
                featureType: 'water',
                elementType: 'labels',
                stylers: [{ color: '#d6eff9' }],
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#d6eff9' }],
            }
        ]
    });
    // The marker, positioned at Voodoo
    const marker = new google.maps.Marker({
        position: voodoo,
        icon: './img/marker.svg',
        map: map,
    });

    let markerInfo = document.createElement('div');
    markerInfo.setAttribute('id', 'marker-info');
    markerInfo.insertAdjacentHTML(
        'afterbegin',
        `
    	<div class="info-voodoo">
    	    <h3 class="info-voodoo__title">Voodoo</h3>
    	    <p class="info-voodoo__subtitle">137 Glasgow St., Unit 115 Kitchener, ON N2G 4X8 Ukraine</p>
    	    <ul class="info-voodoo__list">
    	        <li class="info-voodoo__item">
    	            <a href="tel:1-800-480-9597" class="info-voodoo__link info-voodoo__link_phone">1-800-480-9597</a>
    	        </li>
    	        <li class="info-voodoo__item">
    	            <a href="mailto:info@voodoo.com" class="info-voodoo__link info-voodoo__link_mail">info@voodoo.com</a>
    	        </li>
    	    </ul>
    	</div>
        `
    );
    let infoWindow = new google.maps.InfoWindow({
        content: markerInfo,
    });

    infoWindow.open(map, marker);
}

window.initMap = initMap;