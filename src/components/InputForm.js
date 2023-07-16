import React from "react";
import { Link } from "react-router-dom";
import "./InputForm.css";

export default function InputForm({
  titleInput,
  addTitleValue,
  contentInput,
  addContentValue,
  addInputBtn,
  clearValue,
}) {
  return (
    <>
      <h1 className="add-title dongle-font">안녕나추가페이지</h1>
      <form className="add-input-box input-box">
        <input
          className="input-style title-input dongle-font"
          type="text"
          value={titleInput}
          onChange={(e) => {
            addTitleValue(e);
          }}
          placeholder="TITLE"
        />
        <input
          className="input-style content-input dongle-font"
          type="text"
          value={contentInput}
          onChange={(e) => {
            addContentValue(e);
          }}
          placeholder="OTHER..."
        />
        <input
          className="add-btn btn"
          type="button"
          value="등록"
          onClick={() => {
            addInputBtn();
            clearValue();
          }}
        />
      </form>
    </>
  );
}
