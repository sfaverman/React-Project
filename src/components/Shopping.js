import React from 'react';
import { Link } from "react-router-dom";

import Img3 from './images/bird-l.jpg';

import Video from './Video.js';


// Create a ES6 class component
    class Shopping extends React.Component {

// Use the render function to return JSX component
    render() {
        return (
   <main id="shopping">

        <h1>Best Shopping Experience in San Diego</h1>
        <p>Since the weather in San Diego is great most of the time, outdoor shopping is popular. From high-end malls to upscale boutiques to beachside shops, San Diego is full of great places to go shopping.  </p>

    <section>
        <div className="gallery">
         <article className="card-rounded">
             <h2>Fashion Valley Center</h2>
             <Video youtubeId ="2Kn1Ln0mSr4" />
             <p> Out of the class of San Diego malls, <b>Fashion Valley</b> has arguably the best of the upscale stores. Nordstrom, JC Penney, Macy&apos;s, Nieman Marcus, and San Diego&apos;s only Bloomingdale's anchor this well-appointed two-level outdoor mall. Where else will you find a Tiffany, Burberry, and Hermes store? Good restaurants and an AMC multiplex make this a place to go beyond shopping. </p><p><b>Tip:</b> Parking is easiest and plentiful in the south-side parking structures. </p>
            <Link className="btn" to={`/new-todo-title/Shopping at Fashion Valley`}>Add to Todos</Link>
         </article>
         <article className="card-rounded">
             <h2>Westfield UTC</h2>
            <Video youtubeId ="ZvsVbaioiYo" />
             <p>Westfield UTC is a pleasant outdoor mall. Located in the Golden Triangle area and recently renovated, the Westfield UTC presents the ultimate shopping & leisure experience to one of the most elite trade areas in the country. The much-used ice skating rink distinguishes the mall from other Westfield malls. </p><p><b>Tip:</b> The mall underwent an expansion in 2017 to give the mall more of a first-class, resort feel, including courtyards, event space and high-end restaurants.</p>
             <Link className="btn" to={`/new-todo-title/Shopping at UTC`}>Add to Todos</Link>

         </article>
         <article className="card-rounded">
             <h2>Carlsbad Premium Outlet</h2>
            <Video youtubeId ="7UL8YCmonLI" />
             <p> Conveniently located right off the intersection of I-5 and Palomar Airport Road, Carlsbad Premium Outlets® is one of San Diego&apos; premier shopping destinations. It features 86 outlet stores offering exceptional brands with extraordinary savings of 25% to 65% in an attractive outdoor village...</p><p><b>Tip:</b> Shop more for less at outlet fashion brands like Tommy Hilfiger, Adidas, Michael Kors & more.</p>
        <Link className="btn" to={`/new-todo-title/Shopping at Carlsbad Outlet`}>Add to Todos</Link>
         </article>
        </div>
    </section>
   </main>

      );
      }
    }
export default Shopping;
