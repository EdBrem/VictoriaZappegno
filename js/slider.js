
// ----------------- SLIDER REVIEWS
const slider = [...document.querySelectorAll('.slider_body')]
const arrowNext = document.querySelector('#after')
const arrowBefore = document.querySelector('#before')
const sliderNum = document.getElementById('slider-num')
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
    sliderNum.textContent = value + ' / 9'

}

//  Slider banner principal 

const btn_prev = $('#btn_prev')
const btn_next = $('#btn_next')

const images_src = [
    'img/home/CARRUSEL1.JPG',
    'img/home/CARRUSEL2.JPG',
    'img/home/CARRUSEL3.jpg',
    'img/home/CARRUSEL4.JPG',
    'img/home/CARRUSEL5.JPG',
    'img/home/CARRUSEL6.JPG',
    'img/home/CARRUSEL7.JPG',
    'img/home/CARRUSEL8.JPG'
]
let pos_actual = 0
$('#img_banner').attr("src",images_src[pos_actual]);


btn_prev.click(() => {
    $('#img_banner').attr("src",images_src[pos_actual]).fadeOut(100);
    setTimeout(()=> {
        pos_actual--
        validarPos()
        $('#img_banner').attr("src",images_src[pos_actual]).fadeIn(100);
    }, 200)
})

btn_next.click(() => {
    $('#img_banner').attr("src",images_src[pos_actual]).fadeOut(100);
    setTimeout(()=> {
        pos_actual++
        validarPos()
        $('#img_banner').attr("src",images_src[pos_actual]).fadeIn(100);
    }, 200)
})

function validarPos() {
    if(pos_actual >= images_src.length) pos_actual = 0
    if(pos_actual < 0) pos_actual = (images_src.length) - 1
}
