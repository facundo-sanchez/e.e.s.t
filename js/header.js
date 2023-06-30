import { logout } from "../classes/auth.js"

document.querySelector('.logout').addEventListener('click', logout)

const initHeader = () => {
  sessionStorage.getItem('email')
  sessionStorage.getItem('expiration')
  sessionStorage.getItem('name')
  sessionStorage.getItem('surname')

  const date = new Date();
  if (!date < new Date(sessionStorage.getItem('expiration'))) {
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