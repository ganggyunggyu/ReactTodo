import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Modal from './components/Modal'
import Content from './components/Content'
import { Route, Routes, Link } from 'react-router-dom';
import InputForm from './components/InputForm';
import styled from 'styled-components'


function App() {


  let [modal, setModal] = useState(false)
  let [modalIndex, setModalIndex] = useState(0)
  let [titleInput, setTitleInput] = useState('')
  let [contentInput, setContentInput] = useState('')
  let [content, setContent] = useState([])

  let date = new Date()
  let now = date.toLocaleString()
  
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
  const addTitleValue = (e) => {
    setTitleInput(e.target.value)
  }
  const addContentValue = (e) => {
    setContentInput(e.target.value)
  }
  const addInputBtn = () => {
    let newContent = {
      title: titleInput,
      date: now,
      like: 0,
      content: contentInput,
      check: false,
    }
    let copyContent = [...content]
    copyContent.unshift(newContent)
    setContent(copyContent)

  }
  const clearValue = () => {
    setContentInput('')
    setTitleInput('')
  }
  const contentDelete = (i) => {
    let copyContent = [...content]
    copyContent.splice(i, 1)
    setContent(copyContent)
  }
  const allDeleteBtn = () => {
    let copyContent = [...content]
    setContent([])
    console.log(copyContent)
  }
  const checkClear = (i) => {
    let copyContent = [...content]
    if(copyContent[i]['check'] === false){
      copyContent[i]['check'] = true
    }else{
      copyContent[i]['check'] = false
    }
    setContent(copyContent)
    console.log(copyContent[i]['check'])
    console.log(content[i]['check'])
  }



  return (
    <div className="app">
      <div className="nav dongle-font">
        <Link className='nav-item' to={'/'}><h1>만능 투두 개시판</h1></Link>        
        <div className='nav-btn-container'>
          <button onClick={()=>{ allDeleteBtn() }} className="btn del-btn">전체삭제</button>
        </div>

      </div>
      <Routes>
        <Route path='/' element={
          <>
            {
              content.map((contentEl, i) => {
                return (
                  <>
                    <Content
                      i={i}
                      contentEl={contentEl}
                      modalOn={modalOn}
                      setModalIndex={setModalIndex}
                      likeUp={likeUp}
                      likeDown={likeDown}
                      contentDelete={contentDelete}
                      checkClear={checkClear}
                    >
                    </Content>
                  </>
                )
              })
            }
            <div className='flex-box'>
              <Link to={'/add'} className='add-btn btn flex-box'>글 추가</Link>
            </div>
          </>}>
        </Route>
        <Route path='/add' element={
          <>
            <InputForm
              titleInput={titleInput}
              addTitleValue={addTitleValue}
              contentInput={contentInput}
              addContentValue={addContentValue}
              addInputBtn={addInputBtn}
              clearValue={clearValue}
            >
            </InputForm>
          </>
        }>
        </Route>
      </Routes>
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
