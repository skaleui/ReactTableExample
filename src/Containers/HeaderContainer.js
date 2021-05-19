import React from 'react';

export const HeaderContainer = (props) => {
  return (
    <div 
      className="fixed-top" 
      style={{backgroundColor:'lightblue'}}
    >
      <h1>{props.title}</h1>
    </div>
  );
};
