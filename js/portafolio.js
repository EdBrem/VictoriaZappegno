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
