import React from 'react'

export default props => {
    return (
        <>
            <p>Valor Minimo: { props.min }</p>
            <p>Valor Máximo: { props.max }</p>
            <p><strong>Resultado:  { Math.floor( Math.random() * props.max  + props.min ) } </strong></p>
        </>
    )
}