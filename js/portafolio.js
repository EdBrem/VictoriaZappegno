   
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


    // ------------------ SLIDERS PORTAFOLIOS    

    window.addEventListener('load', function() {
        new Glider(document.querySelector('.glider'), {
             slidesToShow: 2,
             slidesToScrol: 2,
             draggable: true,
             arrows: {
                 prev: '.arrow-left',
                 next: '.arrow-right'
             },
             responsive: [
                {
                  // screens greater than >= 775px
                  breakpoint: 775,
                  settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 'auto',
                    slidesToScroll: 'auto',
                    itemWidth: 150,
                    duration: 0.25
                  }
                },{
                  // screens greater than >= 1024px
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    itemWidth: 150,
                    duration: 0.25
                  }
                }
              ]
        })

    })