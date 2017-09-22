import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description:'Ler livro',
        list: [{
            _id:1,
            description: 'Iniciar planejamento outrubro',
            done: false
        },{
            _id:2,
            description: 'Estudar IELTS',
            done: false
        },{
            _id:3,
            description: 'Crédito no celular',
            done: done
        }]
    })
})

export default rootReducer