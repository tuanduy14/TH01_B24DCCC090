import React, { useState } from 'react';
function Product({ product, onAdd }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <span>
        {product.name} - {product.price}₫{" "}
      </span>
      <button onClick={() => onAdd(product)}>Thêm vào giỏ</button>
    </div>
  );
}
export default Product;