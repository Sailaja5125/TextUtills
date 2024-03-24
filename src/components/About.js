import React, { useState } from "react";

export default function About() {
  const [Mystyle , setMystyle] =useState({
    color : 'black',
    backgroundColor : 'white',

  }) 
   const [text , setText] = useState("Enable dark mode");
  const style = ()=>{
    if(Mystyle.color === 'black'){
        setMystyle ({
        color : 'white',
        backgroundColor : 'black',
        border : 'white',
        
        })
        setText("Enable light mode");
      document.body.style.backgroundColor = "black"


    }
    else{
        setMystyle ({
            color : 'black',
            backgroundColor : 'white',
            })
        setText("Enable dark mode");
      document.body.style.backgroundColor = "white"

    }
  }


  return (
    <div>
      <div className="conatiner mx-6 p-5 mb-0" style = {Mystyle}>
        <h1>About us</h1>
        <div className ="accordion" id="accordionExample">
          <div className ="accordion-item" style = {Mystyle}>
            <h2 className ="accordion-header" style = {Mystyle}>
              <button
                className ="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style = {Mystyle}
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className ="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className ="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                className es that we use to style each element. These className es control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className ="accordion-item" style = {Mystyle}>
            <h2 className ="accordion-header" style = {Mystyle}>
              <button
                className ="accordion-button collapsed "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style = {Mystyle}
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className ="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className ="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate className es that we use to style each element. These
                className es control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className ="accordion-item" style = {Mystyle}>
            <h2 className ="accordion-header" style = {Mystyle}>
              <button 
                className ="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style = {Mystyle}
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className ="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className ="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate className es that we use to style each element. These
                className es control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      {/* dark mode */}
      <div className ="form-check form-switch d-flex justify-content-end my-3">
  <input className ="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={style}/>
  <label className ="form-check-label" htmlFor="flexSwitchCheckChecked">{text}</label>
</div>      
      </div>

    </div>
  );
}
