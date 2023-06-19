import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  let [modal, setModal] = useState(false)
  let [modalIndex, setModalIndex] = useState(0)
  let [addInput, setAddInput] = useState('')


  let [content, setContent] = useState([
    {
      title: '다!래끼',
      date: '3월23일',
      like: 0,
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Dolorem, quos atque ipsum distinctio 
      harum,vitae modi deserunt unde laboriosam molestias totam optio accusantium aut voluptas corporis 
      tempora vero blanditiis a.`,
    },
    {
      title: '가!래끼',
      date: '3월26일',
      like: 0,
      content: '상세내용~',
    },
    {
      title: '나!래끼',
      date: '3월21일',
      like: 0,
      content: '상세적내용~~나레낍부분',
    }
  ])

  const modalOn = () => {
    setModal(true)
  }
  const likeUp = (i) => {
    let copyContent = [...content]
    copyContent[i].like = copyContent[i].like + 1
    setContent(copyContent)
  }

  const likeDown = (i) => {
    let copyContent = [...content]
    copyContent[i].like = copyContent[i].like - 1
    setContent(copyContent)
  }
  const addInputValue = (e) => {
    setAddInput(e.target.value)
  }
  const addInputBtn = () => {
    let newContent = {
      title: addInput,
      date: '날짜가져와',
      like: 0,
    }
    let copyContent = [...content]
    copyContent.unshift(newContent)
    setContent(copyContent)
  }
  const contentDelete = (i) => {
    let copyContent = [...content]
    copyContent.splice(i, 1)
    setContent(copyContent)
  }


  return (
    <div className="app">
      <div className="black-nav">
        <h1>리엑트 게시판 GOOD</h1>
      </div>
      {
        content.map((contentEl, i) => {
          return (
            <div className="content-box" key={i}>
              <h4 className='cursor' onClick={() => { modalOn(); setModalIndex(i) }}>{contentEl.title}</h4>
              <p className=''>{contentEl.date}</p>
              <span className=''>{contentEl.like}</span>
              <button onClick={() => { likeUp(i) }} className='btn'>GOOD</button>
              <button onClick={() => { likeDown(i) }} className='btn'>BAD</button>
              <button onClick={() => { contentDelete(i) }} className='btn right-btn'>삭제</button>
            </div>
          )
        })
      }
      <div className="add-input-box flex-box">
        <input className='title-input' type="text" onChange={(e) => { addInputValue(e) }} />
        <input className='btn' type="button" value="글 추가" onClick={() => { addInputBtn() }} />
      </div>
      {
        modal == true ? <Modal
          content={content}
          setModal={setModal}
          i={modalIndex}
        /> : null
      }
    </div>



  )

}

export default App;

function Modal(props) {
  return (
    <div className="flex-box">
      <div className="modal-con">
        <div className="modal-title"><p>{props.content[props.i].title}</p></div>
        <div className="modal-date"><p>{props.content[props.i].date}</p></div>
        <p>{props.content[props.i].content}</p>
        <button onClick={() => { props.setModal(false) }} className='btn'>닫기</button>
      </div>
    </div>

  )

}