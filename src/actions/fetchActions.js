import { GET_ITEMS } from './types';

export const getItems = () => async dispatch => {
    try {

        var res = await fetch('https://jsonplaceholder.typicode.com/photos',{
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
