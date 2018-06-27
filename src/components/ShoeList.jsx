import React from 'react';
import banner from '../assets/img/banner.png';
import ShoeItem from './ShoeItem';
import redHeel from '../assets/img/redHeel.webp';
import blueHeel from '../assets/img/blueHeel.webp';

const shoeData = [
  {
    image: redHeel,
    title: 'The Day Heel',
    color: 'Bright Red',
    price: '$145'
  },
  {
    image: blueHeel,
    title: 'The Night Heel',
    color: 'Bright Red',
    price: '$200'
  },
  {
    image: redHeel,
    title: 'The Day Heel',
    color: 'Bright Red',
    price: '$145'
  },
  {
    image: blueHeel,
    title: 'The Day Heel',
    color: 'Bright Red',
    price: '$145'
  },
  {
    image: redHeel,
    title: 'The Night Heel',
    color: 'Bright Red',
    price: '$200'
  },
  {
    image: blueHeel,
    title: 'Another Heel',
    color: 'Bright Red',
    price: '$145'
  },
  {
    image: redHeel,
    title: 'The Day Heel',
    color: 'Bright Red',
    price: '$145'
  },
  {
    image: blueHeel,
    title: 'Heels Galour',
    color: 'Bright Red',
    price: '$200'
  }
];

function ShoeList(){
  return(
    <div>
      <img src={banner} />
      <div className="ShoeData">
        {shoeData.map((shoe, index) =>
          <ShoeItem
            image={shoe.image}
            title={shoe.title}
            color={shoe.color}
            price={shoe.price}
            key={index}/>
        )}
      </div>
    </div>
  );
}

export default ShoeList;
