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
      className='pointer-events-none fixed inset-0 z-30 transition duration-300 lg:block hidden'
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 255, 255, 0.05), transparent 40%)`,
      }}
    />
  );
}