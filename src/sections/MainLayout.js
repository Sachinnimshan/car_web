import React, { createRef, useEffect, useRef, useState } from "react";
import { MdHdrOffSelect } from "react-icons/md";
import Footer from "../footer";
import Header from "../header";
import About from "./About";
import Engine from "./Engine";
import Home from "./Home";
import { MainLayoutContainer, Section } from "./sections.styled";
import Speed from "./Speed";
import Technical from "./Technical";
import Testimonials from "./Testimonials";
import Variations from "./Variations";

function MainLayout({ mobile }) {
  const sections = [
    {
      title: "Home",
      component: <Home mobile={mobile} />,
    },
    {
      title: "About",
      component: <Speed mobile={mobile} />,
    },
    {
      title: "Variations",
      component: <Variations mobile={mobile} />,
    },
    {
      title: "Technical",
      component: <Technical mobile={mobile} />,
    },
    {
      title: "Testimonials",
      component: <Testimonials mobile={mobile} />,
    },
  ];
  const [loading, setLoading] = useState(false);
  const scrollRefs = useRef([]);

  const scrollSmoothHandler = (index) => () => {
    scrollRefs?.current[index]?.current?.scrollIntoView({
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const navLinksArray = document.querySelectorAll(".navitem");
    if (!loading) {
      scrollRefs.current = [...Array(navLinksArray?.length).keys()].map(
        (item, index) => scrollRefs.current[index] ?? createRef()
      );
      navLinksArray?.forEach((item, index) => {
        item.addEventListener("click", scrollSmoothHandler(index));
      });
      setLoading(true);
    }
    return () => {
      setLoading(false);
    };
  }, [loading]);

  return (
    <MainLayoutContainer>
      <Header mobile={mobile} />
      {sections?.map((item, index) => (
        <Section key={index} ref={scrollRefs?.current[index]}>
          {item?.component}
        </Section>
      ))}
      <Footer mobile={mobile} />
    </MainLayoutContainer>
  );
}

export default MainLayout;
