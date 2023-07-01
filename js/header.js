import { logout } from "../classes/auth.js"
import { menuAdmin } from "../utils/menuAdmin.js";

document.querySelector('.logout').addEventListener('click', logout)
const menu = document.querySelector('.menu-admin');

const menuMobile = document.querySelector('.menu-mobile');
const optiosMenuMobile = document.querySelectorAll('.option');

if (optiosMenuMobile) {
  optiosMenuMobile.forEach((e) => {
    e.addEventListener('click', () => {
      document.querySelector('.container-menu').classList.toggle('slide-menu')
      document.querySelector('.menu-mobile-icon').src = './assets/svg/list.svg'
      document.querySelector('.backgroun-menu').classList.add('d-none');
    })
  })
}

menuMobile.addEventListener('click', () => {
  document.querySelector('.container-menu').classList.toggle('slide-menu')

  if (!document.querySelector('.container-menu').classList.contains('slide-menu')) {
    document.querySelector('.menu-mobile-icon').src = './assets/svg/menu-x.svg'
    document.querySelector('.backgroun-menu').classList.remove('d-none');
  } else {
    document.querySelector('.menu-mobile-icon').src = './assets/svg/list.svg'
    document.querySelector('.backgroun-menu').classList.add('d-none');
  }
})

if (window.location.href.includes('addNoticia.html') && sessionStorage.getItem('role') !== 'admin') {
  window.location.href = '/noticias.html'
}

const initHeader = () => {
  sessionStorage.getItem('email')
  sessionStorage.getItem('expiration')
  sessionStorage.getItem('name')
  sessionStorage.getItem('surname')

  const date = new Date();
  if (!date < new Date(sessionStorage.getItem('expiration'))) {
    if (sessionStorage.getItem('role') === 'admin') {
      if (menu)
        menu.innerHTML = menuAdmin
    }
    const btn = document.querySelector(".bnt-menu");
    const icon = document.getElementById('svg-icon');
    const opciones = document.querySelector(".container-opciones");
    if (btn) {
      btn.addEventListener("click", function () {
        opciones.classList.toggle("visible");
        if (opciones.classList.contains('visible')) {
          icon.src = './assets/svg/x.svg'
        } else {
          icon.src = './assets/svg/plus.svg'
        }
      });
    }

    if (window.location.href.includes('login.html') || window.location.href.includes('register.html')) {
      window.location.href = '/noticias.html'
    }
    document.querySelector('.login').classList.add('d-none');
    document.querySelector('.logout').classList.remove('d-none');
  } else {
    document.querySelector('.logout').classList.add('d-none');
    document.querySelector('.login').classList.remove('d-none');
    sessionStorage.clear();
  }

}

initHeader();