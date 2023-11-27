import React from 'react';
import Navbar from '../Navbar/Navbar';
import '../Header/Header.css'

export default function Header() {
  return (
    <div id='head'>
        <div className='backgnd'>
        {/* <h1>Tripbae</h1> */}
            <Navbar/>
        <div className='frame134'>
           <div className='frame118'>
            <div className='frame117'>
                <div className='group1'>
                    <p>Connecting Traveler's,<br/> One Adventure at a Time.</p>
                </div>
                <div className='group2'>
                 <p>Whether your passion is trekking and adventure,or networking and<br/>
                 knowledge sharing, Tripbae is your gateway to a vibrant community.<br/> Join us for weekly events and connect with like-minded individuals!</p>
                </div>
            </div>
           </div>
            
        </div>
        </div>
      
    </div>
  );
}
