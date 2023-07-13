import { login, register } from "../classes/auth.js";
import { initInputs, isValidForm, resetInputs } from "../classes/formControl.js";
import { addNotices } from "../classes/notice.js";
import { showSpinner } from "../utils/spinner.js";

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
    showSpinner(true)
    const data = new FormData(formLogin);
    const result = await login(data)

    if (typeof result === 'boolean' && result) {
      window.location.href = "/noticias.html";
    } else {
      const error = document.querySelector('.error-login')
      error.setAttribute('style', 'text-align: center; display:block');
    }
    showSpinner(false)
  })
}

if (formRegister) {
  formRegister.addEventListener('submit', async function (e) {
    e.preventDefault();
    showSpinner(true)
    const data = new FormData(formRegister);
    const result = await register(data)

    if (typeof result === 'boolean' && result) {
      window.location.href = "/login.html";
    } else {
      const error = document.querySelector('.error-register')
      if (typeof result === 'string') error.innerHTML = result;
      error.setAttribute('style', 'text-align: center; display:block');
    }
    showSpinner(false)
  })
}

if (formContact) {
  formContact.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formContact);
    const input = document.querySelectorAll('.form-control');
    if (!isValidForm(formData, input)) return false;

    showSpinner(true)
    setTimeout(() => {
      resetInputs();
      document.querySelector('.text-sucess-contact').classList.remove('d-none')
      showSpinner(false)
    },1500)

  })
}

if (formNotice) {
  formNotice.addEventListener('submit', async function (e) {
    showSpinner(true)
    e.preventDefault();
    const data = new FormData(formNotice);
    const result = await addNotices(data);

    if (typeof result === 'boolean' && result) {
      resetInputs();
      window.location.href = "/noticias.html";
    } else {
      const error = document.querySelector('.error-noticia')
      if (typeof result === 'string') error.innerHTML = result;
      error.setAttribute('style', 'text-align: center; display:block');
    }
    showSpinner(false)
  })
}


initInputs();