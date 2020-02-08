let prevYPos = window.scrollY;
window.onscroll = function() {
  let currYPos = window.scrollY;
  //inital scrollY at start is 0.
  //if(prevYPos is greater, it means scroll is upwards)
  //else downwards
  if (prevYPos > currYPos) {
    document.getElementById('top-navbar').style.top = "0";    
  } else {
          document.getElementById('top-navbar').style.top = "-500px" ;
  }
  prevYPos = currYPos;
}
const toggleButton = document.querySelector('.toggle-button');
const navBarLinks = document.querySelector('.nav-bar-links');
toggleButton.addEventListener('click', () => {
  navBarLinks.classList.toggle('active')
})