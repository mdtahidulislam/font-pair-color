// get action btn
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

const slideNumber = document.querySelector('.slide-number');
const hFont = document.querySelector('.h-font');
const tFont = document.querySelector('.t-font');

const hFontName = document.querySelector('.heading-font');
const tFontName = document.querySelector('.text-font');

const contentBox = document.querySelector('.content-box');

const fontDownCopyBtn = document.querySelectorAll('.btn-bg')

// GET FONTS PAIR
const fonts = [];
fetch('./fontsPair.json')
    .then(res => res.json())
    .then(data => fonts.push(...data))
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
const selectHeadingFont = document.getElementById('select-heading-font');
const selectTextFont = document.getElementById('select-text-font');
const fragment = document.createDocumentFragment();

// fonts.forEach((font, index) => {
//     const optionElement = document.createElement('option');
//     optionElement.innerHTML = `${font.hfont} + ${font.tfont}`
//     optionElement.value = `${index}`;
//     fragment.appendChild(optionElement);
// });

// selectFont.appendChild(fragment);

// GET ALL GOOGLE FONTS
const API_KEY = 'AIzaSyAV5-rBFPIkyTkVTi1dsUg3pRj5wOHAF9E';
fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
        const fonts = data.items;

        fonts.forEach(font => {

            // DROPDOWN OPTION FOR HEADING
            allGoogleFonts(font, 'select-heading-font');
            // DROPDOWN OPTION FOR TEXT
            allGoogleFonts(font, 'select-text-font');

            // load font
            // WebFont.load({
            //     google: {
            //         families: [family]
            //     }
            // });  
        });
    })

// MAKE DROPDOWN OPTION WITH ALL GOOGLE FONTS
const allGoogleFonts = (font, elementId) => {
    //const allFonts = [];
    const family = font.family;
    //    console.log(family);
    //allFonts.push(family);

    const optionElement = document.createElement('option');
    optionElement.innerHTML = family;
    optionElement.value = family;
    fragment.appendChild(optionElement);
    document.getElementById(elementId).appendChild(fragment);
}

// SELECT FONT FOR HEADING & TEXT
const selectFont = (elementId) => {
    const selectedElement = document.getElementById(elementId);
    const selectedFont = selectedElement.options[selectedElement.selectedIndex].text;
    if (elementId === 'select-heading-font') {
        hFont.style.fontFamily = `'${selectedFont}',sans-serif`;
        hFontName.innerText = selectedFont;
    }
    if (elementId === 'select-text-font') {
        tFont.style.fontFamily = `'${selectedFont}',sans-serif`;
        tFontName.innerText = selectedFont;
    }
}


// ADD FONT
const addFont = (i, value) => {
    slideNumber.innerText = i + 1;

    const hfont = fonts[i].hfont;
    const tfont = fonts[i].tfont;

    hFont.style.fontFamily = `'${hfont}',sans-serif`;
    tFont.style.fontFamily = `'${tfont}',sans-serif`;

    hFontName.innerText = hfont;
    tFontName.innerText = tfont;
}


// change color
const selectColor = (id) => {
    console.log('clicked');
    const color = document.getElementById(id).value;
    if (id === 'heading-color') {
        hFont.style.color = color;
    } else if (id === 'text-color') {
        tFont.style.color = color;
    } else if (id === 'bg-color') {
        contentBox.style.backgroundColor = color;
    } else if (id === 'btn-color') {
        fontDownCopyBtn.forEach(btn => btn.style.backgroundColor = color)
    }
}

