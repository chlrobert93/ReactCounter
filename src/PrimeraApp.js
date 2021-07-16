import React from 'react';
//import React, {Fragment} from 'react';
//FC

const primeraApp = () => {

    const holaMundo = "Hola Mundo"

    const saludo = {
        nombre: 'Fernando',
        edad:34
    }

    return (
       
       <div>
           <h1>{holaMundo}</h1>
          <h1>{JSON.stringify(saludo)}</h1>
          <pre>{JSON.stringify(saludo)}</pre>
          <pre>{JSON.stringify(saludo, null, 3)}</pre>

          <p>Mi priemra aplicación</p>
       </div>
    
    );
}

export default primeraApp;