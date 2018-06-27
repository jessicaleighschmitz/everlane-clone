import React from 'react';
import banner from '../assets/img/banner.png';


const shoeData = [
  {
    image: '../assets/img/redHeel.webp',
    title: 'The Day Heel',
    color: 'Bright Red',
    price: '$145'
  },
    image: '../assets/img/blueHeel.webp',
    title: 'The Night Heel',
    color: 'Bright Red',
    price: '$200'
  },
    image: '../assets/img/redHeel.webp',
    title: 'The Day Heel',
    color: 'Bright Red',
    price: '$145'
  },
  {
    image: '../assets/img/blueHeel.webp',
    title: 'The Day Heel',
    color: 'Bright Red',
    price: '$145'
  },
    image: '../assets/img/redHeel.webp',
    title: 'The Night Heel',
    color: 'Bright Red',
    price: '$200'
  },
    image: '../assets/img/blueHeel.webp',
    title: 'Another Heel',
    color: 'Bright Red',
    price: '$145'
  },
  {
    image: '../assets/img/redHeel.webp',
    title: 'The Day Heel',
    color: 'Bright Red',
    price: '$145'
  },
    image: '../assets/img/blueHeel.webp',
    title: 'Heels Galour',
    color: 'Bright Red',
    price: '$200'
  },
    image: '../assets/img/redHeel.webp',
    title: 'Shoes',
    color: 'Bright Red',
    price: '$145'
  },
]

function ShoeList(){
  return(
    <div>
      <img src={banner} />
      <div className="ShoeData">
        {shoeItem.map((shoe, index) =>
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
