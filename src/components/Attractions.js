import React from 'react';

import Img1 from './images/balboa.jpg';
import Img2 from './images/coronado.jpg';
import Img3 from './images/bird-l.jpg';
import Img4 from './images/la-jolla.jpg';
import Img5 from './images/elephants.jpg';
import Img6 from './images/old-town.jpg';


// Create a ES6 class component
    class Attraction extends React.Component {
// Use the render function to return JSX component
    render() {
        return (
   <main id="listAttractions">

        <h1>Best Attractions in San Diego</h1>
        <p>Located in Southern California, not far from the Mexico border, San Diego is the oldest town in California. It has an enchanting natural beauty and a mild Mediterranean climate, with plenty of sunshine — perfect for outdoor adventures. Some of the city&apos; most popular tourist attractions are the museums, gardens, and Spanish Colonial-style architecture found in Balboa Park; the world famous San Diego Zoo; and the Midway Aircraft Carrier Museum. </p>

    <section>
        <div className="gallery">
         <article className="card-rounded">
             <h2>Balboa Park</h2>
             <img src={Img1} alt="balboa park" />
             <p> <b>Balboa Park</b> is a one-stop wonderland for tourists. This 1,400-acre site encompasses historical buildings, numerous museums, gardens, and green space. The park was created for the Panama California Exhibition of 1915-1916, and most of the buildings remain from that event. The predominant architecture is Spanish-style, with low-rise buildings that blend in with the natural surroundings. </p>
             <button className="btn"> Add to Todos
             </button>
         </article>
         <article className="card-rounded">
             <h2>Coronado</h2>
             <img src={Img2} alt="Coronado" />
             <p><b>Coronado Island</b> has a lot of charm with historic old buildings, fun restaurants, great beaches and beautiful views of the San Diego skyline. The hotel del Coronado is definitely worth staying at or just to go and visit. The beach is pristine and beautiful at sunset for that loved one to walk.  The Coronado Bay Bridge offers excellent view of downtown San Diego and the city of Coronado.  </p>
             <button className="btn"> Add to Todos
             </button>
         </article>
         <article className="card-rounded">
             <h2>Beaches</h2>
             <img src={Img3} alt="Flying Bird" />
             <p>Year-round sunshine and miles of beautiful surf-washed coastline make San Diego a perfect place to visit for a beach vacation. Want to take the kids for a day of sun, sand, and sea? The best family-friendly beaches are Del Mar, Silver Strand, Coronado Beach, and La Jolla Shores. </p>
             <button className="btn"> Add to Todos
             </button>
         </article>
         <article className="card-rounded">
             <h2>La Jolla</h2>
             <img src={Img4} alt="La Jolla shores" />
             <p><b>La Jolla.</b>There is a reason La Jolla, California is known as The Jewel of America’s Finest City! With a rich history steeped in the fantastical tales of Dr. Seuss and old Hollywood, our small coastal town is one of the most unique in all of San Diego County.  </p>
             <button className="btn"> Add to Todos
             </button>
         </article>
         <article className="card-rounded" >
             <h2>Zoo</h2>
             <img src={Img5} alt="elefants at zoo" />
             <p><b>San Diego Zoo</b> is one of the largest and most famous zoos in the United States. Visiting this family-friendly attraction is also one of the top things to do in San Diego with kids. The San Diego Zoo Safari Park immerses you in an active, hands-on safari experience where herds of animals roam natural habitats in a vast reserve. </p>
             <button className="btn"> Add to Todos
             </button>
         </article>
             <article className="card-rounded">
             <h2>Old Town</h2>
             <img src={Img6} alt="old town market" />
            <p> At the <b> Old Town</b> San Diego State Historic Park, you can travel back in time and soak up some of the rich culture from San Diego's early days. The park recreates the feel of the Mexican and early American periods, from 1821 to 1872, when this settlement grew from a small Mexican pueblo. </p>
            <button className="btn"> Add to Todos
             </button>
         </article>
        </div>
    </section>
   </main>

      );
      }
    }
export default Attraction;
