import React from 'react'
import First from './components/basics/First'
import WithParams from './components/basics/WithParams'
import Fragments from './components/basics/Fragments'
import Aleatory from './components/basics/Aleatory'
import Card from './components/layout/Card'
import './index.css'


export default () => (
    <div id ="app">
        <h1>Fundamentos React</h1>
        <Card title="#04 - Aleatory" >
            <Aleatory min={1} max={120}/>
        </Card>
        <Card title="#03 - Fragments" >
            <Fragments />
        </Card>  
        <Card title="#02 - With Params" >
            <WithParams 
                name="Button First" 
                class="yellow"
                alert="Button First" />
        
            <WithParams 
                name="Button Second" 
                class="aqua"
                alert="Second First" />
        </Card>
        <Card title="#01 - First component">
            <First />
        </Card>                        
    </div>
)