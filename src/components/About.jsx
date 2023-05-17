import React from 'react';
import "./styling.css";

export default function Home() {
  return (
    <div className="">
  <div>
    <div>
    <h1 className="abouttitle">Who we are?</h1>
    <p className='abouttext'>A community-based website that fosters teamwork among travelers seeking to explore new places has the potential to revolutionize the way we travel. This platform brings together like-minded individuals who share a passion for adventure and discovery. By pooling their collective knowledge and experiences, these travelers can create a valuable resource that offers invaluable insights, tips, and recommendations. Through collaboration and cooperation, this website empowers individuals to make informed decisions about destinations, accommodations, transportation, and local attractions. It cultivates a supportive community where members inspire and uplift one another, fostering a sense of camaraderie and encouraging exploration beyond one's comfort zone. Together, they embark on memorable journeys, forging connections and uncovering hidden gems along the way. This community-based website transforms travel into a shared endeavor, enabling individuals to collectively broaden their horizons and create lifelong memories.</p>
    </div>
    <div className="blockAbout">
  </div>
    <img className="fotoAbout" src={require('./photos/aboutUS.png')}>
      </img>
      </div>

  <footer>
      <div className='legal2'>
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
