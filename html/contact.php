<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <title>Document</title>
</head>
<body>
<!--  NAV BAR -->

<header>
    <div class="menu">
        <img src="../img/logo_blanco.png" alt="logo" id="top" width="100px">
    
        <label for="menu" class="btn_menu">
            <ion-icon name="menu-outline"></ion-icon>
        </label>
        <input type="checkbox" id="menu" class="btn_check">
        <div class="nav_menu">
            <a href="../index.html">HOME</a>
            <a href="about.html">ABOUT ME</a>
            <a href="portfolio.html">PORTFOLIO</a>
            <a href="prices.html">PRICES</a>
            <a href="contact.html" class="active">CONTACT</a>
            <a href="faq.html">FAQ</a>
        </div>
    </div>
</header> 
<!-- FORMULARIO DE CONTACTO  -->

    <section class="contacto">
        <div class="form_contacto">
            <div class="form_text">
                <h2> Make your enquiry</h2>
                <p>I LOOK FORWARD TO HEARING FROM YOU!</p>
            </div>

            <form method="post">
                <legend>Name*</legend>
                <input type="text" class="form_input" name="name" required>
                <legend>Email*</legend>
                <input type="email" class="form_input" name="email" required>
                <legend>Message*</legend>
                <textarea class="form_input" name="msg" required></textarea><br>
                <input type="submit" class="form_btn" value="Send Message"> 
            </form>

        </div>
    </section>

<!--  FOOTER  -->
    <footer class="container">
        <div class="footer_options">
            <div class="footer_menu">
                <ul>
                    <li><a href="#top">Home</a></li>
                    <li><a href="/html/about.html">About</a></li>
                    <li><a href="/html/portfolio.html">Portfolio</a></li>
                    <li><a href="/html/prices.html">Prices</a></li>
                    <li><a href="/html/contact.html">Contact</a></li>
                    <li><a href="/html/faq.html">FAQ</a></li>
                </ul>
            </div> 
            <div class="location">
                <h3>My location</h3>
                <p>Playa del Carmen, México</p>
            </div>
            <div class="footer_contact">
                <h3>Contact</h3>
                <p>Email: vickyzappegno@gmail.com</p>
                <p>Phone: +529841115751</p>
            </div>
            <div class="social_media">
                <h3>Follow me</h3>
                <a href=""><ion-icon name="logo-instagram"></ion-icon></a>
                <a href=""><ion-icon name="logo-facebook"></ion-icon></a>
            </div>
        </div>
    </footer>
    <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
    <?php
    include("mail.php");
    ?>
</body>
</html>