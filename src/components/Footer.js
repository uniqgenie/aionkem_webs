import styled from "styled-components";
import { FaPhoneAlt, FaRegClock, FaEnvelope } from "react-icons/fa";
import backgroundImage1 from "./spec.jpg";

const FooterWrapper = styled.footer`
  background-image: url(${backgroundImage1});
  background-size: cover;
  background-position: center;
  color: #fff;
  padding: 60px;
  text-align: center;
  position: relative;

  .overlay {
    background-color: rgba(0, 0, 0, 0.75);
    padding: 50px 30px;
    border-radius: 10px;
  }

  .main-text {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 30px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
  }

  .subscribe-btn {
    background-color: #e30000;
    color: white;
    padding: 14px 32px;
    border: none;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #b80000;
    }
  }

  .footer-columns {
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    flex-wrap: wrap;
    text-align: left;
    gap: 20px;
  }

  .column {
    flex: 1;
    min-width: 260px;
  }

  .column h3 {
    font-size: 1.1rem;
    margin-bottom: 15px;
    color: #ffc700;
    border-bottom: 2px solid #e30000;
    display: inline-block;
    padding-bottom: 4px;
  }

  .column p {
    font-size: 0.95rem;
    margin: 8px 0;
    line-height: 1.6;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .bottom-bar {
    border-top: 1px solid #666;
    margin-top: 50px;
    padding-top: 15px;
    font-size: 0.85rem;
    color: #ccc;
  }

  @media (max-width: 768px) {
    .footer-columns {
      flex-direction: column;
      text-align: center;

      .column {
        text-align: center;
        margin-bottom: 20px;
      }

      .column p {
        justify-content: center;
      }
    }

    .main-text {
      font-size: 1.2rem;
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <div className="overlay">
      <div className="main-text">
        FOR INQUIRIES ABOUT OUR PRODUCTS OR PRICELIST, PLEASE LEAVE YOUR EMAIL
        TO US AND WE WILL BE IN TOUCH WITHIN 24 HOURS.
      </div>
      <button className="subscribe-btn">SUBSCRIBE</button>

      <div className="footer-columns">
        <div className="column">
          <h3>CONTACT</h3>
          <p>
            <FaPhoneAlt /> +91 9940634002
          </p>
          <p>
            <FaRegClock /> 7 Days a Week, 10:00 AM – 6:00 PM
          </p>
          <p>
            <FaEnvelope /> info@aionkem.com
          </p>
        </div>

        <div className="column">
          <h3>ABOUT US</h3>
          <p>
            Aionkem Private Limited is a customer-centric organization deeply
            committed to serving the analytical instrument industry across
            India. Driven by a passion for excellence, we specialize in
            providing best-in-class analytical laboratory instruments,
            high-quality reagents, top-performing reference standards, and
            essential consumables, all tailored to meet the diverse requirements
            of our valued customers.Aionkem Private Limited equips laboratories
            with best-in-class analytical instruments, directly translating to
            improved efficiency and reduced analytical expenditure. Our
            steadfast dedication to quality guarantees reliable and accurate
            results, empowering our clients to make critical decisions with
            absolute confidence.
          </p>
        </div>
      </div>

      <div className="bottom-bar">
        © 2024 Aionkem Company Prvt Ltd. All Rights Reserved.
      </div>
    </div>
  </FooterWrapper>
);

export default Footer;
