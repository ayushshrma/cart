import React from 'react';


class CartItem extends React.Component{
    render(){
        return(
          <div className = "cart-item">
          
          <div className="left-block">
          <img style = {styles.image}/> 
          </div>
          <div className="right-block">
               <div style={{fontSize: 25}}>Phone</div>
               <div style={{color: 'GrayText'}}>Rs999</div>
               <div style={{color: 'GrayText'}}>quantity:1</div>
               <div className="cart-item-actions">
                   <img alt="increase" className="action-icons" src="https://www.flaticon.com/svg/static/icons/svg/992/992651.svg"/>
                   <img alt="decrease" className="action-icons" src="https://www.flaticon.com/svg/static/icons/svg/992/992683.svg"/>
                   <img alt="delete" className="action-icons" src="https://www.flaticon.com/svg/static/icons/svg/3096/3096673.svg"/>
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