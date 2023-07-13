import './Modal.css'

function Modal(props) {
    return (
      <div className="flex-box">
        <div className="modal-con">
          <div className="modal-title"><p>{props.content[props.i].title}</p></div>
          <div className="modal-date"><p>{props.content[props.i].date}</p></div>
          <p>{props.content[props.i].content}</p>
          <button onClick={() => { props.setModal(false) }} className='del-btn btn'>닫기</button>
        </div>
      </div>
    )
  }
  export default Modal;