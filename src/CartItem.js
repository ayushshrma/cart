import React from 'react';


class CartItem extends React.Component{
  
 render(){
        const {item,price,quantity } = this.props.product;
        const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteitem} = this.props;
        return(
          <div className = "cart-item">
          
          <div className="left-block">
          <img style = {styles.image}/> 
          </div>
          <div className="right-block">
               <div style={{fontSize: 25}}>
                   {item}
                </div>
               <div style={{color: 'GrayText'}}>
                   Rs:{price}
                </div>
               <div style={{color: 'GrayText'}}>
                   quantity:{quantity}
                </div>
               <div className="cart-item-actions">
                   <img 
                   alt="increase" 
                   className="action-icons" 
                   src="https://www.flaticon.com/svg/static/icons/svg/992/992651.svg"
                   onClick = {() => {onIncreaseQuantity(product)}}
                   />
                   <img
                    alt="decrease" 
                    className="action-icons" 
                    src="https://www.flaticon.com/svg/static/icons/svg/992/992683.svg"
                    onClick={() => {onDecreaseQuantity(product)}}
                    />
                   <img 
                   alt="delete" 
                   className="action-icons" 
                   src="https://www.flaticon.com/svg/static/icons/svg/3096/3096673.svg"
                   onClick={() => onDeleteitem(product.id)}
                   />
               </div>
          </div>
    
          </div>
          
        );
    }
}

const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius:4,
        background:'Gray'
    }
}
export default CartItem;