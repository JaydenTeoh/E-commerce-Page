import {useContext} from 'react';
import { AppContext } from '../store/Context';
import Delete from '../images/icon-delete.svg'
import { useMediaQuery } from 'react-responsive';
function ViewCart(){

    const {state, dispatch} = useContext(AppContext);
    const isBigScreen = useMediaQuery({query : '(min-width: 715px)'});
    const isSmallScreen = useMediaQuery({query : '(max-width: 715px)'});

    return (
    <div>
        {isBigScreen && <div className = 'see-cart'>
            <h2>Cart</h2>
            <hr />
            {state.isCartEmpty && <div className = 'empty-cart'>
                    Your cart is empty.
                </div>}
            {!state.isCartEmpty && <div className = 'order-container'>
                <div className = 'orders'>
                 <img src = {require('../images/image-product-1-thumbnail.jpg')} alt = '' className = 'cartIMG' />
                 <div className = 'order-quantity'>
                    <div className = 'model'>Fall Limited Edition Sneakers</div>
                    <div className = 'orderNum'>$125 x {state.cartOrder} <span><strong>${125 * state.cartOrder}.00</strong></span> </div> 
                 </div>
                
                <img src = {Delete} alt = '' className = 'trashIMG' onClick = {() => dispatch({type: 'DELETE_CART'})} />
                </div>
                <button className = 'checkout'>Checkout</button>
            </div>}
        </div>}
        
        {isSmallScreen && <div className = 'small-cart'>
            <div className = 'see-cart-small'>
            <h2>Cart</h2>
            <hr />
            {state.isCartEmpty && <div className = 'empty-cart'>
                    Your cart is empty.
                </div>}
            {!state.isCartEmpty && <div className = 'order-container-small'>
                <div className = 'orders'>
                 <img src = {require('../images/image-product-1-thumbnail.jpg')} alt = '' className = 'cartIMG' />
                 <div className = 'order-quantity'>
                    <div className = 'model'>Fall Limited Edition Sneakers</div>
                    <div className = 'orderNum'>$125 x {state.cartOrder} <span><strong>${125 * state.cartOrder}.00</strong></span> </div> 
                 </div>
                
                <img src = {Delete} alt = '' className = 'trashIMG' onClick = {() => dispatch({type: 'DELETE_CART'})} />
                </div>
                <button className = 'checkout'>Checkout</button>
            </div>}
        </div>
        </div>}
    </div>
        
    )
}

export default ViewCart;