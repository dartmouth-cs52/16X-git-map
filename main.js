
/* SETUP */
const map = L.map('map',{
    tms: false
}).setView([42.755942, -72.8092041],3);

const PersonIcon = L.Icon.extend({
    options: {
        iconSize: [
            60, 60
        ],
        className: 'circular',
        popupAnchor:  [0, -30],
    }
});

// load up the background tile layer
const Stamen_Watercolor = L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {}).addTo(map);

// all the facemarkers will go into one layer
const facemarkers = L.layerGroup();

// function to add markers
const addMarker = function(options) {
  var icon = new PersonIcon({iconUrl: options.iconUrl});
  var marker = L.marker(options.lat_long, {icon: icon, url: options.url, name: options.name})
  facemarkers.addLayer(marker.addTo(map).bindPopup(options.message));
}



/* END SETUP */


/*****************************/
//
// copy the following lines and change then as needed
// look up the lat/long and change that as well.
addMarker({
  name: 'Froggy',
  iconUrl: 'images/froggy.jpg',
  url: 'people/froggy.html',
  message: 'Come visit me in Costa Rica!',
  lat_long: [9.6660971,-85.0621176],
});
addMarker({
  name: 'Robert',
  iconUrl: 'images/robert.jpg',
  url: 'people/robert.html',
  message: 'Hi I\'m Robert!',
  lat_long: [33.893791,35.501777],
});
/****************************/


/* TODO: Add yourself to the map here! */
// START SECTION FOR MARKERS

addMarker({
  name: 'Suman',
  iconUrl: 'images/suman.jpg',
  url: 'people/sumanbera.html',
  message: 'Come visit me in Kolkata,India!',
  lat_long: [22.572646,88.363895],
});

addMarker({
  name: 'Xing',
  iconUrl: 'images/Xing.jpg',
  url: 'people/mx.html',
  message: 'Summer term is coming!',
  lat_long: [43.701958,-72.288905],
});

addMarker({
  name: 'Yvonne',
  iconUrl: 'images/yvonne.jpg',
  url: 'people/Yvonne.html',
  message: 'Come visit me in Beijing!',
  lat_long: [39.904211,116.407395],
});

addMarker({
  name: 'Brophy',
  iconUrl: 'images/brophy.jpg',
  url: 'people/brophy.html',
  message: 'I have a new puppy named Buck!',
  lat_long: [40.712784, -74.005941],
});

addMarker({
  name: 'Tim',
  iconUrl: 'images/tim_round.jpg',
  url: 'people/tim.html',
  message: 'I went hiking here!',
  lat_long: [37.2320967,-118.8578716],
});


addMarker({
  name: 'Varun',
  iconUrl: 'images/varun.jpg',
  url: 'people/varun.html',
  message: 'Come visit me in Delhi',
  lat_long: [28.6139,77.2090],
});

addMarker({
  name: 'Virginia',
  iconUrl: 'images/virginia.jpg',
  url: 'people/virginia.html',
  message: 'Amsterdam is a beautiful place!',
  lat_long: [52.3702,4.8952],
});

addMarker({
  name: 'Alex Beals',
  iconUrl: 'images/alex.jpg',
  url: 'people/alex.html',
  message: 'This is where I spend my summers!',
  lat_long: [45.373615,-121.695951],
});

addMarker({
  name: 'Josh Kerber',
  iconUrl: 'images/bsp.jpg',
  url: 'people/joshkerber.html',
  message: 'Free Brady.',
  lat_long: [42.364506,-71.038887],
});
addMarker({
  name: 'Henry Wilson',
  iconUrl: 'images/henrywilson.jpg',
  url: 'people/henrywilson.html',
  message: 'Find your beach',
  lat_long: [41.4901,-71.312845],
});

addMarker({
  name: 'Manmeet Gujral',
  iconUrl: 'images/manmeet.jpg',
  url: 'people/manmeet.html',
  message: 'This is home!',
  lat_long: [42.704801,-73.754842],
});

addMarker({
  name: 'Emma',
  iconUrl: 'images/emma.jpg',
  url: 'people/emma.html',
  message: 'I was born in Miami',
  lat_long: [25.76,-80.19],
});

addMarker({
  name: 'Jean',
  iconUrl: 'images/jeanzhou.jpg',
  url: 'people/jeanzhou.html',
  message: 'I\'m from Medfield, MA',
  lat_long: [42.1876, -71.3065],
})

addMarker({
  name: 'Rajiv',
  iconUrl: 'images/segfault.jpg',
  url: 'people/rajivramaiah.html',
  message: 'Hello it is me, Rajiv!',
  lat_long: [18.7669, 46.8691],
})

//END SECTION FOR MARKERS

/* DO NOT MODIFY BELOW THIS LINE */

// this sets up popups and clicks on all the markers
facemarkers.eachLayer(function(marker) {
  marker.on('mouseover', function (e) {
    e.target.openPopup();
  });
  marker.on('mouseout', function (e) {
    e.target.closePopup();
  });
  marker.on('click', function (e) {
      eModal.iframe({url: e.target.options.url, title: e.target.options.name, size: 'lg'});
  });
});


// setup the info control layer
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this._div.innerHTML = '<a href="/"><h4>Dartmouth CS52 16X</h4></a><p><a href="https://github.com/dartmouth-cs52/16X-git-map">code on github</p></a>';
    return this._div;
};


info.addTo(map);
