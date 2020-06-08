import React, { useState } from 'react';

function Home({
  products,
  cartItems,
  setCartItems,
  cartTotal,
  setCartTotal,
  show,
  setShow,
  toastBody,
  setToastBody,
}) {
  const [stock, setStock] = useState([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);

  return (
    <div className='productContainer'>
      {products.map((product, i) => {
        // Map thru all the products and create a card for each of them
        return (
          <div className='card' key={products[i].sku} id={products[i].sku}>
            <h5 className='card-header'>{products[i].name}</h5>
            <img
              src={products[i].image}
              className='card-img-top'
              alt={products[i].name}
              style={{ maxWidth: '200px', margin: 'auto' }}
            />
            <div className='card-body'>
              <h5 className='card-title'>${products[i].price}</h5>
              <p className='card-text'>
                {products[i].description}
                <br />
                {products[i].heat}
                <br />
                {products[i].flavor}
              </p>
              <p className='card-text'>Stock: {stock[i]}</p>
              <button
                className='btn btn-primary'
                onClick={() => {
                  setCartItems(cartItems.concat(products[i]));
                  setCartTotal(cartTotal + products[i].price);
                  setStock(stock[i] - 1);
                  setToastBody(products[i].name);
                  setShow(true);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
