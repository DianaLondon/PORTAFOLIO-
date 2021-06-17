
/*Importacion de React*/
import React from 'react';
/*Importacion de las propiedades de estilo*/
import styled from 'styled-components';
/*Importacion del componente Burger*/
import Burger from './Burger';
/*Importacion de las fuentes*/
import '../utils/FONTS/fonts.styles.css'
/*Importacion de los estillos del css*/
import '../utils/CSS/home.css'
/*Importacion de las imagenes*/
import Codigo from '../utils/IMAGES/portada.jpeg'

/*-------------------------------------FIN DE LAS IMPORTACIONES---------------------------------------------------*/


/*ESTILOS DE LA SECCIÓN DEL NAV*/
const Nav = styled.nav`
    
    position: fixed;
    width: 100%;
    background: -webkit-radial-gradient(#18161a, #0a0011);
    display: flex;
    height: 98px;
    justify-content: space-between;
    border-bottom: 2px solid rgb(159, 103, 233);
    top: 0px;
    right: 0px;
    left: 0px;
    padding: 1.5rem 1.8rem;
    z-index: 1050;
    
    /*ESTILOS DEL TEXTO*/
    .logo{
        background: none;
        padding: 9px 0;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 35px;
        text-transform: uppercase;
        color: rgb(241, 241, 241);
        text-shadow: rgb(159 103 233 / 75%) 0px 0px 15px, rgb(1 15 140) 0px 0px 10px;
        transition: all 0.3s ease 0s;

    }
    /*ESTILOS DE LA IMAGEN*/
    .logo img{
        border-radius: 56px;
        margin-bottom: 5px;
        width:40px;
    }
     /*ANIMACIONES DEL TEXTO*/
    .logo img{animation:kenburns-left 3s ease-out reverse}
    @keyframes kenburns-left{0%{transform:scale(1) translate(0,0);transform-origin:16% 50%}100%{transform:scale(1.25) translate(-20px,15px);transform-origin:left}}
`
/*FIN DE LOS ESTILOS DE LA SECCIÓN DEL NAV*/

/*COMPONENTE DEL NAV*/
const Navbar = () => {
    return (
        <Nav className="navbar">
            <div className="logo">
            <img src={Codigo} alt="imagen de libro"/>  Mi portafolio
            </div>
            <Burger/>
        </Nav>
    )
}

export default Navbar
/*FIN DEL COMPONENTE DEL NAV*/