const fonts = [
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
    if (i >= fonts.length - 1) {
        i = -1;
    }
    i++;
    addFont(i);
})

prevBtn.addEventListener('click', () => {
    console.log(i);
    if (i <= 0) {
        i = fonts.length;
    }
    i--;
    console.log(i);
    addFont(i);
})

// dropdown option
const selectFont = document.getElementById('select-font');
const fragment = document.createDocumentFragment();

fonts.forEach((font, index) => {
    const optionElement = document.createElement('option');
    optionElement.innerHTML = `${font.hfont} + ${font.tfont}`
    optionElement.value = `${index}`;
    fragment.appendChild(optionElement);
});

selectFont.appendChild(fragment);

selectFont.addEventListener('change', () => {
    let selectedIndex = Number(selectFont.value);
    console.log(selectFont.selectedIndex);
    addFont(selectedIndex);
})


const addFont = (i) => {
    slideNumber.innerText = i + 1;
    const hfont = fonts[i].hfont;
    const tfont = fonts[i].tfont;

    hFont.style.fontFamily = `'${hfont}',sans-serif`;
    tFont.style.fontFamily = `'${tfont}',sans-serif`;

    hFontName.innerText = hfont;
    tFontName.innerText = tfont;
}

