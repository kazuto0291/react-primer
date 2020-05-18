import React from 'react';
import Button from './componets/Button/Button';
import Timer from './componets/Timer/Timer';
import Counter from './componets/Counter/Counter';


function App () {
  return (
    <div>
      <h1 className="title">
        Hello, World
      </h1>
      <Button>ボタン１</Button>
      <h1>タイマー</h1>
     
      <Counter />
    </div>
  )
}


export default App;
