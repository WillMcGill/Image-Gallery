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

btn.setAttribute('class', btn);
btn.textContent = 'Darken';


btn.onclick = function() {
  var shade = btn.getAttribute('class')
  if (shade === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";


  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
  }
  

