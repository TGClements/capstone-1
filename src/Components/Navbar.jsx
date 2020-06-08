import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartItems }) {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      // If nothing is entered, display the alert for 3 seconds
    } else {
      // Otherwise add item
      setText('');
      document.getElementById('inputField').focus();
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <Fragment>
      <nav
        className='navbar fixed-top navbar-dark bg-dark'
        style={{ zIndex: 1 }}
      >
        <span className='navbar-brand mb-0 h1' id='navHeader'>
          <Link to='/' id='homeLink'>
            Badger's Pepper Products
          </Link>
        </span>

        <form onSubmit={onSubmit} className='form-inline mx-auto my-lg-0'>
          <input
            className='form-control mr-sm-2'
            type='search'
            placeholder='Search Products'
            aria-label='Search Products'
            id='inputField'
            value={text}
            onChange={onChange}
          />
          <button className='btn btn-outline-light my-2 my-sm-0' type='submit'>
            Search
          </button>
        </form>
        <Link to='/cart' id='cartLink'>
          <button className='btn btn-outline-info my-2 my-sm-0'>
            Shopping Cart{' '}
            <span className='badge badge-dark'>({cartItems.length})</span>
          </button>
        </Link>
      </nav>
    </Fragment>
  );
}

export default Navbar;
