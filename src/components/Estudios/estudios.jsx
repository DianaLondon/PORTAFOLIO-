
/*Importacion de React*/
import React from 'react'
/*Importacion de los archivos de css y boostrap*/
import '../utils/CSS/estudios.css'
import 'bootstrap/dist/css/bootstrap.min.css'
/*Importacion de las imagenes*/
import Alianza from '../utils/IMAGES/Alianza.jpg'
import SENA from '../utils/IMAGES/SENA.jpg'
import KUEPA from '../utils/IMAGES/kuepa.png'
import HTML from '../utils/IMAGES/html.png'
import CSS from '../utils/IMAGES/css.png'
import JS from '../utils/IMAGES/js.png'
import REACT from '../utils/IMAGES/reactjs.png'
import VISUAL from '../utils/IMAGES/VS.png'
import SUBLIME from '../utils/IMAGES/sublime.png'
import FIGMA from '../utils/IMAGES/figma.png'
/*Importacion de algunos componentes de reactstrap*/
import { Progress } from 'reactstrap';
import { Media } from 'reactstrap';


/*-------------------------------------FIN DE LAS IMPORTACIONES---------------------------------------------------*/

/*COMPONENTE DE ESTUDIOS*/
const estudios = () => {
    return (

        <div id="studys">
           {/*Sección de estudios*/}
          <div className="estudios">
          <p className="titu_estudios"> ESTUDIOS </p>
           {/*Sección de las cards*/}
 {/*Sección de la primera card*/}
<div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4">
    <img src={Alianza} class="card-img" alt="..."></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Bachiller academico</h5>
        <h6 class="card-subtitle mb-2 text-muted">2020</h6>
        <p class="card-text">Colegio Santiago de las Atalayas.</p>
        <a href="https://alianzaeducativa.edu.co" class="Mas información">Alianza educativa</a>
      </div>
    </div>
  </div>    
</div>
 {/*Fin de la card*/}
{/*Sección de la segunda card*/}
<div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4">
    <img src={SENA} class="card-img" alt="..."></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="titulito">Tecnico en contabilidad de operaciones comerciales y financieras</h5>
        <h6 class="card-subtitle mb-2 text-muted">2020</h6>
        <p class="card-text">SENA</p>
        <a href="https://www.sena.edu.co/es-co/Paginas/default.aspx">SENA</a>
      </div>
    </div>
  </div>
</div>
 {/*Fin de la card*/}
 {/*Sección de la tercera card*/}
<div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4">
    <img src={SENA} class="card-img" alt="..."></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="titulito">Tecnologo en gestión contable y de información financiera</h5>
        <h6 class="card-subtitle mb-2 text-muted">2021</h6>
        <p class="card-text">SENA</p>
        <a href="https://www.sena.edu.co/es-co/Paginas/default.aspx">SENA</a>
      </div>
    </div>
  </div>
</div>
{/*Fin de la card*/}
 {/*Sección de la cuarta card*/}
<div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4">
    <img src={KUEPA} class="card-img" alt="..."></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="titulito">Tecnico en programación web</h5>
        <h6 class="card-subtitle mb-2 text-muted">2021</h6>
        <p class="card-text">KUEPA</p>
        <a href="https://www.kuepa.com/bachillerato-virtual?adnetwork=SEM_bachillerato_virtual_bogota_web&gclid=CjwKCAjwtpGGBhBJEiwAyRZX2qbhSHtmwPab-1DdRfZucJZaVZriYom0pEibM0FJHUffQFCQGyCFphoCpUsQAvD_BwE">KUEPA</a>
      </div>
    </div>
  </div>
</div>
</div>
{/*Fin de la card*/}
{/*Sección de lenguajes*/}
<p className="titu_estudios"> CONOCIMIENTOS</p>
<div className="lenguajes">
{/*Inicio de la media*/}
  <p className="parrafoEstudios"> Durante mi proceso académico he adquirido conocimientos en lenguajes como HTML, CSS, JS y en librerías como REACT JS. De la misma manera tengo manejo en editores de codigo como Visual Studio y Sublime, y en softwares para maquetar como lo es Figma.</p>
<Media id="css">
        <Media img src={HTML} alt="Generic placeholder image" />
      <Media body>
        <Media heading>
        </Media>
        <h5>HTML</h5>
        <Progress id="olu" value="90">90%</Progress>
      </Media>
    </Media>
    <Media id="css">
        <Media img src={CSS} alt="Generic placeholder image" />
      <Media body>
        <Media heading>
        </Media>
        <h5>CSS</h5>
        <Progress id="olu" value="90">80%</Progress>
      </Media>
    </Media>
    <Media id="js">
        <Media img src={JS} alt="Generic placeholder image" />
      <Media body>
        <Media heading>
        </Media>
        <h5>JS</h5>
        <Progress id="olu" value="90">90%</Progress>
      </Media>
    </Media>
    <Media id="react">
        <Media img src={REACT} alt="Generic placeholder image" />
      <Media body>
        <Media heading>
        </Media>
        <h5> REACT JS</h5>
        <Progress id="olu" value="85">85%</Progress>
      </Media>
    </Media>
    <Media id="vs">
        <Media img src={VISUAL} alt="Generic placeholder image" />
      <Media body>
        <Media heading>
        </Media>
        <h5>VISUAL STUDIO</h5>
        <Progress id="olu" value="90">90%</Progress>
      </Media>
    </Media>
    <Media id="css">
        <Media img src={SUBLIME} alt="Generic placeholder image" />
      <Media body>
        <Media heading>
        </Media>
        <h5>SUBLIME</h5>
        <Progress id="olu" value="90">90%</Progress>
      </Media>
    </Media>
   <Media id="css">
        <Media img src={FIGMA} alt="Generic placeholder image" />
      <Media body>
        <Media heading>
        </Media>
        <h5>FIGMA</h5>
        <Progress id="olu" value="90">90%</Progress>
      </Media>
    </Media>
{/*Fin de la media*/}
</div>
    </div>
    )
}

export default estudios
/*FIN DEL COMPONENTE DE ESTUDIOS*/