(
function ($) {
  Drupal.behaviors.hackaparty = {
    attach: function (context, settings) {
      	nokia.Settings.set("app_id", "nNwCZAR3BHqvD0KXnEKW"); 
	nokia.Settings.set("app_code", "qeFI0Gs1Kyq8rXOzjPLwhw");
	// Use staging environment (remove the line for production environment)
	nokia.Settings.set("serviceMode", "cit");

			// Get the DOM node to which we will append the map
	var mapContainer = document.getElementById("mapContainer");
			
			// Use staging environment (remove the line for production environment)
	nokia.Settings.set("serviceMode", "cit");

			// Get the DOM node to which we will append the map
	var mapContainer = document.getElementById("mapContainer");
			// Create a map inside the map container DOM node
	var map = new nokia.maps.map.Display(mapContainer, {
			// initial center and zoom level of the map
				center: [14, 120],
				zoomLevel: 8,
				components:[
				  new nokia.maps.map.component.Behavior()
				]				      
			});


      /* We create a UI notecontainer for example description
       * NoteContainer is a UI helper function and not part of the Maps API for JavaScript
       * See exampleHelpers.js for implementation details 
       */
       /*
      var noteContainer = new NoteContainer({
	      id: "basicMapWithComponentsUi",
	      parent: document.getElementById("uiContainer"),
	      title: "Basic map example with components",
	      content:
		      '<p>This example shows how to create a basic pannable map with a  ' +
		      'map type selector, scalebar, public transport button, ' +
		      'mini map, positioning and a zoombar.</p>'
      });
       */   
    
      $.getJSON('hackaparty_schools', function(data) {
	
      	$.each(data, function( key, val ) {
      		var lat = val.field_geolocation.und[0].lat;
      		var lng = val.field_geolocation.und[0].lng;
					
					

					lat = lat/1.0;
  				lng = lng/1.0;
  				
  				var standardMarker = new nokia.maps.map.StandardMarker([lat, lng]);
					// Next we need to add it to the map's object collection so it will be rendered onto the map.
					map.objects.add(standardMarker);

				});
      });


    }
  };

})(jQuery);
