import styled from "styled-components";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Imported the new X icon
import logo from "./logo.png";

const SmallHeader = styled.div`
  background-color: #003366;
  color: white;
  padding: 8px 5%;
  font-size: 0.85rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  .contact-info {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .request-quote {
    background-color: #ffc700;
    border: none;
    padding: 6px 12px;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #e6b800;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    margin-left: 15px;

    a {
      color: white;
      margin-left: 12px;
      font-size: 1.2rem;
      transition: color 0.3s;

      &:hover {
        color: #ffc700;
      }
    }
  }
`;

const HeaderWrapper = styled.header`
  background-color: white;
  color: #002d5c;
  padding: 10px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);

  .logo {
    display: flex;
    align-items: center;

    img {
      height: 45px;
      width: auto;
      object-fit: contain;
    }
  }

  nav {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    a {
      margin: 0 12px;
      font-size: 0.95rem;
      font-weight: 500;
      color: #002d5c;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #ffc700;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    nav {
      margin-top: 10px;
      flex-direction: column;
      align-items: flex-start;

      a {
        margin: 6px 0;
      }
    }
  }
`;

const Header = () => (
  <>
    <SmallHeader>
      <div className="contact-info">
        Email Us: info@aionkem.com | Call Us: +91 9940634002
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button className="request-quote">Request Quote</button>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            title="X"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </SmallHeader>

    <HeaderWrapper>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <a href="#about">About Us</a>
        <a href="#products">Products</a>
        <a href="#software">Software</a>
        <a href="#support">Support</a>
        <a href="#publications">Publications</a>
        <a href="#application-notes">Application Notes</a>
        <a href="#faqs">FAQs</a>
        <a href="#blogs">Blogs</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </HeaderWrapper>
  </>
);

export default Header;
