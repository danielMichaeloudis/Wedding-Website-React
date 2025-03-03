import Header from "./Header";

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
function MapPage() {
    return (
        <>
            <script
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTbysFYwdfconiq-tuogbGAUZfjfev-0A&callback=myMap&libraries=marker&loading=async"
                defer
            ></script>
            <Header />
            <div id="map" style="width: 100%; height: 800px"></div>
        </>
    );
}
