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
import Images from './components/images';
import Guestbook from './components/guestbook';


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
      {id: 4, title: "Projects"},
      {id: 5, title: "Guestbook"}
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
    } else if (this.state.activeTab == 5){
      page = <Guestbook />;
    }

    return (
      <div>
        <ScrollUpButton
          StopPosition={0}
          ShowAtPosition={50}
        />
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
            <ScrollUpButton
              StopPosition={0}
              ShowAtPosition={50}
            />

        </BrowserRouter> */}
        <footer className = "pl-4 pt-4">
            <p> {'\u00A9'} Copyright 2020, Bik Nandy</p>
        </footer>
      </div>
    )
  }
}

export default App;
