import React from 'react';
import "./home.css";
import main from "./photos/main.jpg"

export default function Home() {
  return (
    <div className="container">
  <div>
    <div>
    <h1 className="TextMain">"The world is a book, and those who do not travel read only a page." - Saint Augustine</h1>
    </div>
    <div className="block">
  </div>
    <img className="foto" src={require('./photos/main.jpg')}>
      </img>
      </div>

  <div className="">
  <img className="fotoo" src={require('./photos/123.jpg')}>
      </img>
      <p className='smallText'>One of the main perks of being location-independent is travelling and living wherever you want. We write about travel and also focus on city guides, rating them through the lens of living a digital nomad life there.</p>
  </div>
  
  <div className="">
  <img className="fotoo2" src={require('./photos/321.jpg')}>
      </img>
      <p className="smallText2">Travel far and wide. Explore new horizons, embrace new cultures, and create lasting memories.
      <br></br>
      Step out of your comfort zone and embrace the unknown. Traveling is about discovering the beauty of the unfamiliar.
      <br></br>
      Collect experiences, not things. The memories and stories you gather from your travels will enrich your life.
      <br></br>
      Open your mind and heart to different perspectives. Traveling allows you to gain a deeper understanding and appreciation of diverse cultures and people.
      <br></br>
      Travel light, both physically and emotionally. Let go of unnecessary baggage and embrace the freedom of the journey.
      <br></br>
      Embrace the present moment. Traveling teaches us to appreciate the beauty and wonder of each passing moment.
      <br></br>
      Be a responsible traveler. Respect the environment, culture, and communities you encounter, leaving a positive impact wherever.
      </p>
  
  </div>
  <footer>
      <div className='legal'>
        <ul> Follow us :
          <li><a href='https://www.facebook.com/' className='followUs'>Facebook</a></li>
          <li><a href='https://www.instagram.com/' className='followUs'>Instagram</a></li>
          <li><a href='https://www.twitter.com/' className='followUs'>Twitter</a></li>

        </ul>
        <span className="rights">© 2023 TripAdvice</span>
      </div>
  </footer>
  </div>
  );
}
