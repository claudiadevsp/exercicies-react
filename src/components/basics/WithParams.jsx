import React from 'react'
import '../../../src/index.css'

export default props => (    
        <button onClick={() => alert(props.alert)} className={props.class}>{ props.name }</button>
)   
