import React from 'react';
import VideoComponent from './Components/VideoComponent';
import "./App.css"
import {ReactComponent as ReactLogo} from './tiktok-logo.svg';

function App() {
  return (
    <div className="app">
      <ReactLogo />
    <div className="app__video">
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      <VideoComponent />
      </div>
    </div>
  );
}

export default App;
