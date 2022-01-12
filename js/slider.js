
// ----------------- SLIDER REVIEWS
const slider = [...document.querySelectorAll('.slider_body')]
const arrowNext = document.querySelector('#after')
const arrowBefore = document.querySelector('#before')
let value; 

arrowNext.addEventListener('click', ()=>changePosition(1))
arrowBefore.addEventListener('click', ()=>changePosition(-1))

function changePosition(change){
    const currentElement = Number(document.querySelector('.slider_body--show').dataset.id)
    value = currentElement;
    value += change;

    if(value === 0 || value == slider.length+1){
        value = value === 0 ? slider.length : 1;
    }

    slider[currentElement-1].classList.toggle('slider_body--show')
    slider[value-1].classList.toggle('slider_body--show')
}

//  Slider banner principal 

// let banner = ['img/home/CARRUSEL1.JPG','img/home/CARRUSEL2.JPG','img/home/CARRUSEL3.JPG','img/home/CARRUSEL4.JPG','img/home/CARRUSEL5.JPG','img/home/CARRUSEL6.JPG','img/home/CARRUSEL7.JPG', 'img/home/CARRUSEL8.JPG']
// const previous = document.getElementById('previous')
// const nextImg = document.getElementById('next_img')
// let conteo = 0;
// let img = document.getElementById('banner_inicio')

// previous.addEventListener('click', ()=> {
//         if (conteo > 0) {
//             img.style.background = `url(${banner[conteo - 1]})`;
//             img.style.backgroundPosition = `center`;
//             img.style.backgroundRepeat = `no-repeat`;
//             img.style.backgroundSize = `cover`;
//             conteo--;
//         } else {
//             img.style.background = `url(${banner[banner.length - 1]})`;
//             img.style.backgroundPosition = `center`;
//             img.style.backgroundRepeat = `no-repeat`;
//             img.style.backgroundSize = `cover`;
//             conteo = banner.length - 1;
//         }
//     })

// nextImg.addEventListener('click', ()=>{
//     if(conteo === 0 || conteo < 7){
//         img.style.background = `url(${banner[conteo + 1]})`;
//         img.style.backgroundPosition = `center`;
//         img.style.backgroundRepeat = `no-repeat`;
//         img.style.backgroundSize = `cover`;
//         conteo ++;
//     } else {
//         img.style.background = `url(${banner[0]})`
//         img.style.backgroundPosition = `center`;
//         img.style.backgroundRepeat = `no-repeat`;
//         img.style.backgroundSize = `cover`;
//         conteo = 0
//     }
// })

const botones = document.querySelectorAll('[data-carousel-button]')

botones.forEach(button => {
    button.addEventListener('click', ()=> {
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1
        const slides = button.closest('[data-carousel]').querySelector('[data-slides]')
        const activeSlide = slides.querySelector('[data-active]')
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if(newIndex < 0) newIndex = slides.children.length - 1
        if(newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})