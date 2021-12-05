import React from 'react';

const Author = ({ author }) => {
  return (
    <div>
      <img
        src={author.photo.url}
        alt={author.name}
        className='align-middle rounded-full h-24 w-24'
      />
    </div>
  );
};

export default Author;
