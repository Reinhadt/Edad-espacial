import React from 'react';

const Form = (props) => {

    const planetas = props.planetas.map((planeta, i) => {
        return(
            <option key={planeta.name} value={i+1}>{planeta.name}</option>
        )
    })

    return(
        <div>
            <input onChange={props.handleChange} className="input" value={props.valor} required />
            <select onChange={props.handleSelectChange} name="planetas" id="planetas">
                {planetas}
            </select>
            <button onClick={props.handleClick} >Enviar</button>
        </div>
    )

}

export default Form;