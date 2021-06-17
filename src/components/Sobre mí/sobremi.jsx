
/*Importacion de React*/
import React from 'react'
/*Importación del archivo CSS*/
import '../utils/CSS/sobremi.css'
/*Importacion de las imagenes*/
import Personal from '../utils/IMAGES/personal.png'
import Instagram from '../utils/IMAGES/insta.png'
import Git from '../utils/IMAGES/github.png'
import Linkeid from '../utils//IMAGES/linkedin.png'
/*-------------------------------------FIN DE LAS IMPORTACIONES---------------------------------------------------*/


/*COMPONENTE SOBRE MÍ*/
const sobremi = () => {
    return (
        /*SECCIÓN SOBRE MÍ*/
        <div id="me">
            <div className="quien">
            <p className="titu_sobre">SOBRE MÍ</p>
                <div className="yo">
            <br></br>
             {/*Imagen mia*/}
            
            <img id="yo"src={Personal} alt="Imagen del cuerpo"/>
            <br></br>
           {/*Sección de donde esta mi información*/}
            <div className="description">
                   <p className="parrafoInicial"> Hola, mi nombre es Diana Carolina Londoño Cubillos, tengo 17 años, actualmente soy estudiante de desarrollo web en la ciudad de Bogotá, Colombia. Me caracterizo por mi creatividad, ingenio e innovación. Soy una persona apasionada a la tecnología que busca implementar nuevos modelos de software eficientes, económicos y factibles .
                   <p id="habilidades">Mis habilidades</p>
                   <ul id="otra">
                       <li>Analisis</li>
                       <li> Liderazgo</li>
                       <li>Comunicación</li>
                   </ul>
                   <ul id="otra">
                       <li>Trabajo en equipo</li>
                       <li> Agilidad</li>
                   </ul>
                   </p>
            </div>
            {/*Fin de la sección de donde esta mi información*/}
             {/*Sección donde estan los iconos*/}
                <ul class="icons">
                    <li><a href="https://github.com/DianaLondon"><img id="Git"src={Git}></img></a></li>
                    <li><a href="https://www.linkedin.com/in/diana-carolina-londono-cubillos-17435920b/"><img id="Link" src={Linkeid}></img></a></li>
                    <li><a href="https://www.instagram.com/_dianacarolina0_/?hl=es-la"><img id="Insta" src={Instagram}></img></a></li>
                </ul>
            {/*Fin de la sección donde estan los iconos*/}
            </div>
            </div>
             {/*Fin de la sección de donde esta mi información*/}
        </div>
        /*FIN DE LA SECCIÓN SOBRE MÍ*/
    )
}

export default sobremi
/*COMPONENTE SOBRE MÍ*/