import React from 'react';
//import React, {Fragment} from 'react';
//FC

const PrimeraApp = ({saludo2= 'Hola Soy Naruto', subtitulo= 'Soy un robot'}) => {

 //const holaMundo = "Hola Mundo"

   // console.log(props);

    const saludo = {
        nombre: 'Fernando',
        edad:34
    }

    return (
       
       <div>
           <h1>{saludo2}</h1>
           <h1>{subtitulo}</h1>
          <h1>{JSON.stringify(saludo)}</h1>
          <pre>{JSON.stringify(saludo)}</pre>
          <pre>{JSON.stringify(saludo, null, 3)}</pre>

          <p>Mi priemra aplicación</p>
       </div>
    
    );
}



PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitoulo'
}

export default PrimeraApp;