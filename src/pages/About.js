import React from 'react';

function AboutPage() {
  return (
    <div className="about-page">
      <header>
        <h1>About Us</h1>
        <p>Learn about our company and our mission.</p>
      </header>
      <main>
        <section>
          <h2>Our Story</h2>
          <p>
            We started our journey in the year XXXX with a vision to provide
            innovative solutions to our clients.
          </p>
        </section>
        <section>
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver high-quality services and products that
            exceed our clients' expectations.
          </p>
        </section>
        <section>
          <h2>Team</h2>
          <p>
            Meet our talented and dedicated team members who make it all
            possible.
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Your Company</p>
      </footer>
    </div>
  );
}

export default AboutPage;
