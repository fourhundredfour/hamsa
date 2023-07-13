import {useEffect} from 'react';
import './App.css';
import {gsap} from 'gsap';

function App() {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.to('.splash h1', {
      top: 0,
      opacity: 1,
      duration: 4,
      ease: 'power4.out',
    }).to('.splash', {
      top: '-100%',
      ease: 'power4.out',
      duration: 2
    });
  }, []);
  return (
    <>
      <div className="splash bg-[#0a0a0a] w-full h-full fixed flex items-center justify-center text-white flex-col z-10">
        <h1 className="text-6xl font-bold relative uppercase">Hamza</h1>
      </div>
      <div className='z-0 text-black'>
        <h1>Hallo</h1>
      </div>
    </>
  );
}

export default App;
