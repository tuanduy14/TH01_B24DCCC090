import React, { useState } from 'react';

function Cv({ ten, onDelete }) {
  return (
    <li>
      <span>{ten}</span>{' '}
      <button onClick={onDelete}>Xóa</button>
    </li>
  );
}

export default Cv;