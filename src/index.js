import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./components/CommentDetail"; //because of webpack we don't have to include .js
import ApprovalCard from "./components/ApprovalCard";

import "./styles.css";

function App() {
  return (
    <div className="ui container comments">
    <ApprovalCard/>
      <CommentDetail
        author="Sam"
        timeAgo="Today at 6:00PM"
        commentText="Nice blog post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 12:00AM"
        commentText="Amazing post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 2:30PM"
        commentText="Good one!"
        avatar={faker.image.avatar()}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
