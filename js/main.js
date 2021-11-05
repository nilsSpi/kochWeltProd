//"use strict";
let recepieLinks = ['./nils.html', './florian.html', './wolfram.html'];
let firstclick = true;


function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

function generateRecepieLink() {
  let currentLocation=window.location.pathname;
  let randomNumber = Math.round(Math.random() * 3);
  while (randomNumber > 2 || currentLocation == recepieLinks[randomNumber].slice(1)) {
    randomNumber = Math.round(Math.random() * 3);
  }
  
  window.location.replace(recepieLinks[randomNumber]);

}

function interactDD() {
  let dropDownMenu = document.getElementById("dropDown-menu");
  if (firstclick) {
    dropDownMenu.classList.add("opa-one");
    dropDownMenu.classList.remove("opa-zero");
    firstclick = false;
  }
  else {
    dropDownMenu.classList.remove("opa-one");
    dropDownMenu.classList.add("opa-zero");
    firstclick = true;
  }

}

