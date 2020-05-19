import React from 'react';
import Button from './componets/Button/Button';
// import Timer from './componets/Timer/Timer';
import Counter from './componets/Counter/Counter';
import Loginout from './componets/Loginout/Loginout';


function App () {
  return (
    <div>
      <h1 className="title">
        Hello, World
      </h1>
      <Button>ボタン１</Button>
      <h1>カウンター</h1>
      <Counter />
      <Loginout />
    </div>
  )
}


export default App;
