const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});


document.querySelector('#porfolio').addEventListener('DOMContentLoaded', loadImages());

function loadImages() {
  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', 'images.json');
  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText)
      let porfolio = document.querySelector('#porfolio')
      porfolio.innerHTML = '';

      for (let item of data) {
        porfolio.innerHTML += `
        <div class="porfolio_image">
          <img src=${item.url} alt=${item.title}>
        </div>
        `
      }
    }
  }
}