import React from 'react';

function Cart({ products, cartItems, setCartItems, cartTotal, setCartTotal }) {
  function deleteItem(i) {
    let newCart = [...cartItems];
    newCart.splice(i, 1);
    setCartItems(newCart);
  }

  function clearCart() {
    setCartItems([]);
  }

  console.log(cartItems.length);
  if (cartItems.length === 0) {
    return (
      <div className='cartContainer'>
        <div className='card'>
          <div className='card-header' id='cartHeader'>
            Your Cart
          </div>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item' id='emptyCartNotif'>
              Your cart is empty! No items to display.
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className='cartContainer'>
        <div className='card'>
          <div className='card-header' id='cartHeader'>
            Your Cart
          </div>
          <ul className='list-group list-group-flush'>
            {cartItems.map((item, i) => {
              return (
                <li className='list-group-item' key={i}>
                  <p>{cartItems[i].name}</p>
                  <p>{cartItems[i].flavor}</p>
                  <p>${cartItems[i].price}</p>
                  <button
                    className='btn btn-link'
                    id='deleteItem'
                    onClick={() => {
                      deleteItem(i);
                      setCartTotal(cartTotal - cartItems[i].price);
                    }}
                  >
                    <svg
                      className='bi bi-x-circle'
                      width='1em'
                      height='1em'
                      viewBox='0 0 16 16'
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'
                      />
                      <path
                        fillRule='evenodd'
                        d='M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z'
                      />
                      <path
                        fillRule='evenodd'
                        d='M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z'
                      />
                    </svg>
                  </button>
                </li>
              );
            })}
            <li className='list-group-item' id='cartTotal'>
              <strong>Total: ${cartTotal}</strong>
            </li>
            <div className='card-footer'>
              <button
                className='btn btn-danger'
                onClick={() => {
                  clearCart();
                  setCartTotal(0);
                }}
              >
                Clear Cart
              </button>
              <button className='btn btn-success'>Checkout</button>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Cart;
