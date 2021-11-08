

export const addtocart = (id)=>{
    return{
        type:"ADD_TO_CART",
        payload:id
    }
}

export const removefromcart=(id)=>{
    return{
        type:"REMOVE_FROM_CART",
        payload:id
    }
}

export const deletefromcart=(id)=>{
    return{
        type:"DELETE_FROM_CART",
        payload:id
    }
}