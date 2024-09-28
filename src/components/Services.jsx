import React from 'react';
import './Services.css'

// Example images for each service
const serviceImages = {
  customSoftware: 'src/assets/images/Custom Software Development in India.jpeg',
  uiUxDesign: 'src/assets/images/UI-UX design.jpeg',
  webAppDevelopment: 'src/assets/images/Web-dev.jpeg',
  mobileAppDevelopment: 'src/assets/images/Mobile devt.jpeg',
  softwareMaintenance: 'src/assets/images/Software Maintenance.jpeg',
  projectManagement: 'src/assets/images/Project Management.jpeg',
};

const services = [
  { 
    id: 1, 
    title: 'Custom Software Development', 
    image: serviceImages.customSoftware, 
    description: 'Transform your unique business needs into powerful software solutions. Our custom software development service ensures that your business processes are streamlined, efficient, and tailored to your goals. Whether you need a comprehensive enterprise system or a simple application to solve a specific challenge, we have the expertise to bring your vision to life. Let us build software that grows with you.'
  },
  { 
    id: 2, 
    title: 'UI/UX Design', 
    image: serviceImages.uiUxDesign, 
    description: 'Create exceptional user experiences that keep your customers coming back. Our UI/UX design services blend creativity with functionality, delivering visually stunning interfaces that are intuitive and engaging. We focus on user-centered design principles, ensuring that every interaction is seamless and enjoyable. Elevate your brand with designs that not only look great but also perform flawlessly.'
  },
  { 
    id: 3, 
    title: 'Web Application Development', 
    image: serviceImages.webAppDevelopment, 
    description: 'Empower your business with dynamic web applications that drive results. Our web application development service covers everything from e-commerce platforms to interactive dashboards, all crafted with the latest technologies. We ensure your web applications are scalable, secure, and optimized for performance, providing your users with a smooth and responsive experience across all devices.'
  },
  { 
    id: 4, 
    title: 'Mobile App Development', 
    image: serviceImages.mobileAppDevelopment, 
    description: 'Reach your audience on the go with innovative mobile apps. Our mobile app development service delivers high-quality, cross-platform solutions tailored to your business needs. From concept to deployment, we focus on creating apps that are fast, reliable, and user-friendly. Engage your customers with powerful mobile experiences that keep your brand at their fingertips.'
  },
  { 
    id: 5, 
    title: 'Software Maintenance and Support', 
    image: serviceImages.softwareMaintenance, 
    description: 'Keep your software running smoothly with our comprehensive maintenance and support services. We provide ongoing support to ensure your applications remain secure, up-to-date, and fully functional. From bug fixes and performance optimization to feature enhancements, we\'re here to ensure your software continues to meet your evolving business needs.'
  },
  { 
    id: 6, 
    title: 'Project Management', 
    image: serviceImages.projectManagement, 
    description: 'Achieve your project goals on time and within budget with our expert project management services. We take a strategic approach to managing your projects, using proven methodologies to ensure efficient planning, execution, and delivery. Our experienced project managers work closely with you to navigate complexities, mitigate risks, and drive your projects to success.'
  },
];


const ServicesOffered = () => {
  const handleBookNow = (service) => {
    alert(`Booking service: ${service.title}`);
  };

  
  return (
    <>
      <div className='services-container'>
        {services.map(service => (
        <div className='service-card' key={service.id}>
            <div>
              <img src={service.image} alt={service.title}  />
              <h3>{service.title}</h3>
              <button className='button'>Book now</button>
            </div>
            <div className='description'>
              <p>{service.description}</p>
            </div>
        </div>
          
        ))}

      </div>
    </>
  );
};

export default ServicesOffered;
