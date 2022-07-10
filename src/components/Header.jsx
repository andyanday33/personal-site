import React, {useEffect, useRef} from 'react';
import ParticleContainer from './ParticleContainer';
// Styles
import './Header.css';

export default function Header() {
  return (
    <>
      <header>
        <section id="greeting">
          <p>Hello There! I am</p>
          <h1>Berke Anday<br /><span id="last-name">Baloglu</span></h1>
          <p>Full-stack developer, MSc Student</p>
        </section>
      </header>
      <ParticleContainer />
    </>
  )
}
