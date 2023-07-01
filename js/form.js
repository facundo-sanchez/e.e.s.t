import { login, register } from "../classes/auth.js";
import { initInputs, resetInputs } from "../classes/formControl.js";
import { addNotices } from "../classes/notice.js";

const formLogin = document.getElementById('form-login')
const formRegister = document.getElementById('form-register')
const formContact = document.getElementById('form-contact')
const formNotice = document.getElementById('form-notice');

const btnRestablecer = document.querySelector('.btn-restablecer');

if (btnRestablecer) {
  btnRestablecer.addEventListener('click', () => {
    resetInputs()
  })
}

if (formLogin) {
  formLogin.addEventListener('submit', async function (e) {
    e.preventDefault();
    const data = new FormData(formLogin);
    const result = await login(data)

    if (result) {
      window.location.href = "/noticias.html";
    } else {
      const error = document.querySelector('.error-login')
      error.setAttribute('style', 'text-align: center; display:block');
    }
  })
}

if (formRegister) {
  formRegister.addEventListener('submit', async function (e) {
    e.preventDefault();
    const data = new FormData(formRegister);
    const result = await register(data)

    if (result === true) {
      window.location.href = "/login.html";
    } else {
      const error = document.querySelector('.error-register')
      if (typeof result === 'string') error.innerHTML = result;
      error.setAttribute('style', 'text-align: center; display:block');
    }
  })
}

if (formContact) {

}

if (formNotice) {
  formNotice.addEventListener('submit', async function (e) {
    e.preventDefault();
    const data = new FormData(formNotice);
    const result = await addNotices(data);

    if (result === true) {
      resetInputs();
      window.location.href = "/noticias.html";
    } else {
      const error = document.querySelector('.error-noticia')
      if (typeof result === 'string') error.innerHTML = result;
      error.setAttribute('style', 'text-align: center; display:block');
    }
  })
}


initInputs();