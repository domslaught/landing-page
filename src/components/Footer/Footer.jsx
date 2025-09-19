import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-inner">
            <div className="footer-top">
                <img  src={`${process.env.PUBLIC_URL}/cefi-logo.png`} alt="CEFI Logo" className="footer-logo" />
                <p className="footer-description">
                Calayan Educational Foundation Inc. One of the best institution in Quezon Province.
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
            </div>


        </div>
        <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Calayan Educational Foundation Inc. All rights reserved.</p>
        </div>
    </footer>
  );
}

export default Footer;
