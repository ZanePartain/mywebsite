import React, { Component } from 'react';
import './App.css';
import Waypoint from 'react-waypoint';
import { Container } from 'reactstrap';
import { 
  Link, 
  DirectLink, 
  Element , 
  Events, 
  animateScroll as scroll, 
  scrollSpy, 
  scroller,
} from 'react-scroll';
import Intro from './components/Intro';
import About from './components/About';
import NavBar from './components/NavBar';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isSticky: false
    }

    this.scrollToTop = this.scrollToTop.bind(this);
  }

  // log the end and beginning of all elements on DOM
  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('begin', function() {
      console.log('end', arguments);
    });
  }

  /** scroll all the way to top */
  scrollToTop() {
    scroll.scrollToTop();
  }

  /** scroll to a specific element on the DOM */
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  /** Waypoint calls to set navbar as sticky */
  _showBio(){
    this.setState({isSticky: !this.state.isSticky});
  }

  /** remove the scroll event listeners */
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  handleClick = (e) =>{
    console.log(e);
  }

  render() {

    return (
        <Container  className="App" style={{maxWidth: '100%', padding: 0, backgroundColor: 'tomato'}}>
          {/** for sticky nav bar */}
          <Waypoint
            onEnter={this._showBio.bind(this)}
            onLeave={this._showBio.bind(this)}
            bottomOffset='99.9%'
          >
            <div>
              <NavBar isSticky={this.state.isSticky} handleClick={this.handleClick.bind(this)}/> 
              <Intro />
              <Element name="test1" className="element">
                <About />
              </Element>
            </div>
          </Waypoint>
          
          
          {/* <Projects /> */}
          

        </Container>  
    );
  }
}

export default App;
