import React from 'react';
import Navbar from './NavBar/NavBar';
import {BrowserRouter ,Route} from 'react-router-dom';
import Contact from './Contact/Contact';
import Index from './Index/Index';
import SocialMedia from './SocialMedia/SocialMedia';
import 'animate.css';
import $ from 'jquery';
class App extends React.Component {
  componentDidMount(){
    $('a').attr('target', '_blank').get(0).click(); 
   $('.self').attr('target', '_self').get(0).click(); 
  }
  state ={
  }
  render(){
  return (
      <BrowserRouter>
        <Navbar/>
        <Route exact path="/" component={Index} />
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/socialmedia" component={SocialMedia}/>
      </BrowserRouter>   
  );
  }
}

export default App;
