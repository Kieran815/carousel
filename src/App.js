import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Fremen from './images/fremen.jpg';
import Sandworms from './images/Sandworms.jpg';
import Paul from './images/Paul.jpg';
import Leto from './images/Leto.jpg';
import GodEmperor from './images/GodEmperorOfDune.jpg'
import Spice from './images/SpiceMelange.jpg';

let styles = {
    margin: 'auto',
    width: '500px',
    maxHeight: 'auto',
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

let imgStyle = {
  width: '500px',
  height: 'auto'
}
  
function App() {
  return (
    <div style={styles}>
      <h1 style={{textAlign: 'center'}}>Faces of Dune</h1>
      <Carousel infiniteLoop dynamicHeight autoPlay>
        <div>
          <img src={Fremen} alt="The Fremen" />
          <p className="legend">The Fremen</p>
        </div>
        <div>
          <img src={Paul} alt="Paul Atreides"/>
          <p className="legend">Paul</p>
        </div>
        <div>
          <img src={Sandworms} alt="Sandworms"/>
          <p className="legend">Sandworms</p>
        </div>
        <div>
          <img src={Leto} alt="Leto Atreides"/>
          <p className="legend">Leto Atreides, God Emperor of Dune</p>
        </div>
        <div>
          <img src={GodEmperor} alt="God Emperor of Dune"/>
          <p className="legend">God Emperor of Dune</p>
        </div>
        <div>
          <img src={Spice} alt="Spice Melange"/>
          <p className="legend">The Spice Must Flow</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;