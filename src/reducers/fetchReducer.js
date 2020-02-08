import {GET_ITEMS} from '../actions/types';
import {GET_PRODUCTDETAILS} from '../actions/types';

const initialState = {
    items:[],
    productDetails:{}
  
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

        case GET_PRODUCTDETAILS:
            console.log("fetched PRODUCTDETAILS")

            return{
                ...state,
                productDetails: payload,
            }

        default:
            return state;
    }
}