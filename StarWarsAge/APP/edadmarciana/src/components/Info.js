import React from 'react';

const info = (props) => {

    const meses = ((props.datos.edad % 1)*12).toFixed(0);

    return(
        <div>
            <h1>Tu edad en {props.datos.planeta}: {props.datos.edad}</h1>
            <p>Meses: {props.datos.edad?meses:''}</p>
            <p>Horas de un día en {props.datos.planeta}: {props.datos.dia}</p>
            <p>Días de un año en {props.datos.planeta}: {props.datos.año}</p>
        </div>
    )
}

export default info;