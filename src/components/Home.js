import React, { Component } from 'react';
import './Home.css';
import About from './About';
import './About.css'
import Intro from './Intro';
import Projects from './Projects';
import Animation from './Animation';
import Waypoint from 'react-waypoint';
import { CSSTransition } from 'react-transition-group';
import Plx from 'react-plx';



const parallaxData=[
    {
        start: 0,
        end: 200,
        properties: [
            {
                startValue: 'blue',
                endValue: 'green',
                property: 'backgroundColor'
            }
        ]
    },
];

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            loadPage: true,
            isShowBio: false,
        };
    }

    _LoadPage = () =>{
        this.setState({loadPage: true});
        console.log("in _showAnimation()");
    }

    _showBio = () =>{
        this.setState({isShowBio: !this.isShowBio});
    }

    render() {
        const { isShowBio } = this.state;
    return(
       
       
            <div className="Home">
                <Intro />
                <About />
                {/* <Projects /> */}
                {/**<Animation />*/}
            </div>
      
    );
    }
}
export default Home;