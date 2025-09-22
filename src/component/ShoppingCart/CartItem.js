import React, { useState } from 'react';
function CartItem({ item }) {
  return (
    <li>
      {item.name} - {item.price}₫
    </li>
  );
}
export default CartItem;