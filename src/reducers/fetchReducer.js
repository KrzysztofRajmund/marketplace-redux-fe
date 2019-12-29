import {GET_ITEMS} from '../actions/types';

const initialState = {
    items:[]
  
}

export default function (state = initialState,action) {
    const {type,payload} = action;

    switch (type) {

        case GET_ITEMS:
            console.log("fetchReducer-ITEMS")

            return{
                ...state,
                items: payload,
            }
        default:
            return state;
    }
}