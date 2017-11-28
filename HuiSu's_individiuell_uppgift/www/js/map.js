$(document).ready(function () {
    function initMap() {  
              var location = new google.maps.LatLng(57.44080097803746, 13.597496271133423);
              var mapCanvas = document.getElementById('map');
              var mapOptions = {
                  center: location,
                  zoom: 16,
                  panControl: false,
                  mapTypeId: google.maps.MapTypeId.ROADMAP
              }
              var map = new google.maps.Map(mapCanvas, mapOptions);
              var marker = new google.maps.Marker({position:location});
              marker.setMap(map);
          }
          google.maps.event.addDomListener(window, 'load', initMap);
  });