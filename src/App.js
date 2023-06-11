import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  let post = '강남 우동 asdads맛집';
  let mainLogo = 'Blog';
  let [글제목, 제목수정] = useState(['남자 여름 옷 추천', '배고플 땐 햄버거', '하지만 난 우동이 좋아..']);
  let [날짜, 바뀔날짜] = useState(['3월 25일 발행', '3월 23일 발행', '3월 29일 발행']);
  let [좋아요, up] = useState(0);



  return (
    <div className="App">
      <div className="black-nav">
        <h4>{ mainLogo }</h4>
      </div>
      <div className='list-container'>
        <div className='list'>
          <h4>{ 글제목[0] }
            <span className='btn' onClick={ ()=>{ up(좋아요+1)} }>👍</span>
            <span className='btn' onClick={ ()=>{ up(좋아요-1)} }>👎</span>
            <span>{ 좋아요 }</span>
            <span className='btn' onClick={ ()=>{
              let copyUpdate = [...글제목]
              copyUpdate[0] = '여자 옷 추천'
              제목수정(글제목 = copyUpdate);
            } }>수정하기</span>
          </h4>
          <p>{ 날짜[0] }</p>
        </div>
        <div className='list'>
          <h4>{ 글제목[1] }</h4>
          <p>{ 날짜[1] }</p>
        </div>
        <div className='list'>
          <h4>{ 글제목[2] }</h4>
          <p>{ 날짜[2] }</p>
        </div>
      </div>        
    
    
    </div>
  );
}

export default App;
