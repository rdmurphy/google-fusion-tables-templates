//This include is required to for all code that interacts with the Google Maps API (including Google Fusion Tables)
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>

<script>

    tableid = 377240; // Texas counties

    // supply the fusion table's ID number here; found at the end of table's URL

    center = new google.maps.LatLng(31.25, -99.84); // Texas

    // creates a new LatLng object based on the coordinates provided, used to set the center of the map

    zoom = 6;

    // used to set the default zoom scale; adjust as needed to fit your map

    layer = new google.maps.FusionTablesLayer(tableid, {
        map: new google.maps.Map(document.getElementById('map_canvas'), {
            center: center,
            zoom: zoom,
            mapTypeId: 'roadmap'
        )}
    )};

    // creates a new FusionTablesLayer object that receives the tableid and instructions to where
    // to present this layer via the creation of a Map object, that's passed to a <div> with an id
    // of map_canvas
    //
    // the width/height you provide to the 'map_canvas' id via CSS determines the size of the map
            
                          
</script>
