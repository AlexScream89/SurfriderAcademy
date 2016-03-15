function initialize() {
    var latlng = new google.maps.LatLng(33.9959248, -118.4688781);
    var settings = {
        zoom: 13,
        center: latlng,
        mapTypeControl: true,
        mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
        navigationControl: true,
        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
        mapTypeId: google.maps.MapTypeId.HYBRID};
    var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Høgenhaug</h1>'+
        '<div id="bodyContent">'+
        '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'+
        '</div>'+
        '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var companyImage = new google.maps.MarkerImage('img/parking.png',
        new google.maps.Size(100,50),
        new google.maps.Point(0,0),
        new google.maps.Point(50,50)
    );

    var companyPos = new google.maps.LatLng(33.9959248, -118.4688781);

    var companyMarker = new google.maps.Marker({
        position: companyPos,
        map: map,
        icon: companyImage,
        title:"Surfrider Academy",
        zIndex: 3});

    google.maps.event.addListener(companyMarker, 'click', function() {
        infowindow.open(map,companyMarker);
    });
}