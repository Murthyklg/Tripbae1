import React from 'react';
import Header from './Landingpage/Header/Header';
import Footer from './Landingpage/Footer/Footer';
import Partners from './Landingpage/Partners/Partners';
import Tripbaeworks from './Landingpage/Tripbaeworks/Tripbaeworks';
import Upcomingevents from './Landingpage/Upcomingevents/Upcomingevents';
import Popularevents from './Landingpage/Popularevents/Popularevents';
// import Navbar from './Landingpage/Navbar/Navbar';




export default function Home() {
  return (
    <div>
      <Header/>
      <Partners/>
      <Tripbaeworks/>
      <Upcomingevents/>
      <Popularevents/>
      <Footer/>
    </div>
  );
}
