const url = "https://649e015d9bac4a8e669e852e.mockapi.io/users";

export const authRegister = async (data = {}) => {
  try {
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
    return new Error(error)
  }
}

export const authLogin = async (data = {}) => {
  const { email, password } = data
  const response = await fetch(url);
  const users = await response.json();

  const find = users.find((u) => u.email === email)
  if (find && find.password === password) {
    sessionStorage.setItem('name', find.name);
    sessionStorage.setItem('surname', find.surname);
    sessionStorage.setItem('email', find.email);
    sessionStorage.setItem('expiration', new Date(new Date().getTime() + (1 * 60 * 60 * 1000)))
    return true;
  }
}