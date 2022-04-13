import './App.css';
import Pano from './component/Pano';
import NavBarTest from './component/NavBarTest';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CarouselTest from './component/CarouselTest';
import Panorams from './component/Panorams';
import Iframee from './component/Iframee';
import { Button } from 'bootstrap';
import Iframee2 from './component/Iframee2';

function App() {

  console.log('app render');
  const [a, setA] = useState(true);

  useEffect(() => {
    sessionStorage.setItem("aaa", "./skyview01.jpg");
  }
    , [])


  const imageList = [
    { key: 0, image: './collage.jpg', linkTo: 2, linkPositon: (-3429.01, 1205.85, -3421.88), contents: "대학교" },
    { key: 1, image: './skyview01.jpg', linkTo: 1, linkPositon: (-3429.01, 1205.85, -3421.88), contents: "연못마을" },
    { key: 2, image: './img03.jpg', linkTo: 1, linkPositon: (-3429.01, 1205.85, -3421.88), contents: "마을" }
  ];

  // 컴포넌트에서 값 가져오기 위한 함수
  const getKeyNum = (num) => {
    
    var imageFileName = imageList[num].image;

    sessionStorage.setItem("aaa", imageFileName);
    (jej).location.reload();
  }
  // let musicAudio = new Audio('./bensound-anewbeginning.mp3');
  // let playM = (e) => {
  //   musicAudio.play();
  //   console.log("ok");
  // }
  // const [a, setA] = useState("./sub.html");

  const rr = () => {
    return <Iframee></Iframee>
  }

  return (
    <div className="App">
      {/* <Panorams keyNum={number} /> */}
      {/* {!!a ? <Iframee></Iframee> : <Iframee2></Iframee2>} */}
      {/* <Iframee></Iframee> */}
      {rr()}

      <CarouselTest imageList={imageList} getKeyNum={getKeyNum} />

      {/* <div style={{ position: 'absolute', right: '10' }}>
        <audio id='player'>
          <source src='./bensound-anewbeginning.mp3' type='audio/mp3' />
        </audio>
        <div className='audioclass'>
        </div>
      </div> */}
      {/* <NavBarTest imageList={imageList}></NavBarTest> */}
    </div>
  );
}

export default App;
