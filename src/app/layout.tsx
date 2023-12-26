'use client';
import { useEffect, useRef } from 'react';
import './globals.css'
import Navbar from '@/components/Navbar';
import About from '@/components/About';


export default function RootLayout() {

  const cursorRef = useRef<HTMLDivElement>(null);

  const handleCursorMovement = (event: MouseEvent) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = event.clientX + "px";
      cursorRef.current.style.top = event.clientY + "px";

      switch ((event.target as HTMLElement).tagName.toLowerCase()) {
        case "a":
          cursorRef.current.style.backgroundColor = "#ef4444"
          break;
        default:
          cursorRef.current.style.backgroundColor = "#3b82f6"
          break;
      }
    }
    // console.log(document.elementFromPoint(event.clientX, event.clientY)?.tagName);
  }

  const handleContextMenu = (event: Event) => {
    event.preventDefault();
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleCursorMovement);
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("mousemove", handleCursorMovement);
      document.removeEventListener("contextmenu", handleContextMenu);
    }
  }, []);

  return (
    <html lang="en">
      <body className="w-[100vw] h-[100vh]">
        <div ref={cursorRef} className='hidden md:block w-4 h-4 rounded-full absolute' />
        <div className="w-full h-full overflow-y-auto">
          <Navbar />
          <About />
        </div>
      </body>
    </html>
  )
}
