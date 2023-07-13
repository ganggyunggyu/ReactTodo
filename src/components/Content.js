function Content(props){

  return(
    <div className="content-box" key={props.i}>
    <h4 className='cursor' onClick={() => { props.modalOn(); props.setModalIndex(props.i) }}>{props.contentEl.title}</h4>
    <p className=''>{props.contentEl.date}</p>
    <span className=''>{props.contentEl.like}</span>
    <div className='btn-container'>
      <button onClick={() => { props.likeUp(props.i) }} className='btn'>GOOD</button>
      <button onClick={() => { props.likeDown(props.i) }} className='btn'>BAD</button>
      <button onClick={() => { props.contentDelete(props.i) }} className='btn del-btn'>삭제</button>
    </div>
  </div>
  )
}
export default Content