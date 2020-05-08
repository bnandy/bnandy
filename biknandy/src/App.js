import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
// import NavBar from './components/navbar';
import './css/style.css'
import TabList from './components/tablist'
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import SimpleReactLightbox from "simple-react-lightbox";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

import Home from './components/home';
import Projects from './components/projects';
import Media from './components/media';
<<<<<<< HEAD
import Images from './components/images';
import Guestbook from './components/guestbook';
=======
import Images from './components/images'
>>>>>>> parent of 7e72367d... Updates


class App extends Component {
  constructor(){
    super();
    this.state= {
      activeTab: 1
    }

    this.changeTab = this.changeTab.bind(this);

  }

  changeTab = (id) => {
    this.setState({
      activeTab: id
    })
  }

  render() {
    const tabs = [
      {id: 1, title: "Home"},
      {id: 2, title: "Images"},
      {id: 3, title: "Media"},
<<<<<<< HEAD
      {id: 4, title: "Projects"},
      {id: 5, title: "Guestbook"}
=======
      {id: 4, title: "Projects"}
>>>>>>> parent of 7e72367d... Updates
    ]

    let page;
    if (this.state.activeTab == 1){
      page = <Home />;
    } else if (this.state.activeTab == 2){
      page = <SimpleReactLightbox>
        <Images />
      </SimpleReactLightbox>
    } else if (this.state.activeTab == 3){
      page = <Media />;
    } else if (this.state.activeTab == 4){
      page = <Projects />;
<<<<<<< HEAD
    } else if (this.state.activeTab == 5){
      page = <Guestbook />;
=======
>>>>>>> parent of 7e72367d... Updates
    }

    return (
      <div>
<<<<<<< HEAD

=======
        <ScrollUpButton
          StopPosition={0}
          ShowAtPosition={50}
        />
>>>>>>> parent of 7e72367d... Updates
        <div>
          <TabList tabs={tabs} activeTab = {this.state.activeTab} changeTab = {this.changeTab}/>
        </div>

        <div>
          {page}
        </div>
        {/* <BrowserRouter>
          <div>
            {/*<NavBar/>
            {/* <Route exact path='/' component={}/>
            <Route exact path="/images" component={} />
            <Route exact path="/media" component={} />
            <Route exact path="/projects" component = {} />
<<<<<<< HEAD
            <ScrollUpButton
              StopPosition={0}
              ShowAtPosition={50}
            />
=======
>>>>>>> parent of 7e72367d... Updates

        </BrowserRouter> */}
        <footer className = "pl-4 pt-4">
            <p> {'\u00A9'} Copyright 2020, Bik Nandy</p>
        </footer>
      </div>
    )
  }
}

export default App;
