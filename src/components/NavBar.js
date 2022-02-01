import { useContext, useState } from 'react';
import Cart from '../images/icon-cart.svg';
import Logo from '../images/logo.svg'
import Menu from '../images/icon-menu.svg'
import { AppContext } from '../store/Context';
import { useMediaQuery } from 'react-responsive';
import ViewCart from './ViewCart';

function NavBar(){
    const isBigScreen = useMediaQuery({query : '(min-width: 715px)'});
    const isSmallScreen = useMediaQuery({query : '(max-width: 715px)'});
    const {state,dispatch} = useContext(AppContext);
    const [isMenuOpen, setMenuOpen] = useState(false);


    return (
    <div>
        {isBigScreen && <div className = 'navbar-big'>
            <div className = 'nav-items'>
                <div className = 'left-nav-big'>
                    <img src = {Logo} alt = '' className = 'brand-logo' />
                    <h2>Collections</h2>
                    <h2>Men</h2>
                    <h2>Women</h2>
                    <h2>About</h2>
                    <h2>Contact</h2>
                </div>
                <div className = 'right-nav-big'>
                    <img src = {Cart} alt = '' onClick={() => {dispatch({ type: 'OPEN_CART' })}}/>
                    {!state.isCartEmpty && <div className = 'cart-mini-number'>{state.orderNum}</div>}
                    <img src = {require('../images/image-avatar.png')} className = 'avatar-logo-big' alt = '' />
                </div>
            </div>
            {state.seeCart && <ViewCart />}
        </div>}
        {isSmallScreen && <div className = 'navbar-small'>
            <div className = 'nav-items'>
                <div className = 'left-nav-small'>
                    <img src = {Menu} alt = '' className = 'menu-logo' onClick = {() => setMenuOpen(!isMenuOpen)} />
                    <img src = {Logo} alt = '' className = 'brand-logo' />                
                </div>
                <div className = 'right-nav-small'>
                    <img src = {Cart} alt = '' onClick={() => {dispatch({ type: 'OPEN_CART' })}} className ='cart-logo' />
                    {!state.isCartEmpty && <div className = 'cart-mini-number-small'>{state.orderNum}</div>}
                    <img src = {require('../images/image-avatar.png')} className = 'avatar-logo-small' alt = '' />
                </div>
            </div>
            {state.seeCart && <ViewCart />}    
            {isMenuOpen && <div className = 'menu-slider' >
                    <div className = 'vertical-nav' >
                        <svg 
                            width="14" 
                            height="15" 
                            xmlns="http://www.w3.org/2000/svg"
                            onClick = {() => setMenuOpen(false)}
                            >
                            <path 
                                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" 
                                fill="#69707D" 
                                fillRule="evenodd"
                            />
                        </svg>
                        <h2>Collections</h2>
                        <h2>Men</h2>
                        <h2>Women</h2>
                        <h2>About</h2>
                        <h2>Contact</h2>
                    </div>
            </div>}
        </div>}
    </div>
    )
}

export default NavBar;