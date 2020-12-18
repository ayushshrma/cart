import React from 'react';
import NavBar from './navbar';
import Cart from './cart';
import firebase from 'firebase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
       products:[],
       loading: true
      }
}
componentDidMount () {
  /*firebase
    .firestore()
    .collection('products')
    .get()
    .then((snapshot) => {
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();

        data['id'] = doc.id;
        return data;

      })
      this.setState({
        products,
        loading: false
      })
    })*/
    firebase
    .firestore()
    .collection('products')
    .onSnapshot((snapshot) => {
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();

        data['id'] = doc.id;
        return data;

      })
      this.setState({
        products,
        loading: false
      })
    })








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
getCartCount = () => {
  const {products} = this.state;
  let count = 0;
  products.forEach((product) => {
    count+= product.quantity;
  })
  return count;
}
getTotalPrice =() => {
  const{products} = this.state;
  let total = 0;
  products.forEach((product) => {
     total += product.price*product.quantity;
  })
  return total;
}

render(){
  const {products,loading} = this.state;
  return (
    <div>
      <NavBar
       cartcount = {this.getCartCount()} />
      <Cart
      products={products}
      IncreaseQuantity={this.handleIncreaseQuantity}
      DecreaseQuantity={this.handleDecreaseQuantity}
      Deleteitem = {this.handleDeleteitem}
      totalprice = {this.getTotalPrice()}
      />
      {loading&& <h1>loading.....</h1>}
    </div>
  );
  }
}

export default App;
