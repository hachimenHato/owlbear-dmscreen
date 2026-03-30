import { downloadFile } from '../utils.js';

const EMAIL = "johnteckert@gmail.com";

export const notePad = () => {
  const notePad = document.createElement('article');
  notePad.classList.add('card', 'notepad');
  notePad.innerHTML = `
    <h2>笔记</h2>
    <textarea id="notes" rows="10" cols="30" placeholder="在这里写下你的笔记..."></textarea>
    <div class="button-container">
      <button id="clear-button">清空</button>
      <button id="download-button">下载</button>
    </div>
  `;

  const downloadButton = notePad.querySelector('#download-button');
  const clearButton = notePad.querySelector('#clear-button');

  downloadButton.addEventListener('click', () => {
    const fileData = [
      new Date().toLocaleDateString(),
      ' ',
      new Date().toLocaleTimeString(),
      '\n\n',
      notePad.querySelector('textarea').value
    ];
    const file = new File(fileData, '笔记.txt', {
      type: 'text/plain',
    });
    downloadFile(file);
  });

  clearButton.addEventListener('click', () => {
    const notes = notePad.querySelector('textarea');
    notes.value = '';
    notes.focus();
  });

  return notePad;
}