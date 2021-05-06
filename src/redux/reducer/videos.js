import *as type from '../type';
const inetialState = {
   videos: [],
   loading: false,
   error: null,
}
export default function videos(state = inetialState,action){
    if(action.type===type.GET_MOVIE_REQUSTED){
        return {
            ...state,
            loading:true,
        }
    }else if(action.type===type.GET_MOVIE_SUCCESS){
        return{
            ...state,
            loading:false,
            videos:action.videos,

        }
    }else if(action.type===type.GET_MOVIE_FAILED){
        return{
            ...state,
            loading:false,
            error:action.message,
        }
    }else if(action.type===type.REMOVE_MOVIE_DATA){
        return{}
    }
    
    else {
        return state;
            
        
    }
}