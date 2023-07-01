export const generateNotice = (data = []) => {
  let str = ''
  data.forEach((e) => {
    str += `
    <div class="card-noticia">
      <div class="card-header">
        <div class="card-img">
          <img src="assets/img/noticia-prueba.png" alt="imagen-noticia" />
        </div>
        <div class="card-title"><h2>${e.titulo}</h2></div>
      </div>
      <div class="card-footer">
        <p>
        ${e.descripcion}
        </p>
      </div>
    </div>
`
  })
  return str;
}