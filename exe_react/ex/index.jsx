import React from 'react'
import ReactDOM from 'react-dom'

import Field from './field.js'



ReactDOM.render(
     <Field initialValue='teste' />
    ,document.getElementById('app')
)

//import ClassComponent from './classComponent'




//ReactDOM.render(
     //<ClassComponent label='Contado' initialValue={10} />
  //  ,document.getElementById('app')
//)

//ReactDOM.render(
 //   <ClassComponent value='Componente classe' />
 //   , document.getElementById('app')
//)

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