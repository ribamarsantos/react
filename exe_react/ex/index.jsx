import React from 'react'
import ReactDOM from 'react-dom'
//import Primeiro,  {Segundo} from './component'
//import SantosFamily from './santosFamily'
import Family from './family'
import Member from './member'

// deve colocar dentro de uma tag pai

ReactDOM.render(
     <Family>
         <Member name='Ribamar' lastName='Santos' />
      </Family>
     ,document.getElementById('app'))