var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

for (i = 1; i <= 5; i++){

  var xxx = '/images/pic'+i+'.jpg';
  console.log(xxx);
  var newImage = document.createElement('img');
  newImage.setAttribute('src', xxx);
  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", mainImage);
  
 
  
  }
  function mainImage(){
  
    console.log(newImage);
  }





/* Wiring up the Darken/Lighten button */
