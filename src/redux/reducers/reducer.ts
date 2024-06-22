import {init} from '../init'
// reducer function for collecting data from client and update to store
export const appReducer = (state=init,action:any)=>{
    switch(action.type){
        case 'NEWS_UPDATE':
            return{
                ...state,
                news:[...action.payload],
            }
            case 'CATEGORY_UPDATE':
                return{
                    ...state,
                    currentCategory:action.payload,
                }
            case 'FILTERED_DATA_UPDATE':
                return{
                    ...state,
                    fdata: [...action.payload]
                }
        default: return state;
    }
}