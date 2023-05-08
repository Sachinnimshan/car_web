import React, { useEffect, useState } from "react";
import "./header.styled";
import {
  HeaderContainer,
  HeaderLinkContainer,
  HeaderLink,
  SocialContainer,
  SocialIcon,
  HeaderRight,
  MenuContainer,
} from "./header.styled";
import { navLinks, socialIcons } from "../common/common";
import { SiteLogo } from "../images/images.styled";
import { SiteLogoDark, SiteLogoLight } from "../images";
import useResponsive from "../hooks/useResponsive";
import { MenuIcon } from "../icons";

function Header() {
  const isMobile = useResponsive();
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 40) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 40) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
  }, [window.pageYOffset]);

  return (
    <HeaderContainer mobile={isMobile} scrolledDown={showScroll}>
      <SiteLogo src={SiteLogoDark} />
      {!isMobile && (
        <HeaderRight>
          <HeaderLinkContainer>
            {navLinks?.map((item) => (
              <HeaderLink>{item.title}</HeaderLink>
            ))}
          </HeaderLinkContainer>
          <SocialContainer>
            {socialIcons?.map((icon) => (
              <SocialIcon header>{icon?.icon}</SocialIcon>
            ))}
          </SocialContainer>
        </HeaderRight>
      )}
      {isMobile && (
        <MenuContainer>
          <MenuIcon />
        </MenuContainer>
      )}
    </HeaderContainer>
  );
}

export default Header;
