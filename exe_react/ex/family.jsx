import React from 'react'
import { childrenWithProps} from '../utils/reactUtils.js'
// de onde vai clonar e  o 2 o que vai  clonar
// transforma cada um dos elementos no map
// usando expressao dentro do jsx chamando uma funcao {  }
export default props => (
    <div>
        <h1> Família</h1>                
        { childrenWithProps(props.children, props)  }
    </div>
)