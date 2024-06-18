import {init} from '../init'

export const appReducer = (state=init,action:any)=>{
    switch(action.type){
        case 'NAME_UPDATE':
            return{
                ...state,
                name:action.payload,
            }
            case 'CATEGORY_UPDATE':
                return{
                    ...state,
                    currentCategory:action.payload,
                }
        default: return state;
    }
}