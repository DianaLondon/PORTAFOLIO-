
/*Importacion de React*/
import React from 'react'
/*Importacion del archivo de CSS*/
import '../utils/CSS/footer.css'
/*Importacion de las imagenes*/
import Whast from '../utils/IMAGES/whastapp.svg'
import Email from '../utils/IMAGES/email.svg'

/*-------------------------------------FIN DE LAS IMPORTACIONES---------------------------------------------------*/


/*COMPONENTE DEL FOOTER*/
const footer = () => {
    return (
        /*SECCIÓN DEL FOOTER*/
        <footer>
            {/*Sección donde esta la información del footer*/}
            <article className="datos-contacto">

                <ul>
                    <li ><img src ={Whast}/> (+57) 322 414 3354</li>
                    <li><img src ={Email}/>dianaclondonoc@gmail.com</li>
                </ul>
               {/*Sección donde estan los datos personales*/}
              	<section id="datos-personales">
                  <p class="creditos datos"> Diana Carolina Londoño - Desarrolladora web </p>
                  <p class="creditos copyright"> ©2021</p>
                  </section>
                   {/*Fin de la sección donde estan los datos personales*/}
            </article>
            {/*Fin de la sección de la información del footer*/}
        </footer>
        /*FIN DE LA SECCIÓN DEL FOOTER  */
    )
}

export default footer
/*FIN DEL COMPONENTE DEL FOOTER*/
