import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./components/CommentDetail"; //because of webpack we don't have to include .js

import "./styles.css";

function App() {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 6:00PM" />
      <CommentDetail author="Alex" timeAgo="Today at 12:00AM" />
      <CommentDetail author="Jane" timeAgo="Today at 2:30PM" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
