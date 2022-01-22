$(document).ready (() => {

    $('.esp').css('display', 'none')

    // Cambio de idioma
    $('#btn_spanish').click (() => {
        $('.eng').fadeOut(10)
        $('.esp').fadeIn(300)
    })

    $('#btn_english').click (() => {
        $('.esp').fadeOut(10)
        $('.eng').fadeIn(300)
    })
})