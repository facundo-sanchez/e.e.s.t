import { getNotices } from "../classes/notice.js";
import { generateNotice } from "../utils/notice.js";
import { showSpinner } from "../utils/spinner.js";



window.addEventListener('DOMContentLoaded', async () => {
  const container = document.querySelector('.noticias-container');
  showSpinner(true);
  const data = await getNotices() || [];
  if (data.length > 0) {
    const str = generateNotice(data)
    container.innerHTML = str
  } else {
    // mensaje de vacio
  }
  showSpinner(false);
})