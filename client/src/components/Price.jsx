import React from 'react';

const Price = (props) => {
  return (
    <div>
      {props.price.map((price, index) => ( 
          <div key={index}>
            Price: $<span style={{color: "red"}}>{price.price}</span> & {<strong>Free Shipping</strong>}. 
            <a href="#" title="FREE Next Day Pickup" data-toggle="popover" data-placement="bottom" 
            data-content="Free Next Day Pickup on qualifying orders. See shipping options in checkout."> Details</a> & 
            <a href="#" title="Return this item for free" data-toggle="popover" data-placement="bottom" 
            data-content="You can return this item for any reason and get a full refund: no shipping charges. 
            The item must be returned in new and unused condition"> Free Returns</a>
          </div>
        ))}
    </div>
  )
}



export default Price;