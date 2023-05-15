import React, { Fragment, useEffect, useState } from "react";
import { testimonialData } from "../common/common";
import SlideControls from "../common/slidecontrols";
import { QuatationMark } from "../images";
import { SECONDARY_COLOR, WHITE_COLOR } from "../styles/theme";
import { SectionText, SectionTitle } from "../styles/typography";
import {
  AuthorTitle,
  TestimonialAuthor,
  TestimonialAuthorContainer,
  TestimonialCommaContainer,
  TestimonialCommas,
  TestimonialInfoLeft,
  TestimonialInfoRight,
  TestimonialItem,
  TestimonialItemContainer,
  TestimonialProfile,
  TestimonialsContainer,
} from "./sections.styled";

function Testimonials({ mobile }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoScroll = true;
  let slideTimer;
  let scrollTimer = 10000;

  const handleNext = () => {
    setCurrentSlide(
      currentSlide === testimonialData?.length - 1 ? 0 : currentSlide + 1
    );
  };

  const handlePrevious = () => {
    setCurrentSlide(
      currentSlide === 0 ? testimonialData?.length - 1 : currentSlide - 1
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
    <TestimonialsContainer mobile={mobile}>
      <SectionTitle color={WHITE_COLOR}>Brand people</SectionTitle>
      <SectionText color={WHITE_COLOR}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        condimentum suscipit nisi.
      </SectionText>
      <TestimonialItemContainer>
        {testimonialData?.map((item, index) => {
          return (
            <Fragment key={index}>
              {index === currentSlide && (
                <TestimonialItem key={index}>
                  <TestimonialInfoLeft>
                    <TestimonialCommaContainer>
                      <TestimonialCommas src={QuatationMark} alt="Quatation Mark"/>
                    </TestimonialCommaContainer>
                    <TestimonialProfile src={item?.image} alt="Testimonials"/>
                  </TestimonialInfoLeft>
                  <TestimonialInfoRight>
                    <SectionText color={WHITE_COLOR} italic>
                    {item?.message}
                    </SectionText>
                    <TestimonialAuthorContainer>
                      <TestimonialAuthor>{item?.name}</TestimonialAuthor>
                      <AuthorTitle>{item?.title}</AuthorTitle>
                    </TestimonialAuthorContainer>
                  </TestimonialInfoRight>
                </TestimonialItem>
              )}
            </Fragment>
          );
        })}
      </TestimonialItemContainer>
      <SlideControls
        onClickNext={handleNext}
        onClickPrevious={handlePrevious}
        color={WHITE_COLOR}
        bgrColor="transparent"
        hoverColor={WHITE_COLOR}
        border={`2px solid ${WHITE_COLOR}`}
      />
    </TestimonialsContainer>
  );
}

export default Testimonials;
