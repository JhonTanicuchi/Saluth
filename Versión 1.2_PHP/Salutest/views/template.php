<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Salutest</title>
    <link rel="stylesheet" href="styles/style_template.css">
    <link rel="icon" href="resources/img/Favicon.png" type="image/gif" sizes="16x16">
    <link href = "resources/fonts/SegoeUI/stylesheet.css" rel = "stylesheet" type = "text/css" />
    <script src="js/jquery-3.6.0.min.js" type="text/javascript"></script>   
</head>

<body>
    
<header>
    <div>
        <img src="resources/img/Icono.png" alt="">
        <h1>Salutest</h1>
    </div>
    <div>
        <p>V1.2</p>
    </div>
</header>

<section>
<?php
$mvc = new MvcController();
$mvc -> enlacesPaginasController();
?>
</section>
</body>
</html>