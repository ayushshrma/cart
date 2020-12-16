import React from 'react';


class CartItem extends React.Component{
    constructor() {
        super();
        this.state = {
            item: "Mobile Phone",
            price: 999,
            quantity: 1,
            img: ""
        }
    }
    increaseQuantity = () => {
        console.log('this:' , this.state);
        this.setState({
            quantity: this.state.quantity + 1,
            price: this.state.price + 999
        });
    }

    decreaseQuantity = () => {
        if(this.state.quantity > 1 ){
        this.setState((prevState) => {
            return {
                quantity: prevState.quantity - 1,
                price: prevState.price - 999
            }
        });
    }
    }

    
    render(){
        const {item,price,quantity} = this.state;
        return(
          <div className = "cart-item">
          
          <div className="left-block">
          <img style = {styles.image}/> 
          </div>
          <div className="right-block">
               <div style={{fontSize: 25}}>{item}</div>
               <div style={{color: 'GrayText'}}>Rs:{price}</div>
               <div style={{color: 'GrayText'}}>quantity:{quantity}</div>
               <div className="cart-item-actions">
                   <img 
                   alt="increase" 
                   className="action-icons" 
                   src="https://www.flaticon.com/svg/static/icons/svg/992/992651.svg"
                   onClick = {this.increaseQuantity}
                   />
                   <img
                    alt="decrease" 
                    className="action-icons" 
                    src="https://www.flaticon.com/svg/static/icons/svg/992/992683.svg"
                    onClick={this.decreaseQuantity}
                    />
                   <img 
                   alt="delete" 
                   className="action-icons" 
                   src="https://www.flaticon.com/svg/static/icons/svg/3096/3096673.svg"
                   onClick={this.deleteItem}
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