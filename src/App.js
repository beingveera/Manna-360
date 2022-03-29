import React from 'react';
import './App.css';

import Upper_header from './Components/Upper_header.jsx';
import Navbar from './Components/Navbar.jsx';
import Background_image from './Components/Background_image.jsx';
import About from './Components/About.jsx';
import Seller from './Components/Seller.jsx';
import Picart from './Components/Picart.jsx';

import Donet from './Components/Data/Donet_Data.js';
import Drink from './Components/Data/Drink_Data.js';
import Ice from './Components/Data/Ice_Data.js';



import Logo1 from './Components/Image/logo.png'
import Logo2 from './Components/Image/logo2.png'


export default function App(){

   return(
    <>
      <Upper_header />
      <Navbar />
      <Background_image />
      <About />
      <Seller Data={Donet} logo={Logo1}/>
      <Seller Data={Drink} style={drinkStyle} cardStyle={DrinkCard} logo={Logo2} logoStyle={DrinkLogo}/>
      <Picart />
      <Seller Data={Ice} logo={Logo1} style={iceStyle} cardStyle={DrinkCard}/>

    </>
    )
}


const drinkStyle={
   "marginTop":"10px",
   "backgroundColor":"white"
};

const iceStyle={
   "marginTop":"10px",
   "backgroundColor":"white"
};


const DrinkCard={
   "border":"1px solid lightgray"
}


const DrinkLogo={
   "height":"40px",
   "width":"100px",
   "border":"none",
   "backgroundColor":'white',
   "borderRadius":"3px"
}
 