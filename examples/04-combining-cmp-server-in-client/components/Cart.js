'use client';

import { useState } from 'react';

import CartItem from './CartItem';
import DyncamicCartItem from './DynamicCartItem';

export default function Cart() {
  const [isVisible, setIsVisible] = useState(false);

  function handleCartVisibility() {
    setIsVisible((prevState) => !prevState);
  }

  return (
    <div id="cart">
      <button onClick={handleCartVisibility}>
        {isVisible ? 'Hide Cart' : 'Show Cart'}
      </button>
      {isVisible && (
        <ul>
          {/* <CartItem title={'Book'} quantity={1} />
          <CartItem title={'Pen'} quantity={2} />
          <CartItem title={'Pencil'} quantity={5} /> */}
          <DyncamicCartItem id={1} />
          <DyncamicCartItem id={2} />
          <DyncamicCartItem id={3} />
        </ul>
      )}
    </div>
  );
}
