import {ADD_PRODUCT_TO_BASKET} from './types';


//add product to basket
export const addProductToBasket = (basketProducts, product) => async dispatch => {
    

    console.log("basketReducerProducts",basketProducts)
            dispatch({
                type: ADD_PRODUCT_TO_BASKET,
                payload: basketProducts
            })
            

}


