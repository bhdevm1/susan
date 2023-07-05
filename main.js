//  função navbar responsivo
function toggleMenu() {
  var navbar = document.getElementById("myNavbar");
  if (navbar.className.indexOf("responsive") === -1) {
    navbar.className += " responsive"; 
    var item = document.getElementById("close-icon");
  item.innerHTML = "&#10006"; // Altere aqui o novo texto que deseja exibir
  } else {
    navbar.className = navbar.className.replace(" responsive", "");
    var item = document.getElementById("close-icon");
    item.innerHTML = "&#9776;"; // Altere aqui o novo texto que deseja exibir
  }
}
//   função para navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.navbar').classList.remove('hidden');
  } else {
    document.querySelector('.navbar').classList.add('hidden');
  }
  prevScrollpos = currentScrollPos;
}