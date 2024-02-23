import React from 'react';

const Image = ({ src, alt, onClick, className }) => {
  return <img src={src} alt={alt} onClick={onClick} className={className} />;
};

export default Image;
