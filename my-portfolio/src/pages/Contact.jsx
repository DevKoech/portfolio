import React from 'react';

const Contact = () => {
  const contactMethods = [
    {
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      title: 'Email',
      value: 'manuelkoech2003@gmail.com',
      link: 'mailto:manuelkoech2003@gmail.com'
    },
    {
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'GitHub',
      value: 'manuelkoech',
      link: 'https://github.com/manuelkoech'
    },
    {
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: 'LinkedIn',
      value: 'manuelkoech',
      link: 'https://linkedin.com/in/manuelkoech'
    }
  ];
 return (
    <section className="contact-section">
      <div className="contact-header">
        <h2 className="section-title gradient-text">Get In Touch</h2>
        <p className="contact-intro">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info-section">
          <div className="contact-card">
            <h3 className="contact-card-title">Contact Information</h3>
            <p className="contact-card-copy">
              Drop a message anytime via email or connect with me on GitHub / LinkedIn.
            </p>
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className="contact-method"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="contact-method-icon">
                    {method.icon}
                  </div>
                  <div className="contact-method-content">
                    <h4 className="contact-method-title">{method.title}</h4>
                    <p className="contact-method-value">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
