function initMap() {
    var uluru = {lat: -25.344, lng: 131.036};
    var map = new google.maps.Map($('map')[0],{
        zoom: 4, 
        center: uluru
        });
    var marker = new google.maps.Marker({position: uluru, map:map});
}
