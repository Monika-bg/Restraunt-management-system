import React from 'react';
import Cartrun from './Cartrun';
import { CartProvider } from 'react-use-cart';


function MenuPage(){
    return(
        <>
        <CartProvider>
        <Cartrun/>
       
        </CartProvider>
        </>
    )
}
export default MenuPage;