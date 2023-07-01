import { getAllNotices, postNotice } from "../services/notice.js";
import { isValidForm } from "./formControl.js";


export const getNotices = async () => {
  try {
    const noticias = await getAllNotices();
    if (noticias) {
      return noticias;
    }
    return []
  } catch (error) {
    return new Error('Error en el servidor')
  }
}

export const addNotices = async (formData) => {
  try {
    const input = document.querySelectorAll('.form-control');
    if (!isValidForm(formData, input)) return false;

    const data = {
      titulo: formData.get('titulo'),
      categoria: formData.get('categoria'),
      tecnicatura: formData.get('tecnicatura'),
      descripcion: formData.get('descripcion'),
      img: formData.get('imagen').name
    }

    const response = await postNotice(data);

    if (typeof response === 'boolean') return response;

    return response.message
  } catch (error) {
    return new Error('Error en el servidor')
  }
}