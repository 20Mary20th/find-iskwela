(
function ($) {
  Drupal.behaviors.hackaparty = {
    attach: function (context, settings) {
    	if (nokia.maps.positioning.Manager) {
    		nokia.Settings.set("app_id", "nNwCZAR3BHqvD0KXnEKW"); 
				nokia.Settings.set("app_code", "qeFI0Gs1Kyq8rXOzjPLwhw");				
				nokia.Settings.set("serviceMode", "cit");			
				nokia.Settings.set("serviceMode", "cit");

				var mapContainer = document.getElementById("mapContainer_center");		
				var map = new nokia.maps.map.Display(mapContainer, {
				// initial center and zoom level of the map
					center: [14, 120],
					zoomLevel: 9,
					components:[
				  	new nokia.maps.map.component.Behavior()					
				  ]				      
				});
			
							
    		var positioning = new nokia.maps.positioning.Manager();    		
    		map.addListener("displayready", function () {
    			positioning.getCurrentPosition(
    				function (position) {    					
    					var coords = position.coords;
    					
    					var _lat = new String(coords.latitude/1.0);
    					var _lng = new String(coords.longitude/1.0);
    					var args = _lat + '/' + _lng;
    					$.getJSON('hackaparty_proximity_schools/' + args , 
    						function (data){
    							var mapContainer = document.getElementById("mapContainer");
									
									// Create a map inside the map container DOM node
									var _map = new nokia.maps.map.Display(mapContainer, {
									  // initial center and zoom level of the map
									  center: [14, 120],
									  zoomLevel: 8,
									  components:[
				  					  new nokia.maps.map.component.Behavior()
									  ]				      
								  });

								  $.each(data, function( key, val ) {
      							var lat = val.field_geolocation.und[0].lat;
      							var lng = val.field_geolocation.und[0].lng;
					
										lat = lat/1.0;
  									lng = lng/1.0;
  				
  									var standardMarker = new nokia.maps.map.StandardMarker([lat, lng]);
	//Next we need to add it to the map's object collection so it will be rendered onto the map.
										_map.objects.add(standardMarker);

									});

    					});


    				}
    			)
    		})    		
    	}    	
    }
  }
})(jQuery);
