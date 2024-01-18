import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header bg-dark text-white text-center py-5">
        <h1 className="display-4">Akhilesh Thakur</h1>
        <p className="lead">Delivering Software Solutions</p>
        <p>Office: Darbhanga, Bihar</p>
      </header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#Home">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#Services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#AboutUs">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="container mt-4">
        <section id="Services" className="Home-section">
          <h2>Services</h2>
          <div className="card-deck">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">
                  We create modern and responsive websites tailored to your
                  needs.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Mobile App Development</h5>
                <p className="card-text">
                  We build cross-platform mobile applications for a wide range
                  of industries.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Software Consulting</h5>
                <p className="card-text">
                  Our consulting services help you make informed decisions for
                  your software projects.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="AboutUs" className="Home-section">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel
            quam eget magna efficitur rhoncus. In at lectus libero. Curabitur
            vestibulum dolor eu sagittis volutpat.
          </p>
        </section>
      </main>
      <footer id="Contact" className="Home-footer">
        <p>&copy; 2024 Akhilesh Thakur. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
