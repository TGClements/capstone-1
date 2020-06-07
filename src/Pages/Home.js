import React from 'react';

function Home() {
  return (
    <div className='productContainer'>
      <div className='card'>
        <h5 className='card-header'>Jalapeno Lime Salt</h5>
        <img
          src='/images/1-webimg-watermark.png'
          className='card-img-top'
          alt='...'
          style={{ maxWidth: '200px', margin: 'auto' }}
        />
        <div className='card-body'>
          <h5 className='card-title'>$7</h5>
          <p className='card-text'>
            Made with organic and non-GMO Jalapeno Peppers. <br /> Median Heat
            of Pepper: 5,250 Scoville.
            <br />
            Flavor of Pepper: Bright, Grassy, Bitter
          </p>
          <p className='card-text'>Stock: 10</p>
          <button className='btn btn-primary'>Add to Cart</button>
        </div>
      </div>

      <div className='card'>
        <h5 className='card-header'>Cayenne Salt</h5>
        <img
          src='/images/2-webimg-watermark.png'
          className='card-img-top'
          alt='...'
          style={{ maxWidth: '200px', margin: 'auto' }}
        />
        <div className='card-body'>
          <h5 className='card-title'>$7</h5>
          <p className='card-text'>
            Made with organic and non-GMO Cayenne Peppers.
            <br />
            Median Heat of Pepper: 40,000 Scoville.
            <br />
            Flavor of Pepper: Neutral (general red pepper flavor)
          </p>
          <p className='card-text'>Stock: 10</p>
          <button className='btn btn-primary'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
