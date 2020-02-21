var markers = [
];

var counter=0;
var map;
var list=[];
//var markers=[["test", 40.294019, -74.682432, 0]];
//var markers=[["Name0",40.344425,-74.651073,0],["Test", 40.294019, -74.682432, 0]];
var markers=[];
window.onload=function(){


var customMapType = new google.maps.StyledMapType(
              [{"featureType":"all","elementType":"all","stylers":[{"visibility":"on"},{"saturation":"0"},{"lightness":"0"},{"hue":"#ffa700"},{"weight":"1"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#ff0000"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#bababa"},{"saturation":"0"},{"lightness":"0"},{"gamma":"1.00"},{"visibility":"on"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#bababa"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#bababa"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"color":"#ff0000"},{"visibility":"simplified"}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative","elementType":"labels.icon","stylers":[{"color":"#bababa"},{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"on"},{"hue":"#e400ff"},{"weight":"1.31"}]},{"featureType":"landscape","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#bababa"}]},{"featureType":"landscape","elementType":"labels.text","stylers":[{"visibility":"off"},{"color":"#bababa"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#ff0000"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#ffffff"}]}]
            );

 var customMapTypeId = 'custom_style';

map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 12,
    panControl:true,
    zoomControl:true,
    mapTypeControl:false,
    scaleControl:false,
    streetViewControl:false,
    overviewMapControl:false,
    rotateControl:false,
    signed_in:false,
    infobox_background_color: 'rgba(103, 183, 225, 0.8)',
    infobox_styling: 'custom',
    infobox_text_color: '#fff',
    overlay_color: '#67b7e1',
    overlay_color_hsl: {"hue":142,"sat":67,"lum":64},
    map_style: 'custom',
    map_type: 'terrain',
    center: new google.maps.LatLng(40.344425, -74.651073),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
});

            map.mapTypes.set(customMapTypeId, customMapType);
            map.setMapTypeId(customMapTypeId);
    //center: new google.maps.LatLng(18, 0),
/*mapTypeId: google.maps.MapTypeId.ROADMAP,*/


  /*for (var i = 0; i < markers.length; i++) {
    var point = markers[i];
    
    setMarkers(map, point);
  }*/

}//]]>  

function setMarkers(map, point) {
    //console.log(point);
    //console.log(JSON.stringify(point));
    var image = {
    url: 'images/greendot.png',
    //url: 'images/reddot.jpg',
 
    size: new google.maps.Size(20, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32)
  };

  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };
  
  var infowindow = new google.maps.InfoWindow({
    content: '<div>'+point[0]+' <input type="button" id="'+point[0]+'_button" value="remove"/></div>'
  }); 

  var marker = new google.maps.Marker({
    position: {lat: point[1], lng: point[2]},
    map: map,
    icon: image,
    shape: shape,
    title: point[0],
    zIndex: point[3]
  });
  marker.id=point[0];
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  markers.push(marker);
}

