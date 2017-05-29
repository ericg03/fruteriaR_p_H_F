<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>FRUTERIA ROSA-contacto</title> 

<!-- meta -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="Fruteria Rosa, tenemos las mejores frutas y verduras de Bilbao y deusto, reparto a domicilio en bilbao y deusto">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1">


<!--[if IE]><link rel="shortcut icon" href="favicon.ico"><![endif]-->
<link rel="apple-touch-icon-precomposed" href="apple-logohorno.png"><!-- tamano del archivo 180x180 -->
<link rel="icon" href="direccionDeLaImagen" ><!-- tamaño 196x196 -->



<link rel="icon" href="icon.ico" >
<link href="https://fonts.googleapis.com/css?family=Dancing+Script" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/form.css">
<!--  los estilos se pueden colocar aqui o importarlos. en este caso los importamos   -->
</head>
<body> 
          
     
         
         <header>
            <div class="contenedor">         
              <h1><a href="index.html">frutas rosa</a></h1>
             <nav>
                 <ul class="menu">
                     <li><a href="index.html">inicio</a></li>
                     <li><a href="index.html#caja1">productos</a></li>
                     <li><a href="index.html#servicios">servicios</a></li>                    
                     <li><a href="form.php" class="color">contacto</a></li>
                 </ul>
             </nav>
         
             </div>
        </header>
     <div id="cont">      
          <div class="tramo"></div>
        
          <h2>formulario de contacto</h2>
          <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post" class="caja">
              <div id="parte1">
                    <label>Nombre (requerido)</label>
                  <!--  <input type="text" class="input1">   -->
                    <input type="text" class="form-control input1" id="nombre" name="nombre" value="<?php if(!$enviado && isset($nombre)) echo $nombre ?>">

                    <label>Apellido</label>
                  <!--  <input type="text" class="input1">   -->
                    <input type="text" class="form-control input1" id="apellido" name="apellido" value="<?php if(!$enviado && isset($apellido)) echo $apellido ?>">

                    <label>Telefono</label>
                  <!--  <input type="email" class="input1">   -->
                    <input type="number" class="form-control input1" id="telefono" name="telefono" value="<?php if(!$enviado && isset($telefono)) echo $telefono ?>">


                    <label>Correo electrónico (requerido)</label>
                  <!--  <input type="email" class="input1">   -->
                    <input type="email" class="form-control input1" id="correo" name="correo" value="<?php if(!$enviado && isset($correo)) echo $correo ?>"> 
              </div>  
              <div id="parte2">
                    <label>Asunto</label>
                    <input type="text" name="asunto" class="input1" value="<?php if(!$enviado && isset($asunto)) echo $asunto ?>"> 

                    <label>Mensaje</label>
                    <textarea name="mensaje" rows="12" cols="40"><?php if(!$enviado && isset($mensaje)) echo $mensaje ?></textarea>         
                      <?php if (!empty($errores)): ?> 
                        <div class="alert error">
                             <?php echo $errores; ?>
                        </div>
                    <?php elseif($enviado): ?>
                        <div>
                            <p class="alert success">Enviado Correctamente</p>
                        </div>
                    <?php endif ?>
                    <input type="submit" name="submit" value="Enviar">
              </div>
         </form>
         
         
          <h3>mapa de ubicacion</h3>
          <div id="mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.1038757973447!2d-2.9483479848484424!3d43.27019957913621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e5022e0d60865%3A0x63f7a8539cef1f16!2sBlas+de+Otero+Kalea%2C+30%2C+48014+Bilbo%2C+Bizkaia!5e0!3m2!1ses!2ses!4v1494237322039"  frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>
          
     </div>     
          <div id="flecha"><img src="img/flechaArriba.png" alt="ir arriba"></div>   
          
<!--          <footer class="caja">-->
              <footer>
             <div class="contenedor">   
                <div>
                   TEL: 946573089<br>
                    DIRECCION: Av La Libertad 61 con José Zorrilla,<br>
                   Barakaldo, CA 94158<br>
               </div>
               <ul>
                   <li><a href="" id="face">casa</a></li>
                   <li><a href="" id="inst"></a></li>
                   <li><a href="" id="gmail"></a></li>
               </ul>
              <span>&#64; 2016 by Luna Tapas</span>
              </div>  
          </footer>

         
      
            

<!--  estas son dos formas: con el src y con el href  =>  Esto es para usar jquery  -->
<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<!-- <script type="text/javascript" href="js/jquery-2.1.4.js"></script>  -->
<script type="text/javascript" src="js/script.js"></script>
</body>
</html>        
        

	