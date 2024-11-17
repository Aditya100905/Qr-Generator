const url = ' https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='

const imgbox = document.querySelector('#imgbox')
const imgqr = document.querySelector('#Qrcode')
const qrtext = document.querySelector('#Qrtext')

function generateqr() {
    imgbox.innerHTML = ''; 
    imgqr.src = '';

    if (qrtext.value.trim().length === 0) {
        let span = document.createElement("span");
        span.classList.add('blink-effect')
        imgbox.classList.add('show-img');
        span.innerHTML = "Please Enter The Text First !!";
        span.style.color = "white"; // Style the span if needed
        imgbox.appendChild(span);
        qrtext.classList.add('Error')
        setTimeout(()=>{
            qrtext.classList.remove('Error')
        }, 1000)
    } else {
        // imgqr.src = url + qrtext.value;
        // imgbox.classList.add('show-img');
        imgbox.appendChild(imgqr);
        imgqr.src = url + qrtext.value
        imgbox.classList.add('show-img');

    }
}
 qrtext.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter') generateqr()
 })

 document.querySelector("#container").addEventListener('keypress', (e)=>{
    if(e.key === 'Enter') generateqr()
 })