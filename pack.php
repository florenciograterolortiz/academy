<?php include 'recursos/header.php'; ?>
<style type="text/css" media="screen">
  p{
    padding: 8px;
    text-align: center;
  }
</style>
    <div class="row">
      <div class="col-xs-12 col-md-8">
        <div class="col-xs-12 col-md-6">
          <a href="http://localhost/software/recursos/pack/wampserver.exe">
            <img src="http://localhost/software/image/wamp.png" class="img-responsive img-thumbnail" alt="Responsive image">
          </a>
          <p class="bg-primary">Descarga  WampServer 32bit</p>
          <p>
            WampServer es un entorno de desarrollo web para Windows con el que podrás crear aplicaciones web con Apache, PHP y bases de datos MySQL database. También incluye PHPMyAdmin y SQLiteManager para manejar tus bases de datos.
          </p>
        </div>
        <div class="col-xs-12 col-md-6">
          <a href="http://localhost/software/recursos/pack/xampp.exe">
            <img src="http://localhost/software/image/xampp.png" class="img-responsive img-thumbnail" alt="Responsive image">
          </a>
          <p class="bg-primary">Descarga Xampp 32bit</p>
          <p>
            XAMPP es un paquete de instalación independiente de plataforma, software libre, que consiste principalmente en el sistema de gestión de bases de datos MySQL, el servidor web Apache y los intérpretes para lenguajes de script: PHP y Perl.
          </p>
        </div>
      </div>
      <div class="col-xs-12 col-md-4">
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          </ol>

          <!-- Wrapper for slides -->
          <div class="carousel-inner" role="listbox">
            <div class="item active">
              <img src="http://localhost/software/image/1.png" alt="...">
              <div class="carousel-caption">
                <p>Una tecnologia a tu dispocisión</p>
              </div>
            </div>
            <div class="item">
              <img src="http://localhost/software/image/2.jpg" alt="...">
              <div class="carousel-caption">
                <p>Multiplataforma</p>
              </div>
            </div>
          </div>

          <!-- Controls -->
          <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <br><br>
        <a href="#" title="" data-toggle="modal" data-target=".bs-example-modal-lg">
          <img src="http://localhost/software/image/videophp.png" alt="..." class="img-thumbnail img-responsive" data-toggle="tooltip" data-placement="top" title="Click para ver video de PHP">
        </a>
        <br><br>
        <a href="http://localhost/software/recursos/ahorcado/index.html" title="">
          <img src="http://localhost/software/image/ahorcado.jpg" alt="..." class="img-thumbnail img-responsive" data-toggle="tooltip" data-placement="top" title="Click para jugar el ahoracado PHP">
        </a>
        <br><br>
        <a href="http://localhost/software/recursos/sopa/index.html" title="">
          <img src="http://localhost/software/image/sopadeletras.jpg" alt="..." class="img-thumbnail img-responsive" data-toggle="tooltip" data-placement="top" title="Click para jugar la sopa de letras de PHP">
        </a>
      </div>
    </div> 

    <div class="row">
      <div class="col-xs-12 col-md-12 footercla">
        <p class="bg-primary" style="text-align: center; padding: 8px;">Desarrollado por: Delvis Tovar & Popdeztroy 2017 </p>
      </div>
    </div>

    </div>
<script> 
function abrir(url) { 
open(url,'','top=300,left=300,width=600,height=500') ; 
} 
</script>
<?php include 'recursos/modal.php'; ?>    
<?php include 'recursos/footer.php'; ?>