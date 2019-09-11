var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

for (i = 1; i <= 5; i++){

  console.log(i);
  var xxx = '/images/pic'+i+'.jpg';
  console.log(xxx);
  

  

}

  var newImage = document.createElement('img');
  newImage.setAttribute('src', xxx);
  thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
