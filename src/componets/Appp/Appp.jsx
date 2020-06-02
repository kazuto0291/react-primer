import React from 'react';
import Button1 from '../Button1/Button1'

function Appp() {
  const onClickButton = (value) => {
    console.log('ApppコンポーネントonClickButtonを実行');
    console.log('value', value);
    console.log('===============================')
  };
  return (
    <div>
      <h1>コールバック</h1>
      <Button1 onClickHandler={onClickButton}>
        ボタン
      </Button1>

    </div>
  )
}



export default Appp;