
export const initialState = {
    orderNum: 0,
    cartOrder: 0,
    seeCart: false,
    seeCarousel: false,
    isCartEmpty: true,
    slideNum: 1,
    slideImage: 'image-product-1.jpg',
}

export function Reducer(state,action) {
    switch(action.type){
        case 'INCREMENT':{
            return {
                ...state,
                orderNum: state.orderNum + 1,
            }
        }
        case 'DECREMENT':{
            if (state.orderNum === 1){
                return {
                    ...state,
                    orderNum: 0,
                    isCartEmpty: true,
                };
            } else if (state.orderNum === 0) {
                return state;
            } else {
                return {
                    ...state,
                    orderNum: state.orderNum - 1,
                }
            }
        }
        case 'OPEN_CART': {
            return {
                ...state,
                seeCart: !state.seeCart,
            }
        }
        case 'OPEN_CAROUSEL': {
            return {
                ...state,
                seeCarousel: !state.seeCarousel,
            }
        }
        case 'ADD_TO_CART': {
            if (state.orderNum >= 1){
               return {
                ...state,
                isCartEmpty: false,
                cartOrder: state.cartOrder + state.orderNum,
            }  
            } else {
                return {
                ...state
                }
            }  
        }
        case 'DELETE_CART' : {
            return {
                ...state,
                orderNum: 0,
                cartOrder: 0,
                isCartEmpty: true,
            }
        }
        case 'PREVIOUS_SLIDE': {
            if (state.slideNum === 1){
                return {
                    ...state,
                    slideNum: 4
                }
            } else {
                return {
                    ...state,
                    slideNum: state.slideNum - 1,
                }
            }
        }
        case 'NEXT_SLIDE': {
            if (state.slideNum === 4) {
                return {
                    ...state,
                    slideNum: 1,
                }
            } else {
                return {
                    ...state,
                    slideNum: state.slideNum + 1,
                }
            }
        }
        case 'SET_SLIDE_IMAGE': {
            return {
                ...state,
                slideNum: action.payload,
                slideImage: `image-product-${action.payload}.jpg`,
            }
        }
        default:
            return state;    
    }
}
