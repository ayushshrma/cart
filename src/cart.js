import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
  constructor() {
    super();
    this.state = {
       products:[
      {
        item: "Mobile Phone",
        price: 15000,
        quantity: 1,
        img: "", 
        id:1
      },
        {
          item: "Laptop",
          price: 60000,
          quantity: 1,
          img: "",
          id:2
        },
          
          {
            item: "Watch",
            price: 999,
            quantity: 1,
            img: "" ,
            id:3
          }
          ]
      }
}
handleIncreaseQuantity = (product)=> {
      const{products} = this.state;
      const index = products.indexOf(product);
      products[index].quantity += 1;
      this.setState({
        products
      });
}

handleDecreaseQuantity = (product) => {
  const{products} = this.state;
  const index = products.indexOf(product);

  if(products.[index].quantity > 1){
  products[index].quantity -= 1;  
  this.setState({
   products
 });
}
}

handleDeleteitem = (id) => {
  const {products} = this.state;
  const items = products.filter((item) => item.id !== id);
    console.log('this is new products' , items);
  this.setState({
    products: items
  });
}
render(){
  const {products} = this.state;
        return(
           <div className="cart">
            {
            products.map((product) => {
              return (
                <CartItem 
                product={product}
                key={product.id}
                onIncreaseQuantity={this.handleIncreaseQuantity}
                onDecreaseQuantity={this.handleDecreaseQuantity}
                onDeleteitem = {this.handleDeleteitem}
                />
              )
              })
            }
            </div>

        );
    }
}

export default Cart;