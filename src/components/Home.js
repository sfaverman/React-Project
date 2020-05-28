import React from 'react';

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
            <p>
                Welcome to Beautiful and dynamic San Diego! On the coast of the Pacific Ocean in Southern California . San Diego is the eighth-largest city in the United State and second-largest city in California.
                One of the West Coast’s most attractive and under-valued destinations, San Diego is an ultra fun, laid back community revolving around beach life, fine dining, emerging arts and culture.
            </p>
            <p>
               </p>
            <div className="title">
                <p>Visit San Diego!</p>
            </div>
       </section>

    <section>
        <div className="gallery">
         <article className="card">
             <h2> <img class="sun-icon" src={Sun} alt="sun icon" /> Attractions</h2>
             <p> San Diego is known as America&apos;s Finest City which offers a wide array of things to see and do from sandy beaches to bustling nightlife, from the theater to wild animals. The top attractions to visit in San Diego are: Balboa Park; La Jolla Cove; San Diego Zoo; Coronado Island; Old Town; Seaport Village  ... </p>
             <button className="btn">Read More</button>
         </article>
         <article className="card">
             <h2><img class="sun-icon" src={Sun} alt="sun icon" /> Events</h2>
             <p><b>Coronado Island</b> has a lot of charm with historic old buildings, fun restaurants, great beaches and beautiful views of the San Diego skyline. The hotel del Coronado is definitely worth staying at or just to go and visit. The beach is pristine and beautiful at sunset for that loved one to walk.  The Coronado Bay Bridge offers excellent view of downtown San Diego and the city of Coronado.  </p>
             <button className="btn">Read More</button>
         </article>
         <article className="card">
             <h2><img class="sun-icon" src={Sun} alt="sun icon" /> Beaches</h2>
             <p>Year-round sunshine and miles of beautiful surf-washed coastline make San Diego a perfect place to visit for a beach vacation. Want to take the kids for a day of sun, sand, and sea? The best family-friendly beaches are Del Mar, Silver Strand, Coronado Beach, and La Jolla Shores. </p>
             <button className="btn">Read More</button>
         </article>
         <article className="card">
             <h2><img class="sun-icon" src={Sun} alt="sun icon" /> Shopping</h2>
             <p><b>La Jolla.</b>There is a reason La Jolla, California is known as The Jewel of America’s Finest City! With a rich history steeped in the fantastical tales of Dr. Seuss and old Hollywood, our small coastal town is one of the most unique in all of San Diego County.  </p>
             <button className="btn">Read More</button>
         </article>
         <article className="card" >
             <h2><img class="sun-icon" src={Sun} alt="sun icon" />Restaurants</h2>
             <p><b>San Diego Zoo</b> is one of the largest and most famous zoos in the United States. Visiting this family-friendly attraction is also one of the top things to do in San Diego with kids. The San Diego Zoo Safari Park immerses you in an active, hands-on safari experience where herds of animals roam natural habitats in a vast reserve. </p>
             <button className="btn">Read More</button>
         </article>
             <article className="card">
             <h2><img class="sun-icon" src={Sun} alt="sun icon" /> Hotels</h2>
             <p> At the <b> Old Town</b> San Diego State Historic Park, you can travel back in time and soak up some of the rich culture from San Diego's early days. The park recreates the feel of the Mexican and early American periods, from 1821 to 1872, when this settlement grew from a small Mexican pueblo. </p>
            <button className="btn">Read More</button>
         </article>
        </div>
    </section>
   </main>

      );
      }
    }
export default Home;
