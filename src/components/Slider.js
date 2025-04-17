import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import designImage from "./design.png";
import page1 from "./page2.png";
import page2 from "./page4.png";

// Global Reset
const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.background}) no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  color: white;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  z-index: ${(props) => (props.active ? 1 : 0)};
  padding: 0 80px;
`;

const SlideContent = styled.div`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 38px;
  font-weight: bold;
  margin: 0 0 10px;
`;

const Subtitle = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #e0e0e0;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #d0d0d0;
`;

const LearnMoreButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  background-color: #ff3c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e60000;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 16px;
  font-size: 24px;
  cursor: pointer;
  z-index: 3;

  &.left {
    left: 10px;
  }

  &.right {
    right: 20px;
  }

  &:hover {
    background-color: rgba(255, 0, 0, 0.7);
  }
`;

const slidesData = [
  {
    background: designImage,
    title:
      "Rapid identification of raw materials and excipients of chemical drugs and biochemical drugs",
    description:
      "High-speed identification technology with portable capability for on-site testing in pharma, biotech, and chemical industries.",
  },
  {
    background: page1,
    title: "RAMAN HANDHELD IDENTIFIER & FT-IR SPECTROMETER",
    description:
      "Useful, fast, non-destructive and accurate identification for drug, explosives,\nhazardous chemicals, ivory, raw materials and medicinal materials",
  },
  {
    background: page2,
    title: "RAMAN HANDHELD IDENTIFIER & FT-IR SPECTROMETER",
    description:
      "Useful, fast, non-destructive and accurate identification for drug, explosives,\nhazardous chemicals, ivory, raw materials and medicinal materials",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slidesData.length) % slidesData.length
    );
  };

  return (
    <>
      <GlobalStyle />
      <SliderWrapper>
        {slidesData.map((slide, index) => (
          <Slide
            key={index}
            active={index === currentSlide}
            background={slide.background}
          >
            <SlideContent>
              {slide.title && <Title>{slide.title}</Title>}
              {slide.subtitle && <Subtitle>{slide.subtitle}</Subtitle>}
              {slide.description && (
                <Description>{slide.description}</Description>
              )}
              <LearnMoreButton>LEARN MORE</LearnMoreButton>
            </SlideContent>
          </Slide>
        ))}
        <Button className="left" onClick={prevSlide}>
          ❮
        </Button>
        <Button className="right" onClick={nextSlide}>
          ❯
        </Button>
      </SliderWrapper>
    </>
  );
};

export default Slider;
