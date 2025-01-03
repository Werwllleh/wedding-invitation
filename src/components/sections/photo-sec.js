import React from 'react';

const PhotoSec = ({text, url, alt}) => {
  return (
    <div className="photo-sec">
      {text && (
        <h2 className="photo-sec__text sec-title">{text}</h2>
      )}
      <img className="photo-sec__image" src={url} alt={alt}/>
    </div>

  );
};

export default PhotoSec;
