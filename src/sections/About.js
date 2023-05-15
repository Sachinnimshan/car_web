import React, { Fragment, useEffect, useState } from "react";
import { carSlideData } from "../common/common";
import SlideControls from "../common/slidecontrols";
import { PlayIcon } from "../icons";
import { AboutImg, CarSlideImg2 } from "../images";
import {
  SectionHeader,
  SectionSubTitle,
  SectionText,
  SectionTitle,
  SectionTitleContainer,
  SectionTitleTop,
} from "../styles/typography";
import {
  AboutBanner,
  AboutBottomContainer,
  AboutBottomLeft,
  AboutBottomRight,
  AboutContainer,
  AboutInfoBottom,
  AboutRedBanner,
  AboutRedBannerText,
  AboutSlideContainer,
  AboutTopRight,
  AboutTopSection,
  AboutVideoImg,
  PlayButton,
  SlideShowImg,
} from "./sections.styled";

function About({ mobile, ref }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoScroll = true;
  let slideTimer;
  let scrollTimer = 10000;

  const handleNext = () => {
    setCurrentSlide(
      currentSlide === carSlideData?.length - 1 ? 0 : currentSlide + 1
    );
  };

  const handlePrevious = () => {
    setCurrentSlide(
      currentSlide === 0 ? carSlideData?.length - 1 : currentSlide - 1
    );
  };

  const invokeAutoScroll = () => {
    slideTimer = setInterval(handleNext, scrollTimer);
  };

  useEffect(() => {
    if (autoScroll) {
      invokeAutoScroll();
    }
    return () => {
      clearInterval(slideTimer);
    };
  }, [currentSlide]);
  return (
    <AboutContainer mobile={mobile} ref={ref}>
      <AboutTopSection>
        <AboutBanner src={AboutImg} alt="Wheels" />
        <AboutTopRight>
          <SectionTitleContainer>
            <SectionTitleTop>
              <SectionHeader>About</SectionHeader>
              <SectionTitle>WHEELS ZQ6</SectionTitle>
            </SectionTitleTop>
            <SectionSubTitle>Discover Our World</SectionSubTitle>
          </SectionTitleContainer>

          <SectionText marginBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sodales justo in nisi mollis aliquam. Integer congue fringilla
            cursus. In mi ipsum, consequat non venenatis ut, commodo sed dolor.
            Aliquam erat volutpat.
            <br />
            <br />
            Phasellus blandit tincidunt nisi nec ultricies. Ut ac condimentum
            dui. Maecenas sollicitudin magna dolor, eget efficitur metus
            tristique sed. Mauris sed egestas lorem. Fusce ut volutpat velit, at
            porta arcu.
          </SectionText>
        </AboutTopRight>
      </AboutTopSection>
      <AboutBottomContainer>
        <AboutBottomLeft>
          <AboutRedBanner>
            <AboutRedBannerText>OUR INNOVATIVE DESIGN</AboutRedBannerText>
            <AboutRedBannerText small>Concept Racing Cars</AboutRedBannerText>
          </AboutRedBanner>
          <AboutVideoImg image={CarSlideImg2}>
            <PlayButton>
              <PlayIcon />
            </PlayButton>
          </AboutVideoImg>
        </AboutBottomLeft>
        <AboutBottomRight>
          <AboutSlideContainer>
            {carSlideData?.map((item, index) => {
              return (
                <Fragment key={index}>
                  {index === currentSlide && (
                    <SlideShowImg src={carSlideData[index].image} />
                  )}
                </Fragment>
              );
            })}
            <SlideControls
              onClickPrevious={handlePrevious}
              onClickNext={handleNext}
            />
          </AboutSlideContainer>
          <AboutInfoBottom>
            <SectionText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse sodales justo in nisi mollis aliquam. Integer congue
              fringilla cursus. In mi ipsum, consequat non venenatis ut, commodo
              sed dolor. Aliquam erat volutpat.
            </SectionText>
          </AboutInfoBottom>
        </AboutBottomRight>
      </AboutBottomContainer>
    </AboutContainer>
  );
}

export default About;
