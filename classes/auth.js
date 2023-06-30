import { authLogin, authRegister } from "../services/auth.js";
import { isValidForm } from "./formControl.js";


export const register = async (formData) => {
  try {
    const input = document.querySelectorAll('.form-control');
    if (!isValidForm(formData, input)) return false;

    const data = {
      name: formData.get('name'),
      surname: formData.get('surname'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      password: formData.get('password'),
      role: 'user'
    }

    const response = await authRegister(data);
    if (typeof response === 'boolean') return response;

    return response.message
  } catch (error) {
    return new Error(error)
  }
}

export const login = async (formData) => {
  try {
    const input = document.querySelectorAll('.form-control');

    if (!isValidForm(formData, input)) return false;

    const email = formData.get('email');
    const password = formData.get('password')

    const data = { email, password }
    const response = await authLogin(data);
    if (typeof response === 'boolean') return response;

    return response.message
  } catch (error) {
    return new Error(error)
  }
}

export const logout = () => {
  sessionStorage.clear();
  window.location.href = '/login.html'
}