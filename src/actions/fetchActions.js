import { GET_ITEMS } from './types';
import { GET_PRODUCTDETAILS } from './types';


//get all products
export const getItems = () => async dispatch => {
    try {

        var res = await fetch('http://localhost:3000/items/',{
            method: "GET",
            // headers: {
            //     "Authorization": "Bearer " +    
            //     localStorage.token
            // },
        })

        if (res.ok) {
            var items = await res.json();
            console.log("fetchActions - ITEMS", items)

            dispatch({
                type: GET_ITEMS,
                payload: items
            })
        }
        
    } catch (error) {
        console.log(error)
        
    }

   

}


// get one product with specific ID
export const getProductDetails = (id) => async dispatch => {
    try {

        var res = await fetch('http://localhost:3000/items/' + id,{
            method: "GET",
            // headers: {
            //     "Authorization": "Bearer " +    
            //     localStorage.token
            // },
        })

        if (res.ok) {
            var productDetails = await res.json();

            dispatch({
                type: GET_PRODUCTDETAILS,
                payload: productDetails
            })
        }
        
    } catch (error) {
        console.log(error, "error to fetch specific product")
        
    }

   

}
