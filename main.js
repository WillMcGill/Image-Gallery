var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

for (i = 1; i <= 5; i++){

  var imgPath = '/images/pic'+i+'.jpg';
  console.log(imgPath);
  var newImage = document.createElement('img');
  newImage.setAttribute('src', imgPath);
  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", mainImage);
  
 
  function mainImage(e){
      var src = e.target.getAttribute('src');
      displayedImage.setAttribute('src', src);
    }
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
  

