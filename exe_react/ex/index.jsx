import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro,  {Segundo} from './component'

// deve colocar dentro de uma tag pai

ReactDOM.render(
     <div>
         <Primeiro /> 
         <Segundo />
     </div>, 
     document.getElementById('app'))