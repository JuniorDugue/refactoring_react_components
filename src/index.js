import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./components/CommentDetail"; //because of webpack we don't have to include .js

import "./styles.css";

function App() {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" />
      <CommentDetail author="Alex" />
      <CommentDetail author="Jane" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
