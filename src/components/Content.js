import { useState } from "react";
import "./Content.css";
import { Link } from "react-router-dom";

function Content(props) {
  const [isUpdateBool, setIsUpdateBool] = useState(false);
  const [updateTitleInput, setUpateTitleInput] = useState("");
  const [updateContentInput, setUpateContentInput] = useState("");

  const contentUpdate = (i) => {
    console.log(isUpdateBool);
    setIsUpdateBool(true);
    console.log(i);
    let copyContent = [...props.content];
    console.log(copyContent[i]);
    setUpateTitleInput(copyContent[i]["title"]);
    setUpateContentInput(copyContent[i]["content"]);
  };
  const updateInputBtn = () => {
    let copyContent = [...props.content]
    console.log(copyContent[props.i]['title'])
    console.log(copyContent[props.i]['content'])
    copyContent[props.i]['title'] = updateTitleInput
    copyContent[props.i]['content'] = updateContentInput    
    console.log(copyContent[props.i]['title'])
    console.log(copyContent[props.i]['content'])
    props.setContent(copyContent)

    setIsUpdateBool(false);
  };
  const updateContentValue = (e) => {
    setUpateContentInput(e.target.value);
  };
  const updateTitleValue = (e) => {
    setUpateTitleInput(e.target.value);
    console.log(updateTitleInput);
  };
  const clearStyle = (check) => {
    return {
      textDecoration: check ? "line-through" : "none",
    };
  };
  const clearBtnStyle = (check) => {
    return {
      background: check ? "#9BCDD2" : "#FAF0E4",
      color: check ? "9BCDD2" : "#9BCDD2",
    };
  };

  if (isUpdateBool) {
    return (
      <>
        <h1 className="add-title dongle-font">안녕나수정페이지</h1>
        <form className="add-input-box input-box">
          <input
            className="input-style title-input dongle-font"
            type="text"
            value={updateTitleInput}
            onChange={(e) => {
              updateTitleValue(e);
            }}
            placeholder="TITLE"
          />
          <input
            className="input-style content-input dongle-font"
            type="text"
            value={updateContentInput}
            onChange={(e) => {
              updateContentValue(e);
            }}
            placeholder="OTHER..."
          />
          <input
            className="add-btn btn"
            type="button"
            value="수정"
            onClick={() => {
              updateInputBtn();
            }}
          />
        </form>
      </>
    );
  } else {
    return (
      <article className="content-box dongle-font" key={props.i}>
        <section className="flex-box">
          <button
            style={clearBtnStyle(props.contentEl.check)}
            onClick={() => {
              props.checkClear(props.i);
            }}
            className="check-btn"
          >
            V
          </button>
          <h4
            style={clearStyle(props.contentEl.check)}
            className="cursor"
            onClick={() => {
              props.modalOn(props.contentEl);
              props.setModalIndex(props.i);
            }}
          >
            {props.contentEl.title}
          </h4>
          <p style={clearStyle(props.contentEl.check)} className="">
            {props.contentEl.date}
          </p>
          <span className="">{props.contentEl.like}</span>
        </section>
        <section className="btn-container">
          <button
            onClick={() => {
              props.likeUp(props.i);
            }}
            className="btn"
          >
            GOOD
          </button>
          <button
            onClick={() => {
              props.likeDown(props.i);
            }}
            className="btn"
          >
            BAD
          </button>
          <button
            onClick={() => {
              contentUpdate(props.i);
            }}
            className="btn del-btn"
          >
            수정
          </button>
          <button
            onClick={() => {
              props.contentDelete(props.i);
            }}
            className="btn del-btn"
          >
            삭제
          </button>
        </section>
      </article>
    );
  }
}
export default Content;
