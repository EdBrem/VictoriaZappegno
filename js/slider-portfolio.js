// ------------------ SLIDERS PORTAFOLIOS

window.addEventListener('load', function() {
    new Glider(document.querySelector('.glider'), {
         slidesToShow: 1,
         slidesToScrol: 1,
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
                slidesToShow: 2,
                slidesToScroll: 2,
                draggable: true,
                arrows: {
                    prev: '.arrow-left',
                    next: '.arrow-right'
                }
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              draggable: true,
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