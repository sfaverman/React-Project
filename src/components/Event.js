import React from "react";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

const Event = ({ post }) => {
  const converter = new QuillDeltaToHtmlConverter(post.content.ops, {});
  const contentHTML = converter.convert();

  return (
    <article className="post container">
          <h1>{post.title}</h1>
          <h2>{post.date}</h2>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: contentHTML }}
          />
     </article>
    );
};

export default Event;
