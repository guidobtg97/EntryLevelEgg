import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-logo"><span>Entry</span> Level</div>
      <div className="footer-links">
        <Link to="/about" className="footer-link">Acerca de</Link>
        <Link to="/contact" className="footer-link">Contacto</Link>
        <Link to="/terms" className="footer-link">Términos y condiciones</Link>
      </div>
    </footer>
  );
};

export default Footer;
