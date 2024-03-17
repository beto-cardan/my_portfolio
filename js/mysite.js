function toggleNavbar() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}


function changefontcolor() {
  var element = document.querySelector('.left-div');
  element.style.backgroundColor = '#333';
 

}
function changefontcolor2() {
  var element = document.querySelector('.left-div');
  element.style.backgroundColor = '#000';
  
}

