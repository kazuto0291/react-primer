import React from 'react';

function List() {
  const comments = [
    { id: 1, text: 'おはよう'},
    { id: 2, text: 'こんにちは'},
    { id: 3, text: 'こんばんわ'}
  ];

  const commentItems = comments.map((comment, index) => {
  return <li key={comment.id}>{comment.text}</li>
  });

  return (
    <div>
      <h1>リスト表示</h1>
      <ul>{commentItems}</ul>
    </div>
  )
}

export default List;