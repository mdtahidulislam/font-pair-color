const font = [
    {
        hfont: 'Roboto Condensed',
        tfont: 'lato'
    },
    {
        hfont: 'Times New Roman',
        tfont: 'lato'
    },
    {
        hfont: 'lato',
        tfont: 'Roboto Condensed'
    }
]

// get action btn
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

const slideNumber = document.querySelector('.slide-number');
const hFont = document.querySelector('.h-font');
const tFont = document.querySelector('.t-font');

const hFontName = document.querySelector('.heading-font');
const tFontName = document.querySelector('.text-font');

// init counter
let i = 0;

// next btn event
nextBtn.addEventListener('click', () => {
    if (i >= font.length - 1) {
        i = -1;
    }
    i++;
    addFont();
})

prevBtn.addEventListener('click', () => {
    console.log(i);
    if (i <= 0) {
        i = font.length;
    }
    i--;
    console.log(i);
    addFont();
})

const addFont = () => {
    slideNumber.innerText = i + 1;
    const hfont = font[i].hfont;
    const tfont = font[i].tfont;

    hFont.style.fontFamily = `'${hfont}',sans-serif`;
    tFont.style.fontFamily = `'${tfont}',sans-serif`;

    hFontName.innerText = hfont;
    tFontName.innerText = tfont;
}


