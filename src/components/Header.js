import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isAuthenticated, onLogout }) => (
  <header className="App-header">
      <nav><ul className="container">
          <li>
            <Link to="/">Visit San Diego</Link>
          </li>
          <li>
            <Link to="/attractions">Attractions</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/weather">Weather</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
            {isAuthenticated ? (
                <>
                  <li>
                    <button
                      className="linkLike"
                      onClick={e => {
                        e.preventDefault();
                        onLogout();
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </>
            ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
            )}
              </ul>
          </nav>
 <div>

 </div>

  </header>
);
export default Header;
