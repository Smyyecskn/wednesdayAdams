import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="social-icons">
      <Link to="#">
        <FaFacebook />
      </Link>

      <Link to="#">
        <FaSquareInstagram />
      </Link>

      <Link to="#">
        <FaTwitter />
      </Link>

      <Link to="#">
        <FaGithub />
      </Link>
      <div className="copyright">&copy; Copyright 2023</div>
    </div>
  );
};

export default Footer;
