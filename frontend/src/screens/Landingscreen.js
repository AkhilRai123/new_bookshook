import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './screen.css'; // Make sure to import your CSS file

const Landingscreen = () => {
  useEffect(() => {
    // Trigger the animation after the component mounts
    animateLetters();
  }, []);

  const animateLetters = () => {
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add('animate');
      }, index * 100); // Adjust delay as needed
    });
  };

  return (
    <div className='row landing'>

        <div className='col-md-12 text-center'>
             
             <h2 style={{color: 'white', fontSize: '100px', fontWeight: 'bold'}}>
               <span className='letter'>Ｂ</span>
               <span className='letter'>ｏ</span>
               <span className='letter'>ｏ</span>
               <span className='letter'>ｋ</span>
               <span className='letter'>Ｓ</span>
               <span className='letter'>ｈ</span>
               <span className='letter'>ｏ</span>
               <span className='letter'>ｏ</span>
               <span className='letter'>ｋ</span>
             </h2>
             <h1 style={{color: 'white'}}>Book kar, relax kar!</h1>
             <Link to='/home'>
                <button className='btn btn-primary'>Get Started</button>
             </Link>
        </div>

    </div>
  )
}

export default Landingscreen;
