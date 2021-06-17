
/*IMPORTACIONES DE LOS ARCHIVOS DE LOS COMPONENTES*/
import React from 'react';
import Navbar from './Nav/Navbar';
import Home from './Home/home'
import Sobremi from './Sobre mí/sobremi'
import Estudios from './Estudios/estudios'
import Proyectos from './Proyectos/proyectos'
import Contactos from './Contacto/contactos'
import Footer from './Footer/footer'


/*SECCIÓN DEL COMPONENTE DE APP*/
function App() {
  return (
    /*SECCIÓN DE APP*/
    <div className="App">
      {/*Corresponden a los componentes*/}
      <Navbar/>
      <Home/>
      <Sobremi/>
      <Estudios/>
      <Proyectos/>
      <Contactos/>
      <Footer/>
    
      {/*Fin de los componentes*/}
    </div>
  );
}

export default App;
/*FIN DE SECCIÓN DEL COMPONENTE DE APP*/