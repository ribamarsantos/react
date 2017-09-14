
/*import Pessoa from './pessoa'

const pessoa = new Pessoa('Ribamar');
console.log(pessoa.toString())
*/
const produto =  {
    nome: ' Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto){
    // operador spread ou rest utilizado no react para clonar um objecto 
    return { ... objeto}
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta Bic Azul da boa'
console.log(produto, novoProduto)

