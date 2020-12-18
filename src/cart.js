import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
const {products,IncreaseQuantity,DecreaseQuantity,Deleteitem,totalprice} = props;
        return(
           <div className="cart">
            {
            products.map((product) => {
              return (
                <CartItem 
                product={product}
                key={product.id}
                onIncreaseQuantity={IncreaseQuantity}
                onDecreaseQuantity={DecreaseQuantity}
                onDeleteitem = {Deleteitem}
                />
              )
              })
            }
            <div style = {{padding:10,fontSize:20}}>TotalPrice:{totalprice}</div>
            </div>

        );
    
}

export default Cart;