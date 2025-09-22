import React, { useState } from 'react';
function Post({ text }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div style={{ marginBottom: 20, border: '1px solid #ccc', padding: 10 }}>
      <p>{text}</p>
      <button onClick={() => setLikes(likes + 1)}>👍 {likes}</button>
      <button onClick={() => setDislikes(dislikes + 1)}>👎 {dislikes}</button>
    </div>
  );
}
export default Post;