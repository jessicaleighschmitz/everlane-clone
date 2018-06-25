import React from 'react';

function Header(){
  let headerStyles = {
    fontWeight: 'bold',
    fontFamily: 'monospace',
    fontSize: '28px'
  };

  return(
    <div style={headerStyles} className="green-text">
      <h1>Help Queue</h1>

      <style jsx>{`
        .green-text {
          color: green;
        }
        .green-text:hover {
          background-color: pink;
          opacity: 0.5;
        }
      `}</style>
    </div>

  );
}

export default Header;