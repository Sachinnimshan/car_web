import React, { useEffect, useState } from "react";
import "./header.styled";
import { Backdrop, HeaderContainer, MenuContainer } from "./header.styled";
import { SiteLogo } from "../images/images.styled";
import { SiteLogoDark, SiteLogoLight } from "../images";
import Navigation from "./Navigation";
import { MenuIcon } from "../icons";

function Header({ mobile }) {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleOpen = () => setShowMenu(!showMenu);
  const handleClose = () => setShowMenu(false);

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

  useEffect(() => {
    if (showMenu && !mobile) {
      handleClose();
    }
  }, [mobile]);

  return (
    <HeaderContainer mobile={mobile} scrolledDown={scrolledDown && !showMenu}>
      {!showMenu && (
        <SiteLogo src={scrolledDown ? SiteLogoDark : SiteLogoLight} alt="Wheels"/>
      )}
      {!mobile && (
        <Navigation
          scrolledDown={scrolledDown}
          showMenu={showMenu}
          onClose={handleClose}
        />
      )}
      {showMenu && (
        <Backdrop onClick={handleClose}>
          <Navigation
            showMenu={showMenu}
            scrolledDown={scrolledDown}
            onClose={handleClose}
          />
        </Backdrop>
      )}
      {mobile && !showMenu && (
        <MenuContainer onClick={handleOpen}>
          <MenuIcon />
        </MenuContainer>
      )}
    </HeaderContainer>
  );
}

export default Header;
