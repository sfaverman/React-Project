import React from 'react';
import { Link } from "react-router-dom";

import Video from './Video.js';
import Img_head from './images/rocks-ocean-birds-l.jpg';
import Sun from './images/sun.png';

// Create a ES6 class component
    class Home extends React.Component {
// Use the render function to return JSX component
    render() {
        return (
   <main id="home">
            <section id="welcome">
            <img id="img-head" src={Img_head} alt="ocean rocks and birds" />
            <h1>Welcome to Sunny San Diego!</h1>


            <div className="title">
                <p>Visit San Diego!</p>
            </div>
            <section className="grid col2">
                <div>
                    <p>
                        Welcome to Beautiful and dynamic San Diego! On the coast of the Pacific Ocean in Southern California. San Diego is the eighth-largest city in the United State and second-largest city in California.
                        One of the West Coast’s most attractive and under-valued destinations, San Diego is an ultra fun, laid back community revolving around beach life, fine dining, emerging arts and culture.
                    </p>
                </div>
                <div>
                    <Video  youtubeId="JzRELkRr4ns\&rel=0" />
                </div>
            </section>
        </section>

        <section>
        <div className="gallery">
         <article className="card">
             <h2> <img className="sun-icon" src={Sun} alt="sun icon" /> Attractions</h2>
             <p> San Diego is known as <b>America&apos;s Finest City</b> which offers a wide array of things to see and do from sandy beaches to bustling nightlife, from the theater to wild animals. The top attractions to visit in San Diego are: Balboa Park; La Jolla Cove; San Diego Zoo; Coronado Island; Old Town; Seaport Village  ... </p>
              <Link to="/attractions" className="btn">Read More</Link>
         </article>
         <article className="card">
             <h2><img className="sun-icon" src={Sun} alt="sun icon" /> Events</h2>
             <p><b>Coronado Island</b> has a lot of charm with historic old buildings, fun restaurants, great beaches and beautiful views of the San Diego skyline. The hotel del Coronado is definitely worth staying at or just to go and visit. The beach is pristine and beautiful at sunset for that loved one to walk.  The Coronado Bay Bridge offers excellent view of downtown San Diego and the city of Coronado.  </p>
            <Link to="/events" className="btn">Read More</Link>
         </article>
         <article className="card">
             <h2><img className="sun-icon" src={Sun} alt="sun icon" /> Beaches</h2>
             <p>Year-round sunshine and miles of beautiful surf-washed coastline make San Diego a perfect place to visit for a <b>beach vacation</b>. Want to take the kids for a day of sun, sand, and sea? The best family-friendly beaches are Del Mar, Silver Strand, Coronado Beach, and La Jolla Shores. </p>
             <Link to="/beaches" className="btn" target="_blank">Read More</Link>
         </article>
         <article className="card">
             <h2><img className="sun-icon" src={Sun} alt="sun icon" /> Shopping</h2>
             <p>San Diego has a variety of <b>shopping malls</b> dotted all around the city and county. A trip to the mall in San Diego can mean a little shopping, something to eat, and then a movie experience, all without having to drive between. San Diego includes several historically rich locations for fascinating and fun shopping experiences. </p>
              <Link to="/shopping" className="btn">Read More</Link>
         </article>
         <article className="card" >
             <h2><img className="sun-icon" src={Sun} alt="sun icon" />Restaurants</h2>
             <p>From stylish dining rooms to hip beachside eats, the <b>best restaurants</b> in San Diego are exploding with creativity and bonafide kitchen chops and a gloriously sunny climate means dining al fresco or in chic, open-air interiors. So if you’re headed to San Diego, make sure to bring your beach towel and your appetite. </p>
            <Link to="/restaurants" className="btn" target="_blank">Read More</Link>
            </article>
             <article className="card">
             <h2><img className="sun-icon" src={Sun} alt="sun icon" /> Hotels</h2>
             <p> At the <b> Old Town</b> San Diego State Historic Park, you can travel back in time and soak up some of the rich culture from San Diego's early days. The park recreates the feel of the Mexican and early American periods, from 1821 to 1872, when this settlement grew from a small Mexican pueblo. </p>
             <Link to="/hotels" className="btn" target="_blank">Read More</Link>
         </article>
        </div>
    </section>
   </main>

      );
      }
    }
export default Home;
