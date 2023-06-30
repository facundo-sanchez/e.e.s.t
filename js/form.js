import { login, register } from "../classes/auth.js";
import { initInputs } from "../classes/formControl.js";

const formLogin = document.getElementById('form-login')
const formRegister = document.getElementById('form-register')

// const isValid = (input) => {
//   input.classList.remove('is-invalid');
//   input.classList.add('is-valid');
// }

// const notIsValid = (input) => {
//   input.classList.remove('is-valid');
//   input.classList.add('is-invalid');
// }

// const validadores = (input) => {
//   const regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
//   const regexDigitos = /^\d*$/

//   switch (input.type) {
//     case 'email': {
//       if (regexEmail.test(input.value)) {
//         if (input.name === 'repeat-email') {
//           const email = document.getElementsByName('email')[0];
//           if (email.value === input.value) {
//             isValid(input)
//           } else {
//             notIsValid(input)
//           }
//         } else {
//           isValid(input)
//         }
//       } else {
//         notIsValid(input)
//       }
//       break;
//     }
//     case 'password': {
//       if (input.value.length >= 6) {
//         if (input.name === 'repeat-password') {
//           const password = document.getElementsByName('password')[0];
//           if (password.value === input.value) {
//             isValid(input)
//           } else {
//             notIsValid(input)
//           }
//         } else {
//           isValid(input)
//         }
//       } else {
//         notIsValid(input)
//       }
//       break;
//     }
//     case 'text': {
//       if (input.value.length >= 1) {
//         isValid(input)
//       } else {
//         notIsValid(input)
//       }
//       break;
//     }
//     case 'number': {
//       if (regexDigitos.test(input.value) && input.value !== '') {
//         isValid(input)
//       } else {
//         notIsValid(input)
//       }
//       break;
//     }
//   }
// }

// const isValidForm = (data, input = [], values = []) => {
//   let result = true;
//   input.forEach((v) => {
//     if (v.classList.contains('is-invalid')) {
//       result = false;
//     }
//   })

//   if (!result) return result;

//   values.forEach((v, i) => {
//     if (data.get(v).length === 0) {
//       notIsValid(input[i]);
//       result = false;
//     }
//   })
//   return result;
// }

// const login = async (data) => {
//   const input = document.querySelectorAll('.form-control');

//   if (!isValidForm(data, input, ['email', 'password'])) return false;


//   const email = data.get('email');
//   const password = data.get('password')

//   const url = "https://649e015d9bac4a8e669e852e.mockapi.io/users";
//   const response = await fetch(url);
//   const users = await response.json();

//   const find = users.find((u) => u.email === email)
//   if (find && find.password === password) {
//     sessionStorage.setItem('name', find.name);
//     sessionStorage.setItem('surname', find.surname);
//     sessionStorage.setItem('email', find.email);
//     sessionStorage.setItem('expiration', new Date(new Date().getTime() + (1 * 60 * 60 * 1000)))
//     return true;
//   }

//   return false;
// }

if (formLogin) {
  formLogin.addEventListener('submit', async function as(e) {
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
  formRegister.addEventListener('submit', async function as(e) {
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



// const register = async (e) => {
//   e.preventDefault();
//   const url = "https://649e015d9bac4a8e669e852e.mockapi.io/users";

//   const data = {
//     name: "facundo",
//     surname: "sanchez",
//     phone: 2214093245,
//     email: "facu@gmail.com",
//     password: "123456"
//   }
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data)
//   });
//   console.log(response)
//   console.log('register')
// }



// const initInputs = () => {
//   const input = document.querySelectorAll('.form-control');
//   const placeholder = document.querySelectorAll('.placeholder-input');
//   input.forEach((input, i) => {
//     input.addEventListener('keyup', (e) => {
//       validadores(input);
//     })
//     input.addEventListener('focus', () => {
//       placeholder[i].classList.add('placeholder-active');
//     })
//     input.addEventListener('blur', () => {
//       if (input.value === '') {
//         placeholder[i].classList.remove('placeholder-active');
//       }
//     })
//   });
// }

// if (btnLogin)
//   btnLogin.addEventListener('click', login);

// if (btnRegister)
//   btnRegister.addEventListener('click', register);


initInputs();