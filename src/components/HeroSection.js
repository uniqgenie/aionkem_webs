import styled from "styled-components";
import Slider from "./Slider"; // Import the Slider component

const HeroWrapper = styled.section`
  height: auto;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff; /* Ensure text is visible on the background */
  position: relative; 
  
  h2 {
    font-size: 3em;
    margin: 0;
    z-index: 2; /* Ensure it's above the overlay */
  }

  p {
    font-size: 1.5em;
    margin: 15px 0;
    z-index: 2; /* Ensure it's above the overlay */
  }

  button {
    font-size: 1.2em;
    padding: 10px 20px; /* Added padding */
    z-index: 2; /* Ensure it's above the overlay */
    border: none;
    background-color: #4c6ef5;
    color: white;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #3b5cb8; /* Darker shade on hover */
    }
  }

  }
`;

const HeroSection = () => (
  <HeroWrapper>
    <Slider />
  </HeroWrapper>
);

export default HeroSection;
