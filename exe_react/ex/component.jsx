// criar em cima de funcao ou em cima de uma classe( no final é função)
import React from 'react'

//function() mudou para arrow function " () => "
// expressao e nao função entre ()
// criando parametros, propriedades props

//export default props => ( 
//    <h1> { props.value }</h1>
//)


// dois components em um arquivo
export default  props => (
    <h1>Primeiro componente</h1>
)

// pode colocar export const ... ou export default 
const Segundo = props => <h1>2º componente</h1>

export { Segundo }
