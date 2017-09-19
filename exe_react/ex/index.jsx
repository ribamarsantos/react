import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'

import Field from './field'
import fieldReducer from './fieldReducer'

//reducers são funções puras
const reducers = combineReducers({
  field: fieldReducer
})


ReactDOM.render(
     <Provider store={createStore(reducers)}>
        <Field initialValue='teste' />
     </Provider>
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