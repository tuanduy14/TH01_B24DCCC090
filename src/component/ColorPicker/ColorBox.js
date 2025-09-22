import React, { useState } from 'react';
function ColorBox({ color }) {
  const boxStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: color,
    marginTop: '20px',
    border: '2px solid black',
  };

  return (
    <div>
      <div style={boxStyle}></div>
    </div>
  );
}
export default ColorBox