import {useEffect} from 'react';
import './App.css';
import {gsap} from 'gsap';

function App() {
  useEffect(() => {
    gsap.to('h1', {
      top: 0,
      opacity: 1,
      ease: 'power4.out',
      stagger: 0.5,
    });
  }, []);
  return (
    <>
      <div className="header bg-[#0a0a0a] w-full h-full fixed flex items-center justify-center text-white flex-col">
        <h1 className="text-6xl font-bold relative">Any fool can write code</h1>
        <h1 className="text-6xl font-bold relative">that a computer can</h1>
        <h1 className="text-6xl font-bold relative">understand.</h1>
        <h1 className="text-6xl font-bold relative">Good programmers</h1>
        <h1 className="text-6xl font-bold relative">write code that</h1>
        <h1 className="text-6xl font-bold relative">humans can understand.</h1>
      </div>
    </>
  );
}

export default App;
