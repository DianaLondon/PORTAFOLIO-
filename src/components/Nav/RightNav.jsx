/*Importacion de React*/
import React from 'react'
/*Importacion de las propiedades de estilo*/
import styled from 'styled-components';

/*-------------------------------------FIN DE LAS IMPORTACIONES---------------------------------------------------*/


/*ESTILOS DE LA SECCIÓN DEL RIGHTNAV*/
const Ul= styled.ul`
    list-style: none;
    display:flex;
    flex-flow:row nowrap;

.Navli { 
    background: none;
    color:#fff;
    opacity: 0.5;
    text-align: center;
    padding: 18px 10px;   
    transition: background 0.3s ease 0s; 
} 

li.Navl{
    background: none;
}
a{
   color:white;
   background: none;
   text-decoration: none;
   font-family: 'Inconsolata', monospace;
   padding-left: 1rem;
   font-size: 22px;
   text-transform: uppercase;
   transition: background 0.3s ease 0s;
   text-shadow: rgb(159 103 233 / 75%) 0px 0px 15px, rgb(1 15 140) 0px 0px 10px;
}

a:hover{
        text-shadow: rgb(255 255 255 / 75%) 0px 0px 5px;
        color: rgb(255, 255, 255) !important;
        transition: background 0.3s ease 0s;
}


/*RESPONSIVE DEL BURGER HASTA LOS 1024px*/
@media (max-width: 1024px) {
    flex-flow: column nowrap;
    background: -webkit-radial-gradient(#560e86, #0a0011);
    transition: background 0.3s ease 0s;
    position:fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width:300px;
    padding-top: 3.5rem;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;


}


`;

/*FIN DE LOS ESTILOS DE LA SECCIÓN DEL NAV*/



/*COMPONENTE DEL RIGHTNAV*/
const RightNav = ({ open }) => {
    return (
        /*SECCIÓN DE LO QUE VA EN EL MENÚ*/
        <Ul open={ open } className="Navul">
                <li className="Navli"><a href="#home">Inicio</a></li>
                <li className="Navli"><a href="#me">Sobre mí</a></li>
                <li className="Navli"><a href="#studys">Estudios</a></li>
                <li className="Navli"><a href="#projects">Proyectos</a></li>
                <li className="Navli"><a href="#contact">Contacto</a></li>
                
        </Ul>
        /*FIN DE LA SECCIÓN*/
        
    )
}

export default RightNav
/*FIN DEL COMPONENTE DEL RIGHTNAV*/