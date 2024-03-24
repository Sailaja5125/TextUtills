import React, { useState } from "react";

export default function Base(props) {
  const [text, setText] = useState("");
  // word count
  // handle text function

  function handleClick() {
    let newText = text.toUpperCase();
    setText(newText);
    if (text === newText) {
      newText = text.toLowerCase();
      setText(newText);
    }
  }
  //  clear btn functionality
  function handleClick1() {
    let newText1 = "";
    setText(newText1);
  }

  // sentence type button functionality
  function handleClick4() {
    let newtext = text
      .split(" ") // splits the text into individual words
      .map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // at zeroth index the word is converted to uppercase + except the 1st word in the text rest other words are converted into lower case
      )
      .join(" ");

    setText(newtext);
  }

  function OnChange(event) {
    setText(event.target.value);
  }

  // copy text functionality
  // navigator.clipboard.writeText method to copy the selected text to the clipboard.
  function handleClick3() {
    let copiedtext = document.getElementById("textarea");
    copiedtext.select();
    navigator.clipboard.writeText(text);
  }
  // translator functionality in future ............ currently unavailability of
  return (
    <>
      <div className="container my-5">
        <div className="header d-flex justify-content-between">
          <h4 className={`text-${props.text}`}>{props.heading}</h4>
          <div className="icons d-flex align-items-center my-2">
            <div id="dropdown">
              <button
                class="btn btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Language
                <i class="fa-solid fa-language mx-1"></i>
              </button>
              <ul class="dropdown-menu"></ul>
            </div>
            <i className="fa-solid fa-copy mx-4" onClick={handleClick3}></i>
          </div>
        </div>
        <form>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              value={text}
              onChange={OnChange}
              id="textarea"
              style={{
                height: "200px",
              }}
            ></textarea>
          </div>
        </form>
        <button
          type="button"
          onClick={handleClick}
          className="btn btn-outline-dark btn-lg mt-4"
        >
          {text === text.toUpperCase() ? props.buttoni : props.button}
        </button>
        <button
          type="button1"
          onClick={handleClick1}
          className="btn btn-outline-dark btn-lg mt-4 mx-1"
        >
          {props.button1}
        </button>
        <button
          type="button2"
          onClick={handleClick4}
          className="btn btn-outline-dark btn-lg mt-4 mx-1"
        >
          Sentence Case
        </button>
      </div>
      <div className="wordwrap mx-4 my-1 p-4 ">
        <h2 className="heading  text-dark-emphasis font-monospace mx-4">
          Text Summary
        </h2>
        <p className="wrdcount d-flex justify-content-start mx-4 fs-0.5 font-monospace text-secondary">
          Word count {text.split(" ").length - 1}
        </p>
        {/* text.split(" ") is an array which splits the string into two after space is given to it  */}
        <p className="charCount mx-4 fs-0.5 font-monospace text-secondary">
          Character count {text.length}
        </p>
        <p className="Time mx-4 fs-0.5 font-monospace text-secondary">
          Time : {text.split(" ").length - 1 * 0.008} min
        </p>
        <div className="prev d-flex flex-col justify-content-center">
          <h2 className="prev mx-4 fs-0.5 font-monospace text-info">Preview</h2>
        </div>
        <p className="text text-center">{text}</p>
      </div>
    </>
  );
}

//  changes are add
// --> sentence case functionality
// --> translate functionaliity
// --> copy functionality -- insert an icon instead of saying copy text.s
