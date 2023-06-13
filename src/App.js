import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  let post = '강남 우동 asdads맛집';
  let mainLogo = 'Blog';
  let [글제목, 제목수정] = useState(['남자 여름 옷 추천', '배고플 땐 햄버거', '하지만 난 우동이 좋아..']);
  let [날짜, 바뀔날짜] = useState(['3월 25일', '3월 23일', '3월 29일']);
  let [like, setLike] = useState(0);
  let [modal, setModal] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{ mainLogo }</h4>
      </div>
      <div className='list-container'>
        <div className='list btn'>
          <h4 onClick={()=>{setModal(modal+1)}}>{글제목[0]}</h4>
          <p>{날짜[0]}</p>
          <span className='btn' onClick={()=>{setLike(like + 1)}}>UP</span>
          <span className='btn' onClick={()=>{setLike(like - 1)}}>DOWN</span>
          <span>{like}</span>
        </div>
      </div>
      {
        modal%2 == 1 ? <Modal></Modal> : null
      } 
    </div>
  );
}
function Modal(){
  return(
    <div className='flex-box'>
      <div className='modal-con'>
        <h3>제목</h3>
        <p>날짜</p>
        <p>상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내
        용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용
        상세내용상세내용상세내용상세내용상세내용상세내용</p>
      </div>
    </div>
  )
}
export default App;