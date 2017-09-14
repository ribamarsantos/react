import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'

ReactDOM.render(
    <ClassComponent value='Componente classe' />
    , document.getElementById('app')
)

//import Primeiro,  {Segundo} from './component'
//import SantosFamily from './santosFamily'
//import Family from './family'
//import Member from './member'

// deve colocar dentro de uma tag pai

//ReactDOM.render(
//     <Family lastName='Santos'>
//         <Member name='Ribamar' />
//         <Member name='Amanda' />
 //     </Family>
  //   ,document.getElementById('app'))