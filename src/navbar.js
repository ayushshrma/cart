import React from 'react';



const NavBar = (props) => {
 const {cartcount} = props;
        return (
            <div style={styles.nav}>
              <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://www.flaticon.com/svg/static/icons/svg/833/833314.svg" alt="cartIcon" />
                <span style={styles.cartcount}>{cartcount}</span>
              </div>
            </div>
        );
    
}

const styles = {
  cartIcon :{
    height: 32,
    marginRight: 20
 },
 nav: {
     height: 70,
     background: '#4267b2',
     display: 'flex',
     justifyContent: 'flex-end',
     alignItems: 'center'
 },
 cartIconContainer: {
     position: 'relative'
 },
 cartcount :{
     background: 'yellow',
     borderRadius: '50',
     padding: '4px 8px',
     position: 'absolute',
     right: 0,
     top: -9
 
 }
}

export default NavBar;