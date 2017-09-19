const INITIAL_STATE = { value: 'Opa'}

//3
export default function(state = INITIAL_STATE, action){
     switch(action.type){
         case 'VALUE_CHANGED':
           return { value: action.payload}//4
        default:
           return state
     }
}