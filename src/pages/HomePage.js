import React from 'react';

function HomePage() {
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to Your Website</h1>
        <p>Your website's tagline or introductory text can go here.</p>
      </header>
      <main>
        <section>
          <h2>About Us</h2>
          <p>
            We are a company dedicated to providing innovative solutions for
            our customers. Learn more about our mission and values.
          </p>
        </section>
        <section>
          <h2>Our Services</h2>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Your Company</p>
      </footer>
    </div>
  );
}

export default HomePage;
