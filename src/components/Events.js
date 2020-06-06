import React from "react";
import { Link } from "react-router-dom";

const Events = ({ posts, deletePost, isAuthenticated, months }) => (
  <article className="posts container">

    <h1>Events
     {isAuthenticated && (
        <Link className="addNew" to="/new-event">+Add New Event</Link>
      )}
    </h1>

    <ul>
      {posts.length < 1 && <li key= "empty">No posts yet!</li>}
      {posts.map(post => (
        <li key={post.id}>
          <h2>
            <span className="eventDate">{months[post.date.substr(5,2)-1]} {} {post.date.substr(8,2)}</span>
            <Link to={`/event/${post.slug}`}>  {post.title}</Link>
          </h2>
          {isAuthenticated && (
            <p className="eventBtns" >
              <Link to={`/edit/${post.slug}`}>Edit</Link>
              {" | "}
              <button
                className="linkLike"
                onClick={e => {
                  e.preventDefault();
                  deletePost(post);
                }}
              >
                Delete
              </button>
            </p>
          )}
        </li>
      ))}
    </ul>
  </article>

);

export default Events;
