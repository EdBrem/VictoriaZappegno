$(document).ready( ()=> {

    $("#enviar").click(function( e ) {
        e.preventDefault()
        $.ajax({
            data: $("#formulario").serialize(), //datos que se envian a traves de ajax
            url:   './services/SentQualification.php', //archivo que recibe la peticion
            type:  'post', //método de envio
            beforeSend: function () {
                $('#pantalla-tenue').addClass('ok')
            },
            success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                $('#pantalla-tenue').removeClass('ok')
                Swal.fire({
                    icon: 'success',
                    title: 'Exito!',
                    text: 'Email enviado Correctamente'
                })
                console.log("response...")
                console.log(response)
            } });
    })
})