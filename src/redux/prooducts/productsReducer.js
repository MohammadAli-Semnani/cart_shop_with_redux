const initialState = {
    isLoading: false,
    products: [],
    eroor: ""
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_PRODUCTS_REQUEST":
            return {
                ...state, 
                isLoading: true,
            }
        case "FETCH_PRODUCTS_SUCCESS":
            return {
                isLoading: false,
                products: action.payload
            }
        case "FETCH_PRODUCTS_FAILD":
            return {
                ...state,
                error: action.payload
            }
        default : return state
    }
}

export default productReducer;