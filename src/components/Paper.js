import React from 'react';

const Paper = ({ children }) => {
  return (
    <div
      style={{
        background: 'white',
        boxShadow: '-10px 0 20px rgba(0, 0, 0, 0.1)',
        padding: '1em',
        position: 'relative',
        overflow: 'hidden',
        width: 'min(60vw, 8.3in)'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-10px',
          left: '-10px',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '-10px',
          left: '-10px',
          width: '20px',
          height: '20px',
          background: 'white',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '-10px',
          right: '-10px',
          width: '20px',
          height: '20px',
          background: 'white',
          pointerEvents: 'none',
        }}
      />
      {children}
    </div>
  );
};

export default Paper;
