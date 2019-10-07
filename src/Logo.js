import React from 'react';
import './index.css';

class Logo extends React.Component {
  render() {
    return (
      <div clasName="Container">
        <img src="https://duckduckgo.com/assets/logo_homepage.normal.v108.svg" href={window.scrollTo(0, 250)} className="mainLogo" />

        <span className="tag">`conocer mas`</span>
      </div>
    );
  }
}

export default Logo;
