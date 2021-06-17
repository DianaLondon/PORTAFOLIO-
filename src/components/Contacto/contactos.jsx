
/*Importacion de React*/
import React from 'react'
/*Importación del archivo CSS*/
import '../utils/CSS/contactos.css'
/*Importacion de las imagenes*/
import Correo from '../utils/IMAGES/correo.png'

/*-------------------------------------FIN DE LAS IMPORTACIONES---------------------------------------------------*/


/*COMPONENTE DE CONTACTO*/
const contactos = () => {
    return (
        /*SECCIÓN DE CONTACTO*/
        <div id="contact">
            {/*Sección que contiene información del contacto*/}
            <section id="contacto">
            <img id="email"src={Correo}/>
            <article class="container" id="formulario">
                <p id="aqui">Contacto</p>
                <p className="parrafoEstudios">Hola!, si tienes alguna duda, comentario, sugerencia o idea te invito a llenar el formulario. </p>
                <div className="formBox">
                     {/*Sección del formulario*/}
                    <form method="post" autocomplete="off" action="https://www.google.com/intl/es-419/gmail/about/">
                        <div className="inputBox">
                        <span id="nota"> Nombre </span>
                            <input type="text" name="name" required="required"/>
                        </div>
                        <div className="inputBox">
                        <span id="nota"> Email </span>
                            <input type="email" name="email" required="required"/>
                        </div>
                        <div className="inputBox">
                        <span id="nota"> Escriba su mensaje aqui... </span>
                            <textarea required="required" name="email"/>
                        </div>
                        <div className="inputBox">
                        <input type="submit" name="sendForm" value="Enviar"/>
                        </div>
                    </form>
                    {/*Fin de la sección del formulario*/}
                </div>
            </article>
            </section>
            {/*Fin de la sección que contiene información del contacto*/}

        </div>
    )
}

export default contactos
/*FIN DEL COMPONENTE DE CONTACTO*/
