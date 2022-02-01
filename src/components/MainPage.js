import { useContext } from 'react';
import { AppContext } from '../store/Context';
import { useMediaQuery } from 'react-responsive';
import Carousel from './Carousel';

function MainPage(){

    const {state,dispatch} = useContext(AppContext);
    const isBigScreen = useMediaQuery({query : '(min-width: 715px)'});
    const isSmallScreen = useMediaQuery({query : '(max-width: 715px)'});


    return (
    <div className = 'main-page'>
        {isBigScreen && <div className = 'product-container-big'>
            <div className = 'container-left-big'>
                <Carousel />
                </div>
                <div className = 'container-right-big'>
                <h3>SNEAKER COMPANY</h3>
                <h1>Fall Limited Edition Sneakers</h1>
                <div>
                These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.
                </div>
                <h2>$125.00<span className = 'discount'>50%</span></h2>
            <s className = 'originalPrice'>$250.00</s>
                <div className = 'buttons'>
                    <div className = 'changeNum'>
                        <div onClick = {() => dispatch({type: 'DECREMENT'})}>-</div>
                        <h4>{state.orderNum}</h4>
                        <div onClick = {() => dispatch({type: 'INCREMENT'})}>+</div>
                    </div>
                    <div className = 'addCart' onClick = {() => dispatch({type: 'ADD_TO_CART'})}>
                        <svg 
                            width="22" 
                            height="30" 
                            xmlns="http://www.w3.org/2000/svg"
                            className = 'cart-icon'                             
                            >
                            <path 
                                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" 
                                fill="white" 
                                fillRule="nonzero" 
                                />
                        </svg>
                        Add To Cart
                    </div>
                </div>
            </div>
        </div>}
        
        {isSmallScreen && <div className = 'product-container-small'>
            <div className = 'container-left-small'>
                <Carousel />
                </div>
                <div className = 'container-right-small'>
                <h3>SNEAKER COMPANY</h3>
                <h1>Fall Limited Edition Sneakers</h1>
                <h4>
                These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.
                </h4>
                <div className = 'priceTag-small'>
                    <h2>$125.00<span className = 'discount'>50%</span></h2>
                    <s className = 'originalPrice'>$250.00</s>
                </div>
                <div className = 'buttons-small'>
                    <div className = 'changeNum-small'>
                        <div onClick = {() => dispatch({type: 'DECREMENT'})}>-</div>
                        <h4>{state.orderNum}</h4>
                        <div onClick = {() => dispatch({type: 'INCREMENT'})}>+</div>
                    </div>
                    <div className = 'addCart-small' onClick = {() => dispatch({type: 'ADD_TO_CART'})}>
                        <svg 
                            width="22" 
                            height="30" 
                            xmlns="http://www.w3.org/2000/svg"
                            className = 'cart-icon'                             
                            >
                            <path 
                                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" 
                                fill="white" 
                                fillRule="nonzero" 
                                />
                        </svg>
                        Add To Cart
                    </div>
                </div>
            </div>
        </div>}
    </div>
    )
}

export default MainPage;