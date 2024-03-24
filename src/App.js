import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Base from "./components/Base";
import About from "./components/About";
import Game from "./components/Game";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const [mode, setmode] = useState("light"); // wheter dark mode is enabled or not
  const [text, setText] = useState("Dark Mode");
  const togglemode = () => {
    if (mode === "dark") {
      setmode("light");
      setText("dark");
      document.body.style.backgroundColor = "white";
    } else {
      setmode("dark");
      setText("light");
      document.body.style.backgroundColor = "#212529";
    }
  };
  // router
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Nav
            title="TEXTUTILS"
            mode={mode}
            togglemode={togglemode}
            text={text}
          />
          <Base
            heading="Enter the Text below"
            button="Uppercase"
            buttoni="Lowercase"
            button1="Clear"
            text={text}
          />
        </>
      ),
    },
    {
      path: "/About",
      element: (
        <>
          {" "}
          <Nav
            title="TEXTUTILS"
            mode={mode}
            togglemode={togglemode}
            text={text}
          />
          <About />
        </>
      ),
    },
    {
      path: "/Game",
      element: (
        <>
          {" "}
          <Nav
            title="TEXTUTILS"
            mode={mode}
            togglemode={togglemode}
            text={text}
          />
          <Game />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
