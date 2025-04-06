const hotelLatLong = { lat: 50.71729, lng: -1.88544 };
function myMap() {
    var mapProp = {
        center: hotelLatLong,
        zoom: 15,
    };
    console.log(document.getElementById("map"));
    var map = new google.maps.Map(document.getElementById("map"), mapProp);
    var marker = new google.maps.Marker({ position: hotelLatLong });

    marker.setMap(map);
}
