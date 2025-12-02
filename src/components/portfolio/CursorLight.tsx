import { useEffect, useState } from "react";

export function CursorLight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", updatePosition);
    
    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);
  
  return (
    <div 
      className='pointer-events-none fixed z-50 lg:block hidden mix-blend-difference'
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
        width: '20px',
        height: '20px',
        backgroundColor: 'white',
      }}
    />
  );
}
