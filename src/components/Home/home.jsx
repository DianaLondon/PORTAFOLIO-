
/*Importacion de React*/
import React from 'react'
/*Importación del archivo CSS*/
import '../utils/CSS/home.css'
/*Importacion de las imagenes*/
import Portada from '../utils/IMAGES/portada.jpeg'

/*-------------------------------------FIN DE LAS IMPORTACIONES---------------------------------------------------*/

/*COMPONENTE DE HOME*/
const home = () => {
    return (
        /*SECCIÓN DEL HOME*/
        <div id="home">
              <img src={Portada} alt="Imagen del cuerpo"/> 
              <div className="name">
                {/*Contenedor del texto inicial */}
                <span>D</span>
                <span>i</span>
                <span>a</span>
                <span>n</span>
                <span>a</span>
              </div>
              {/*Fin del contenedor del texto inicial */}
               {/*Contenedor del texto */}
                <div className="developer">
                   <h1 className="subtitule">Developer</h1>
                </div>
                 {/*Fin del contenedor del texto */}
                  {/*Contenedor de las animaciones */}
                <div className="burbujas">
                  <div className="burbuja"></div>
                  <div className="burbuja"></div>
                  <div className="burbuja"></div>
                  <div className="burbuja"></div>
                  <div className="burbuja"></div>
                  <div className="burbuja"></div>
                  <div className="burbuja"></div>
                  <div className="burbuja"></div>
                  <div className="burbuja"></div>
                  </div>
                {/*Fin del contenedor de las animaciones */}
        </div>
    /*FIN DE LA SECCIÓN DEL HOME*/
    
    );
}

export default home;
/*FIN DEL COMPONENTE DE HOME*/