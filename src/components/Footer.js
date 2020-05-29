import React from 'react';

// Create a ES6 class component
    class Footer extends React.Component {
// Use the render function to return JSX component
    render() {
        return (

    <footer className="section text-center">
      <p>
        Visit San Diego!
        &copy; Copyright {new Date().getFullYear()}
      </p>
   </footer>
        );
      }
    }
export default Footer;
