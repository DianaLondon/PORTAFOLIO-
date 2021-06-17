
/*Importacion de React*/
import React, { useState } from 'react';
/*Importacion de las propiedades de estilo*/
import styled from 'styled-components';
/*Importacion del componente RightNav*/
import RightNav from './RightNav';

/*-------------------------------------FIN DE LAS IMPORTACIONES---------------------------------------------------*/

/*ESTILOS DE LA SECCIÓN DEL BURGER*/
const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  /*RESPONSIVE DEL BURGER HASTA LOS 1024px*/
  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#ffffff'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

/*FIN DE LOS ESTILOS DE LA SECCIÓN DEL BURGER*/

/*COMPONENTE DEL BURGER*/
const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      {/*Funciones del menú para direccionar a otro contenedor*/}
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open}/>
       {/*Fin de las funciones del menú para direccionar a otro contenedor*/}
    </>
  )
}

export default Burger
/*FIN DEL COMPONENTE DEL BURGER*/

