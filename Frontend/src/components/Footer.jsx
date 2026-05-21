import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-section">
          <h2 className="footer-logo">FreshKart 🛒</h2>

          <p className="footer-text">
            FreshKart delivers fresh groceries, vegetables, fruits,
            dairy products and daily essentials directly to your
            doorstep with lightning fast delivery.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/tracking">Track Order</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-section">
          <h3>Categories</h3>

          <ul>
            <li>Fresh Fruits</li>
            <li>Vegetables</li>
            <li>Dairy Products</li>
            <li>Beverages</li>
            <li>Snacks</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>

          <p>
            <FaMapMarkerAlt /> Cuttack, Odisha, India
          </p>

          <p>
            <FaPhoneAlt /> +91 9876543210
          </p>

          <p>
            <FaEnvelope /> support@freshkart.com
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 FreshKart. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;