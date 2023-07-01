const url = 'https://649e015d9bac4a8e669e852e.mockapi.io/noticias'

export const getAllNotices = async () => {

  try {
    const response = await fetch(url);
    const noticias = await response.json();

    return noticias;
  } catch (error) {
    return new Error('Error en el servidor')
  }
}

export const postNotice = async (data) => {
  try {
    if (sessionStorage.getItem('role') !== 'admin') return new Error('No tienes permisos para esta accion')

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (response.status === 201) {
      return true;
    }

    return false
  } catch (error) {
    return new Error('Error en el servidor')
  }
}