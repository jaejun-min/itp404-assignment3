let latitude
let longitude
let successHandler = function(position){
  console.log(position.coords.latitude, position.coords.longitude)

  //latitude = position.coords.latitude
  //longitude = position.coords.longitude
  let current = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
  let map = new google.maps.Map(document.getElementById('map'), {
      center: current,
      zoom: 10
    });
  let currentMarker = new google.maps.Marker({
    map: map,
    position: current,
    animation: google.maps.Animation.DROP
  });
  let geocoder = new google.maps.Geocoder();

  geocoder.geocode({
    location: current
  }, function(geocoderResults) {

    let address = geocoderResults[0].formatted_address;
    let infoWindow = new google.maps.InfoWindow({
      position: current,
      content: address
    })
    google.maps.event.addListener(currentMarker, 'click', function(){
      infoWindow.open(map)
    })
  });


}
let errorHandler = function(error){
  console.console(error);
};
navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
