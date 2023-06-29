



const validadores = (input) => {
  const regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  const regexDigitos = /^\d*$/

  const isValid = (input) => {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
  }
  const notIsValid = () => {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
  }

  switch (input.type) {
    case 'email': {
      if (regexEmail.test(input.value)) {
        if (input.name === 'repeat-email') {
          const email = document.getElementsByName('email')[0];
          if (email.value === input.value) {
            isValid(input)
          } else {
            notIsValid(input)
          }
        } else {
          isValid(input)
        }
      } else {
        notIsValid(input)
      }
      break;
    }
    case 'password': {
      if (input.value.length >= 6) {
        if (input.name === 'repeat-password') {
          const password = document.getElementsByName('password')[0];
          if (password.value === input.value) {
            isValid(input)
          } else {
            notIsValid(input)
          }
        } else {
          isValid(input)
        }
      } else {
        notIsValid(input)
      }
      break;
    }
    case 'text': {
      if (input.value.length >= 1) {
        isValid(input)
      } else {
        notIsValid(input)
      }
      break;
    }
    case 'number': {
      if (regexDigitos.test(input.value) && input.value !== '') {
        isValid(input)
      } else {
        notIsValid(input)
      }
      break;
    }
  }
}

const initInputs = () => {
  const input = document.querySelectorAll('.form-control');
  const placeholder = document.querySelectorAll('.placeholder-input');

  input.forEach((input, i) => {
    input.addEventListener('keyup', (e) => {
      validadores(input);
    })

    input.addEventListener('focus', () => {
      placeholder[i].classList.add('placeholder-active');
    })
    input.addEventListener('blur', () => {
      if (input.value === '') {
        placeholder[i].classList.remove('placeholder-active');
      }
    })
  });
}

initInputs();