import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {gsap} from 'gsap';
import {ScrollSmoother} from 'gsap/ScrollSmoother';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import './index.css';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
