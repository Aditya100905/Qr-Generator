const url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

const imgbox = document.querySelector('#imgbox');
const imgqr = document.querySelector('#Qrcode');
const qrtext = document.querySelector('#Qrtext');

function generateqr() {
  imgbox.innerHTML = '';
  imgqr.src = '';

  if (qrtext.value.trim().length === 0) {
    let span = document.createElement("span");
    span.classList.add('blink-effect');
    span.innerText = "⚠️ Please enter some text!";
    imgbox.appendChild(span);
    imgbox.classList.add('show-img');
    qrtext.classList.add('Error');

    setTimeout(() => {
      qrtext.classList.remove('Error');
    }, 1000);
  } else {
    imgqr.src = url + encodeURIComponent(qrtext.value);
    imgbox.appendChild(imgqr);
    imgbox.classList.add('show-img');
  }
}

// Enter key triggers generation
qrtext.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') generateqr();
});
