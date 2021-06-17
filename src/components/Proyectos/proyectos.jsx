
/*Importacion de React*/
import React from 'react'

/*Importación del archivo CSS*/
import '../utils/CSS/proyectos.css'

/*Importacion de las imagenes*/
import Zodiaco from '../utils/IMAGES/zodiaco.JPG'
import Zodiaco1 from '../utils/IMAGES/zodiaco1.JPG'
import Zodiaco2 from '../utils/IMAGES/zodiaco2.JPG'
import Zodiaco3 from '../utils/IMAGES/zodiaco3.JPG'
import Zodiaco4 from '../utils/IMAGES/zodiaco4.JPG'
import Zodiaco5 from '../utils/IMAGES/zodiaco5.JPG'
import Tienda from '../utils/IMAGES/Tienda.JPG'
import Tienda1 from '../utils/IMAGES/Tienda1.JPG'
import Tienda2 from '../utils/IMAGES/Tienda2.JPG'
import Tienda3 from '../utils/IMAGES/Tienda3.JPG'
import Tienda4 from '../utils/IMAGES/Tienda4.JPG'

/*-------------------------------------FIN DE LAS IMPORTACIONES---------------------------------------------------*/


/*COMPONENTE DE PROYECTOS*/
  const Proyectos = (props) => {
    return (
        /*SECCIÓN DE PROYECTOS*/
        <div id="projects">
              {/*Sección del titulo y parrafo de proyectos*/}
             <div className="parrafito">
             <h1 id="titular">PROYECTOS</h1>
                <h6>
                  Los proyectos se logran visualizar dando click sobre alguna de las imagenes del lado derecho
                </h6>
             </div>
    <br></br>
         {/*Sección donde se ecuentran las imagenes*/}
        <ul class="galeria">
            <li><a href="#img1"><img src={Zodiaco}/></a></li>
            <li><a href="#img2"><img src={Zodiaco1}/></a></li>
            <li><a href="#img3"><img src={Zodiaco2}/></a></li>
            <li><a href="#img4"><img src={Zodiaco3}/></a></li>
            <li><a href="#img5"><img src={Zodiaco4}/></a></li>
            <li><a href="#img6"><img src={Zodiaco5}/></a></li>
            <br></br>
        </ul>
        <ul class="galeria2">
            <li><a href="#img7"><img src={Tienda}/></a></li>
            <li><a href="#img8"><img src={Tienda1}/></a></li>
            <li><a href="#img9"><img src={Tienda2}/></a></li>
            <li><a href="#img10"><img src={Tienda3}/></a></li>
            <li><a href="#img11"><img src={Tienda4}/></a></li>
            <br></br>
        </ul>
         {/*Fin de la sección donde se encuentran las imagenes*/}
         {/*Sección de los modales*/}
        <div className="modal" id="img1">
            <h3> Proyecto realizado con HTML, CSS Y JS </h3>
            <p id="informacion"> El proyecto consistia en crear una interfaz en la cual el usuario pudieria ingresar su dia de nacimiento para saber su signo como ingresar el signo de otra persona para saber su compatibilidad entre los mismos.</p>
            <div className="imagen">
                <a href="#img6">&#60;</a>
                <a href="#img2"><img src={Zodiaco}/></a>
                <a href="#img2">&#62;</a>
            </div>
            <a className="cerrar"href="#projects"> X </a>
        </div>
       {/*----------------------------------------------------------------------------------------*/}
        <div className="modal" id="img2">
        <h3> Inicio con opciones </h3>
            <div className="imagen">
                <a href="#img1">&#60;</a>
                <a href="#img3"><img src={Zodiaco1}/></a>
                <a href="#img3">&#62;</a>
            </div>
            <a className="cerrar" href="#projects"> X </a>
        </div>
       {/*----------------------------------------------------------------------------------------*/}
        <div className="modal" id="img3">
        <h3> Ingresar tu fecha de nacimiento para saber cual es tu signo </h3>
            <div className="imagen">
                <a href="#img2">&#60;</a>
                <a href="#img4"><img src={Zodiaco2}/></a>
                <a href="#img4">&#62;</a>
            </div>
            <a class="cerrar"href="#projects"> X </a>
        </div>
       {/*----------------------------------------------------------------------------------------*/}
        <div className="modal" id="img4">
        <h3> Elije tu signo </h3>
            <div className="imagen">
                <a href="#img3">&#60;</a>
                <a href="#img5"><img src={Zodiaco3}/></a>
                <a href="#img5">&#62;</a>
            </div>
            <a className="cerrar"href="#projects"> X </a>
        </div>
       {/*----------------------------------------------------------------------------------------*/}

        <div className="modal" id="img5">
        <h3> Caracteristicas de mi signo </h3>
            <div className="imagen">
                <a href="#img4">&#60;</a>
                <a href="#img6"><img src={Zodiaco4}/></a>
                <a href="#img6">&#62;</a>
            </div>
            <a className="cerrar"href="#projects"> X </a>
        </div>
       {/*----------------------------------------------------------------------------------------*/}

        <div className="modal" id="img6">
            <h3> Compatibilidad </h3>
            <div className="imagen">
                <a href="#img5">&#60;</a>
                <a href="#img1"><img src={Zodiaco5}/></a>
                <a href="#img1">&#62;</a>
            </div>
            <a className="cerrar"href="#projects"> X </a>
        </div>
       {/*----------------------------------------------------------------------------------------*/}

        <div className="modal" id="img7">
            <h3> Proyecto realizado con HTML Y CSS </h3>
            <p id="informacion"> El proyecto consistia en crear una interfaz de una tienda en donde se evidenciaba la información de la empresa como sus servicios y productos.</p>
            <div className="imagen">
                <a href="#img11">&#60;</a>
                <a href="#img8"><img src={Tienda}/></a>
                <a href="#img8">&#62;</a>
            </div>
            <a className="cerrar"href="#projects"> X </a>
        </div>
       {/*----------------------------------------------------------------------------------------*/}

        <div className="modal" id="img8">
        <h3> Información de la empresa </h3>
            <div className="imagen">
                <a href="#img7">&#60;</a>
                <a href="#img9"><img src={Tienda1}/></a>
                <a href="#img9">&#62;</a>
            </div>
            <a className="cerrar" href="#projects"> X </a>
        </div>
       {/*----------------------------------------------------------------------------------------*/}

        <div className="modal" id="img9">
        <h3> Servicios de la empresa </h3>
            <div className="imagen">
                <a href="#img8">&#60;</a>
                <a href="#img10"><img src={Tienda2}/></a>
                <a href="#img10">&#62;</a>
            </div>
            <a className="cerrar" href="#projects"> X </a>
        </div>
       {/*----------------------------------------------------------------------------------------*/}

        <div className="modal" id="img10">
        <h3> Productos de la empresa </h3>
            <div className="imagen">
                <a href="#img9">&#60;</a>
                <a href="#img11"><img src={Tienda3}/></a>
                <a href="#img11">&#62;</a>
            </div>
            <a className="cerrar" href="#projects"> X </a>
        </div>
       {/*----------------------------------------------------------------------------------------*/}

        <div className="modal" id="img11">
        <h3> Contacto de la empresa </h3>
            <div className="imagen">
                <a href="#img10">&#60;</a>
                <a href="#img7"><img src={Tienda4}/></a>
                <a href="#img7">&#62;</a>
            </div>
            <a className="cerrar" href="#projects"> X </a>
        </div>
       {/*----------------------------------------------------------------------------------------*/}

        {/*Fin de la sección de los modales*/}
        </div>
        /*FIN DE LA SECCIÓN DE PROYECTOS*/
    );
  };
  
  export default Proyectos;
  /*FIN DEL COMPONENTE DE PROYECTOS*/