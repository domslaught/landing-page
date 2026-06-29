import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <img src={`${import.meta.env.BASE_URL}cefi-logo.png`} alt="Cefi Logo" className="footer-logo" />
          <p className="footer-description">
            Calayan Educational Foundation Inc. One of the best institutions in Quezon Province.
          </p>
        </div>

        <div className="footer-grid">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Student Admission</a></li>
              <li><a href="#">CEFI Neo LMS</a></li>
              <li><a href="#">Online Grade Inquiry</a></li>
              <li><a href="#">Online Clearance</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Scholarship Application</a></li>
              <li><a href="#">Alumni ID</a></li>
              <li><a href="#">Student Portal</a></li>
              <li><a href="#">Campus Map</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <p>Quezon Ave., Lucena City, Philippines</p>
            <p>Email: info@cefi.edu.ph</p>
            <p>Phone: (042) 123-4567</p>
          </div>

          <div className="footer-column">
            <h4>Connect With Us</h4>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-column footer-map-col">
            <h4>Find Us</h4>

            <div className="footer-map-frame-small">
              <iframe
                title="CEFI Campus Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.867!2d121.6157!3d13.9328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd41a9a3a2b92d%3A0xc7a8a61e4b8b4a35!2sCalayan%20Educational%20Foundation%2C%20Inc.!5e0!3m2!1sen!2sph!4v1718000000000!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Calayan Educational Foundation Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
