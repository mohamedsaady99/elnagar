import React from 'react';
import Home from './../Home/Home';
import Profile from './../Profile/Profile';
import Portfolio from './../Portfolio/Portfolio';
import SocialMedia from './../SocialMedia/SocialMedia';
import About from './../About/About';
import Skills from '../skills/skills';
class Index extends React.Component {
  render(){
  return (
      <div>
        <Home/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Profile/>
        <SocialMedia/>
      </div>
  );
  }
}

export default Index;
