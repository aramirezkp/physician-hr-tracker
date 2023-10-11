import React from 'react';

function ServicesPage() {
  const services = [
    {
      title: 'Service 1',
      description: 'A brief description of Service 1 goes here.',
    },
    {
      title: 'Service 2',
      description: 'A brief description of Service 2 goes here.',
    },
    {
      title: 'Service 3',
      description: 'A brief description of Service 3 goes here.',
    },
  ];

  return (
    <div className="services-page">
      <header>
        <h1>Our Services</h1>
        <p>Explore the services we offer to our clients.</p>
      </header>
      <main>
        {services.map((service, index) => (
          <section key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </section>
        ))}
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Your Company</p>
      </footer>
    </div>
  );
}

export default ServicesPage;
