import React from 'react';
import Button from './componets/Button/Button'
import Timer from './componets/Timer/Timer'


function App () {
  return (
    <div>
      <h1 className="title">
        Hello, World
      </h1>
      <Button>ボタン１</Button>
      <h1>タイマー</h1>
      <Timer seconds={30}/>
      <Timer seconds={40}/>
      <Timer seconds={88}/>
    </div>
  )
}


export default App;
