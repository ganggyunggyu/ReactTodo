import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Modal from './components/Modal'
import Content from './components/Content'
import { Route, Routes, Link } from 'react-router-dom';
import InputForm from './components/InputForm';

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


  return (
    <div className="app">
      <div className="nav">
        <h1>만능 투두 개시판</h1>
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
                    >
                    </Content>
                  </>
                )
              })
            }
            <div className='flex-box'>
              <Link to={'/add'} className='add-btn btn'>글 추가</Link>
            </div>
          </>}>
        </Route>
        <Route path='/add' element={
          <>
            <h1>안녕나추가페이지</h1>
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
