import React from "react";
import { navLinks, socialIcons } from "../common/common";
import { ArrowLeftIcon } from "../icons";
import { CarImageRed, SiteLogoDark } from "../images";
import { HomeBanner, SiteLogo } from "../images/images.styled";
import { PRIMARY_COLOR } from "../styles/theme";
import {
  CloseContainer,
  NavigationContainer,
  NavItem,
  NavItemContainer,
  SidebarHeader,
  SidebarImage,
  SocialContainer,
  SocialIcon,
} from "./header.styled";

function Navigation({
  scrolledDown,
  showMenu,
  onClose,
}) {
  return (
    <NavigationContainer>
      <NavItemContainer showMenu={showMenu}>
        {showMenu && (
          <SidebarHeader>
            <SiteLogo src={SiteLogoDark} />
            <CloseContainer onClick={onClose}>
              <ArrowLeftIcon />
            </CloseContainer>
          </SidebarHeader>
        )}

        {navLinks?.map((item) => (
          <NavItem
            className="navitem"
            key={item.title}
            scrolledDown={scrolledDown || showMenu}
          >
            {item.title}
          </NavItem>
        ))}
        <SocialContainer>
          {socialIcons?.map((icon) => (
            <SocialIcon
              header
              color={(scrolledDown && PRIMARY_COLOR) || showMenu}
              key={icon.title}
            >
              {icon?.icon}
            </SocialIcon>
          ))}
        </SocialContainer>
      </NavItemContainer>
    </NavigationContainer>
  );
}

export default Navigation;
