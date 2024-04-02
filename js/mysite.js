
function changefontcolor() {
  var element = document.querySelector('.left-div');
  element.style.backgroundColor = '#333';


}
function changefontcolor2() {
  var element = document.querySelector('.left-div');
  element.style.backgroundColor = '#000';

}


document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const body = document.body;

  darkModeToggle.addEventListener('click', function() {
      
      body.classList.toggle('dark-mode');
      const isDarkMode = body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDarkMode);
  });

  const storedDarkMode = localStorage.getItem('darkMode');
  if (storedDarkMode === 'true') {
      body.classList.add('dark-mode');
  }
});
