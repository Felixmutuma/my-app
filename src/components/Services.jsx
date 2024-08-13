import React from 'react';

// Example images for each service
const serviceImages = {
  customSoftware: 'src/assets/images/Custom Software Development in India.jpeg',
  uiUxDesign: 'src/assets/images/UI-UX design.jpeg',
  webAppDevelopment: 'src/assets/images/Web development.jpg',
  mobileAppDevelopment: 'src/assets/images/Mobile devt.jpeg',
  softwareMaintenance: 'src/assets/images/Software Maintenance.jpeg',
  projectManagement: 'src/assets/images/Project Management.jpeg',
};

const services = [
  { id: 1, title: 'Custom Software Development', image: serviceImages.customSoftware },
  { id: 2, title: 'UI/UX Design', image: serviceImages.uiUxDesign },
  { id: 3, title: 'Web Application Development', image: serviceImages.webAppDevelopment },
  { id: 4, title: 'Mobile App Development', image: serviceImages.mobileAppDevelopment },
  { id: 5, title: 'Software Maintenance and Support', image: serviceImages.softwareMaintenance },
  { id: 6, title: 'Project Management', image: serviceImages.projectManagement },
];

const ServicesOffered = () => {
  const handleBookNow = (service) => {
    alert(`Booking service: ${service.title}`);
  };

  const cardStyle = {
    backgroundColor: '#333333',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    color: '#ffffff',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  };

  const cardHoverStyle = {
    ...cardStyle,
    transform: 'scale(1.05)',
  };

  const buttonStyle = {
    backgroundColor: '#FFD700',
    color: '#333333',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#FFC107',
  };

  return (
    <div style={{ backgroundColor: '#242424', padding: '20px', justifyContent: 'center' }}>
      {services.map(service => (
        <div
          key={service.id}
          style={cardStyle}
          //onMouseOver={(e) => e.currentTarget.style = { ...cardStyle, ...cardHoverStyle }}
          //onMouseOut={(e) => e.currentTarget.style = cardStyle}
        >
          <img src={service.image} alt={service.title} style={{ width: '30%', height: '30%', borderRadius: '8px' }} />
          <h3>{service.title}</h3>
          <button
            style={buttonStyle}
            // onMouseOver={(e) => e.currentTarget.style = { ...buttonStyle, ...buttonHoverStyle }}
            //onMouseOut={(e) => e.currentTarget.style = buttonStyle}
            onClick={() => handleBookNow(service)}
          >
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default ServicesOffered;
