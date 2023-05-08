import React from 'react';
import me from './me.png';
import logo from './logo.svg';
import './Site.css';

class Site extends React.Component {
  constructor() {
    super();

    this.state = {
      fabric_selected: true
    }
  }

  render() {
    return (
      <div className="Site">
        <BasicDesign />
        <Me centered={true} />
        <Me centered={false} />
      </div>
    );
  }
}

function BasicDesign() {
  return (
    <div className="Basic-design">
      <p className="Basic-design-text-main">Basic design</p>
      <div className="Basic-design-divider" />
      <p className="Basic-design-text-sub">working with what could happen.</p>
    </div>
  )
}

function Me(props) {
  if (props.centered) {
    // Place in the center of the screen if nothing is selected
    return (
      <div className="Me-centered">
        <p className="Me-name-centered">Spencer</p>
        <p className="Me-name-centered">Ward</p>
        <img className='Me-face-centered' src={me} alt="Spencer Ward" />
      </div>
    )
  } else {
    // Otherwise, place in the bottom-right corner
    return (
      <div className="Me">
        <img className='Me-face' src={me} alt="Spencer Ward" />
        <p className="Me-name">Spencer</p>
        <p className="Me-name">Ward</p>
      </div>
    )
  }
}


export default Site;
