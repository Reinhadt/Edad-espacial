import React from 'react';

const Form = (props) => {

    const planetas = props.planetas.map((planeta, i) => {

        let id = planeta.url.split('/')[5];

        return(
            <option key={planeta.name} value={id}>{planeta.name}</option>
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
