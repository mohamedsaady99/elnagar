import React, { Component } from 'react';
import './portfolio.css';
import img1 from '../images/rima.jpg';
import img2 from '../images/galaxy.jpg';
import img3 from '../images/create.jpg';
import img4 from '../images/roofing.jpg';
import img5 from '../images/Portfolio.jpg';
import img6 from '../images/ecommerce.png';
import img7 from '../images/Onassis.png';
import img8 from '../images/dstt.png';
import $ from 'jquery';
class Portfolio extends Component {
    componentDidMount(){
         $('.portfolio ul li').click( function(){
            $(this).addClass('active').siblings().removeClass('active');
            if($(this).data('class')==='all')
            {
                $('.shuffle-imgs .col-md-4').show();
            }else{
                $('.shuffle-imgs .col-md-4').hide();
            }
            if($(this).data('class')==='react')
            {
                $('.shuffle-imgs .react').show();
            }
            if($(this).data('class')==='jquery')
            {
                $('.shuffle-imgs .jquery').show();
            }
            
            if($(this).data('class')==='bootstrap')
            {
                $('.shuffle-imgs .bootstrap').show();
            }
        } );
        $('.shuffle-imgs .row div:nth-of-type(1)').mouseenter(function(){
            $('.shuffle-imgs .row div:nth-of-type(1) .overlay').css('display','block');
        });
        $('.shuffle-imgs .row div:nth-of-type(1)').mouseleave(function(){
            $('.shuffle-imgs .row div:nth-of-type(1) .overlay').css('display','none');
        });
        $('.shuffle-imgs .row div:nth-of-type(2)').mouseenter(function(){
            $('.shuffle-imgs .row div:nth-of-type(2) .overlay').css('display','block');
        });
        $('.shuffle-imgs .row div:nth-of-type(2)').mouseleave(function(){
            $('.shuffle-imgs .row div:nth-of-type(2) .overlay').css('display','none');
        });
        $('.shuffle-imgs .row div:nth-of-type(3)').mouseenter(function(){
            $('.shuffle-imgs .row div:nth-of-type(3) .overlay').css('display','block');
        });
        $('.shuffle-imgs .row div:nth-of-type(3)').mouseleave(function(){
            $('.shuffle-imgs .row div:nth-of-type(3) .overlay').css('display','none');
        });
        $('.shuffle-imgs .row div:nth-of-type(4)').mouseenter(function(){
            $('.shuffle-imgs .row div .overlay').css('display','none');
            $('.shuffle-imgs .row div:nth-of-type(4) .overlay').css('display','block');
        });
        $('.shuffle-imgs .row div:nth-of-type(4)').mouseleave(function(){
            $('.shuffle-imgs .row div:nth-of-type(4) .overlay').css('display','none');
        });
        $('.shuffle-imgs .row div:nth-of-type(5)').mouseenter(function(){
            $('.shuffle-imgs .row div .overlay').css('display','none');
            $('.shuffle-imgs .row div:nth-of-type(5) .overlay').css('display','block');
        });
        $('.shuffle-imgs .row div:nth-of-type(5)').mouseleave(function(){
            $('.shuffle-imgs .row div:nth-of-type(5) .overlay').css('display','none');
        });
        $('.col-md-4').mouseleave(function(){
            $('.overlay').css('display','none');
        });
        
      
    }
    state = {  }
    render() { 
       
        return (  
           <div className='portfolio text-center'>
               <h1>My Portfolio</h1>
               <ul className='list-unstyled row no-gutters'>
               <li data-class='all' className='col-md active'>All</li>
               <li data-class='bootstrap' className='col-md'>bootstrap </li>
               <li data-class='jquery' className='col-md'>jQuery</li>
               <li data-class='react' className='col-md'>React Js</li>
               </ul>
               <div className="shuffle-imgs container ">
                   <div className="row no-gutters">
                        <div className="col-md-4  jquery bootstrap animate__bounceIn animate__delay-5s">
                            <div className='overlay'>
                                <a className='btn btn-primary' href='https://elnagarwebsite.000webhostapp.com/'>Preview</a>
                                <a className='btn btn-primary' href='#g'>Get Code</a>
                            </div>
                            <img src={img1}/>
                        </div>
                        <div className=" col-md-4 jquery  bootstrap animate__bounceIn animate__delay-5s">
                            <div className='overlay'>
                                <a className='btn btn-primary' href='https://elnagarwebsite.000webhostapp.com/galaxygroup/index.html'>Preview</a>
                                <a className='btn btn-primary' href='#g'>Get Code</a>
                            </div>
                            <img src={img2}/>
                        </div>
                        <div className=" col-md-4   bootstrap animate__bounceIn animate__delay-5s">
                            <div className='overlay'>
                                <a className='btn btn-primary' href='https://create-studio.000webhostapp.com/'>Preview</a>
                                <a className='btn btn-primary' href='#g'>Get Code</a>
                            </div>
                            <img src={img3}/>
                        </div>
                        <div className="col-md-4 jquery bootstrap animate__bounceIn animate__delay-5s">
                            <div className='overlay'>
                                <a className='btn btn-primary' href='https://elnagarwebsite.000webhostapp.com/roofing/index.html'>Preview</a>
                                <a className='btn btn-primary' href='#g'>Get Code</a>
                            </div>
                            <img src={img4}/>
                        </div>
                        <div className=" col-md-4  jquery  bootstrap animate__bounceIn animate__delay-5s">
                            <div className='overlay'>
                                <a className='btn btn-primary' href='#p'>Preview</a>
                                <a className='btn btn-primary' href='#g'>Get Code</a>
                            </div>
                            <img src={img6}/>
                        </div>
                    </div>    
               </div>
           </div>
 
            
        );
    }
}
 
export default Portfolio;