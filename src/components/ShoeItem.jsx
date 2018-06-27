import React from 'react';
import PropTypes from 'prop-types';

function ShoeItem(props){
  return(
    <div>
      <img src={props.image} />
      <h4>{props.title}</h4>
      <p>{props.color}</p>
      <p>{props.price}</p>
    </div>
  );
}
ShoeItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}

export default ShoeItem;
