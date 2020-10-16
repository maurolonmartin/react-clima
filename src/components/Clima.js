import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {

    const {name, main} = resultado;
    
    if(!name) return null;

    const {temp, temp_max, temp_min } = main;

    // grados kelvin para conversion de temperatura
    const kelvin = 273.15;


    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperatura">
                    { parseFloat(temp - kelvin, 10).toFixed(2) } <span>&#x2103;</span>
                </p>
                <p >Temperatura Máxima: 
                    { parseFloat(temp_max - kelvin, 10).toFixed(2) } <span>&#x2103;</span>
                </p>
                <p>Temperatura Minima: 
                    { parseFloat(temp_min - kelvin, 10).toFixed(2) } <span>&#x2103;</span>
                </p>
            </div>
        </div>
     );
}
 
Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}
export default Clima;