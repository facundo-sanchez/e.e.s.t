const isValid = (input) => {
  input.classList.remove('is-invalid');
  input.classList.add('is-valid');
}

const notIsValid = (input) => {
  input.classList.remove('is-valid');
  input.classList.add('is-invalid');
}

const getValue = (input, e) => {
  switch (input.name) {
    case 'titulo': {
      document.querySelector('.card-title').innerHTML = `<h2>${input.value}</h2>`
      break;
    }
    case 'categoria': {
      // document.querySelector('.card-categoria').innerHTML = `<p>${input.value}</p>`
      break;
    }
    case 'tecnicatura': {
      // document.querySelector('.card-footer').innerHTML = `<p>${input.value}</p>`
      break;
    }
    case 'imagen': {
      let previewImage = document.querySelector('.img-preview');
      const file = e.target.files[0];

      let reader = new FileReader();
      reader.onload = function (e) {
        const imageDataURL = e.target.result;
        previewImage.src = imageDataURL;
      };
      reader.readAsDataURL(file);

      break;
    }
    case 'descripcion': {
      document.querySelector('.card-footer').innerHTML = `<p>${input.value}</p>`
      break;
    }
    default:
      break;
  }
}
export const validadores = (input) => {
  const regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  const regexDigitos = /^\d*$/

  switch (input.type) {
    case 'email': {
      if (regexEmail.test(input.value)) {
        if (input.name === 'repeat-email') {
          const email = document.getElementsByName('email')[0];
          if (email.value === input.value) {
            isValid(input)
          } else {
            notIsValid(input)
            document.querySelector(`.error-${input.name}`).innerHTML = `El ${input.dataset.name} no coincide.`
          }
        } else {
          isValid(input)
        }
      } else {
        notIsValid(input)
        document.querySelector(`.error-${input.name}`).innerHTML = `${input.dataset.name} es invalido.`
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
            document.querySelector(`.error-${input.name}`).innerHTML = `La ${input.dataset.name} no coincide.`
          }
        } else {
          isValid(input)
        }
      } else {
        notIsValid(input)
        document.querySelector(`.error-${input.name}`).innerHTML = `${input.dataset.name} es invalido.`
      }
      break;
    }
    case 'text': {
      if (input.value.length >= 1) {
        isValid(input)
      } else {
        notIsValid(input)
        document.querySelector(`.error-${input.name}`).innerHTML = `${input.dataset.name} es invalido.`
      }
      break;
    }
    case 'number': {
      if (regexDigitos.test(input.value) && input.value !== '') {
        isValid(input)
      } else {
        notIsValid(input)
        document.querySelector(`.error-${input.name}`).innerHTML = `${input.dataset.name} es invalido.`
      }
      break;
    }
    case 'textarea': {
      if (input.value.length >= 1) {
        isValid(input)
      } else {
        notIsValid(input)
        document.querySelector(`.error-${input.name}`).innerHTML = `${input.dataset.name} es invalido.`
      }
      break;
    }
  }
}
export const isValidForm = (data, input = []) => {
  let result = true;
  input.forEach((v) => {
    if (v.classList.contains('is-invalid')) {
      result = false;
      document.querySelector(`.error-${v.name}`).innerHTML = `${v.dataset.name} es invalido.`
    }
    if (data.get(v.name).length === 0) {
      notIsValid(v);
      result = false;
      if (v.name.includes('repeat')) {
        document.querySelector(`.error-${v.name}`).innerHTML = `Repetir ${v.dataset.name} es obligatorio.`
      } else {
        document.querySelector(`.error-${v.name}`).innerHTML = `${v.dataset.name} es obligatorio.`
      }
    }
  })

  return result;
}


export const resetInputs = () => {
  document.querySelectorAll('.placeholder-input').forEach((e) => e.classList.remove('placeholder-active'))
  document.querySelectorAll('.notice-input').forEach((e) => {
    e.classList.remove('is-valid')
    e.classList.remove('is-invalid')
    e.value = ''
  })
  document.querySelectorAll('.form-control').forEach((e) => {
    e.classList.remove('is-valid')
    e.classList.remove('is-invalid')
    e.classList.remove('placeholder-active')
    e.value = ''
  })
}

export const initInputs = () => {
  const input = document.querySelectorAll('.form-control');
  const placeholder = document.querySelectorAll('.placeholder-input');
  const inputsNotice = document.querySelectorAll('.notice-input');


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

  inputsNotice.forEach((input, i) => {
    if (input.type === 'file') {
      input.addEventListener('change', (e) => {
        getValue(input, e)
      })
    } else {
      input.addEventListener('keyup', (e) => { getValue(input, e) })
    }
  })
}