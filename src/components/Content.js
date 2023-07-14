import './Content.css'

function Content(props) {

  const clearStyle = (check) => {
    return{
      textDecoration: check ? 'line-through' : 'none',
    }
  }
  const clearBtnStyle = (check) => {
    return{
      background: check ? '#9BCDD2' : '#FAF0E4',
      color: check ? '9BCDD2' : '#9BCDD2'
    }
  }
  return (
    <article className="content-box dongle-font" key={props.i}>
      <section  className='flex-box'>
        <button style={clearBtnStyle(props.contentEl.check)} onClick={()=>{props.checkClear(props.i)}} className='check-btn'>V</button>
        <h4 style={clearStyle(props.contentEl.check)} className='cursor' onClick={() => { props.modalOn(props.contentEl); props.setModalIndex(props.i) }}>{props.contentEl.title}</h4>
        <p style={clearStyle(props.contentEl.check)}  className=''>{props.contentEl.date}</p>
        <span className=''>{props.contentEl.like}</span>
      </section>
      <section className='btn-container'>
        <button onClick={() => { props.likeUp(props.i) }} className='btn'>GOOD</button>
        <button onClick={() => { props.likeDown(props.i) }} className='btn'>BAD</button>
        <button onClick={() => {  }} className='btn del-btn'>수정</button>
        <button onClick={() => { props.contentDelete(props.i) }} className='btn del-btn'>삭제</button>
      </section>
    </article>
  )
}
export default Content