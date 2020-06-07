import React from 'react';

function Home() {
  return (
    <div className='productContainer'>
      <div className='card'>
        <img
          src='/images/1-webimg-watermark.png'
          className='card-img-top'
          alt='...'
        />
        <div className='card-body'>
          <h5 className='card-title'>Card Title</h5>
          <p className='card-text'>This is some placeholder.</p>
          <button className='btn btn-primary'>Add to Cart</button>
        </div>
      </div>
      <div>This is even more placeholder.</div>
    </div>
  );
}

export default Home;
