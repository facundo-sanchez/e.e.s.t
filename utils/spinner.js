const spinner = document.querySelector('.container-spinner')
const spinnerBackground = document.querySelector('.background-spinner')
export const showSpinner = (status) => {
  if (status === false) {
    spinner.classList.add('d-none')
    spinnerBackground.classList.add('d-none')
  } else {
    spinner.classList.remove('d-none')
    spinnerBackground.classList.remove('d-none')
  }
}