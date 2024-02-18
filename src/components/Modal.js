import React from "react";

function Modal({ post }) {
  return (
    <div className="popup-modal">
      <div className="image-container">
        <img src={post.thumbnail.large} alt="Thumbnail" className="thumbnail" />
      </div>
      <div className="modal">
        <div className="modal-title">
          <h2 className="lato-black">{post.title}</h2>
        </div>
        <div className="modal-content">
          <span>{post.content}</span>
        </div>

        <div className="author-role">
          <div className="author-avatar">
            <img src={post.author.avatar} alt="Avtar" />
          </div>
          <div className="author-info">
            <span>
              {post.author.name} - {post.author.role}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
