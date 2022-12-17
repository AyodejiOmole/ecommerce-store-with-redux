import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const cart = useSelector(state => state.cart.cartItems);
  console.log(cart);
  return (
    <>
      <div className='ui 10p fixed menu' style={{marginBottom: "20px"}}>
          <div className='ui container center'>
              <h2 className="">Daniel Shop</h2>

            <div className='right item'>
              <button className="ui black secondary basic button">
                  <i className="shop icon"></i>
                  Cart {`(${cart.length})`} 
              </button>
            </div>
          </div>
      </div>
    </>
  )
}

export default Header;