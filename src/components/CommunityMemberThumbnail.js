import React from 'react';

export default ({ id, onClick, name, image }) => (
  <a
    key={id}
    href={`community/${id}`}
    onClick={e => this.handleImageClick(e, id)}
    className="image-overlay"
  >
    <div className="overlay-text">{name}</div>
    <img src={image} alt={name} className="community-image" />
  </a>
);
