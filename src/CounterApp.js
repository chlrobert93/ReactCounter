import React,{useState} from 'react'
import PropTypes from 'prop-types'


const CounterApp = ({value = 10}) => {

    const [nombre, setNombre] = useState('Goku');

    //Cuando usamos el set caounter le decimos a react que el cauter cambio
    //Por consecuencia hay que dispararla renderización
    //Solo va rederizar lo que realmente cambia

    const [counter, setCounter] = useState(value); //Retorna un arreglo con dos valores

    console.log(nombre, setNombre); 



    //handleAdd
    const hanleAdd2 = (e) =>{
        setCounter(counter +1);
        //setCounter((c) => c + 1);

    }


    const hadledAdd3 = (e) => setCounter(counter-1);

    return(
        <div>
            <h1>Counter</h1>
            <h2>{value}</h2>
            <h2>{counter}</h2>
     
            
            <button onClick={hanleAdd2}>+1</button>
             <button onClick={ () => setCounter(value)}>Reset</button>
             <button onClick={hadledAdd3}>-1</button>




        </div>
    )
}


CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;