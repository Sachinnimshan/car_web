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
import { PRIMARY_COLOR } from "../styles/theme";

function Header() {
  const isMobile = useResponsive();
  const [scrolledDown, setScrolledDown] = useState(false);
 
  const checkScrolledDown = () => {
    if (!scrolledDown && window.pageYOffset > 50) {
      setScrolledDown(true);
    } else if (scrolledDown && window.pageYOffset <= 50) {
      setScrolledDown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrolledDown);
  }, [window.pageYOffset, scrolledDown]);

  return (
    <HeaderContainer mobile={isMobile} scrolledDown={scrolledDown}>
      <SiteLogo src={scrolledDown ? SiteLogoDark : SiteLogoLight} />
      {!isMobile && (
        <HeaderRight>
          <HeaderLinkContainer>
            {navLinks?.map((item) => (
              <HeaderLink scrolledDown={scrolledDown}>{item.title}</HeaderLink>
            ))}
          </HeaderLinkContainer>
          <SocialContainer>
            {socialIcons?.map((icon) => (
              <SocialIcon header color={scrolledDown && PRIMARY_COLOR}>
                {icon?.icon}
              </SocialIcon>
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
