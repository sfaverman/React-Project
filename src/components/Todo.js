import React from "react";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

const Todo = ({ todo }) => {
  const converter = new QuillDeltaToHtmlConverter(todo.content.ops, {});
  const contentHTML = converter.convert();

  return (
    <article className="post container">
      <h1>{todo.title}</h1>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: contentHTML }}
      />
    </article>
  );
};

export default Todo;
