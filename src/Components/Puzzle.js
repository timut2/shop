import React, { useState, useRef, useEffect } from 'react';
import './Styles/Puzzle.css';

const Puzzle = ({ onSolve }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [angle, setAngle] = useState(0);
  const leverRef = useRef(null);
  const startAngleRef = useRef(0);
  const startMousePosition = useRef({ x: 0, y: 0 });

  
  const MIN_ANGLE = 0;
  const MAX_ANGLE = 500; 

 

  const handleMouseUp = () => {
    if (isDragging) {

      if (angle >= MIN_ANGLE && angle <= MAX_ANGLE) {
        onSolve(); 
      }
    }
    setIsDragging(false);
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
    setIsDragging(true);
    startMousePosition.current = { x: event.clientX, y: event.clientY };
    startAngleRef.current = angle;
  };
  
  const handleMouseMove = (event) => {
    if (isDragging) {
      const deltaX = event.clientX - startMousePosition.current.x;
      const deltaY = event.clientY - startMousePosition.current.y;
      const deltaAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      const newAngle = startAngleRef.current + deltaAngle;
      const constrainedAngle = Math.max(MIN_ANGLE, Math.min(newAngle, MAX_ANGLE));
      setAngle(constrainedAngle);
    }
  };
  



  useEffect(() => {
    const handleMouseUpDocument = () => {
      if (isDragging) {
        handleMouseUp();
      }
    };

    document.addEventListener('mouseup', handleMouseUpDocument);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleMouseUpDocument);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDragging]);

  return (
    <div className="puzzle-container">
      <div className="path" />
      <div
        ref={leverRef}
        className="lever"
        style={{
          transform: `rotate(${angle}deg) translate(100px)`,
          transformOrigin: '100% 100%',
        }}
        onMouseDown={handleMouseDown}
      />
    </div>
  );
};

export default Puzzle;
