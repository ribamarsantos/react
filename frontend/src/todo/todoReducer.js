const INITIAL_STATE =  {
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
        done: true
    }]
}

export default (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
           return { ...state, description: action.payload}
        default:
           return state
    }
}
