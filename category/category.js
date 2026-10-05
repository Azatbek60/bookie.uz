const menyuSarlavhasi = document.querySelector('.menyu-sarlavhasi');
const ochiluvchiMenyu = document.querySelector('.ochiluvchi-menyu');
const janrlarRoyxati = document.querySelector('.janrlar-royxati');

menyuSarlavhasi.addEventListener('click', () => {
    ochiluvchiMenyu.classList.toggle('faol');

    if (ochiluvchiMenyu.classList.contains('faol')) {
        janrlarRoyxati.style.maxHeight = janrlarRoyxati.scrollHeight + "px";
    } else {
        janrlarRoyxati.style.maxHeight = null;
    }
});