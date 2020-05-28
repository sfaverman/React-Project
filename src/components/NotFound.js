import React from "react";
import { Link } from "react-router-dom";
import Mask from './images/mask404.png';

const notFound = () => (
    <article className="not-found">
        <h2>Ooops .. Page Not Found!</h2>
        <div>
            <img src={Mask} alt="page not found" />
        </div>
        <h3>Uh-oh... something is wrong here.</h3>
        <p>
            The page you are looking for might have been removed, had its name changed, or is temporary unavailable.
        </p>
        <p>
            <Link to="/">Return to Home Page</Link>
        </p>

    </article>

);

export default notFound;
