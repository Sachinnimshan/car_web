import React from "react";
import { PointIcon } from "../icons";
import { contactData, navLinks, socialIcons } from "../common/common";
import { SocialContainer, SocialIcon } from "../header/header.styled";
import {
  ColumnHeader,
  ContactIcon,
  ContactInfo,
  ContactInfoDesc,
  ContactInfoHeader,
  ContactItem,
  CopyRightContainer,
  FooterColumn,
  FooterContainer,
  FooterContent,
  FooterLink,
} from "./footer.styled";
import { SiteLogo } from "../images/images.styled";
import { SiteLogoLight } from "../images";
import useResponsive from "../hooks/useResponsive";

function Footer() {
  const isMobile = useResponsive();
  return (
    <FooterContainer>
      <FooterContent mobile={isMobile}>
        <FooterColumn>
          <ColumnHeader>About Us</ColumnHeader>
          <SiteLogo src={SiteLogoLight} />
        </FooterColumn>
        <FooterColumn>
          <ColumnHeader>Useful Links</ColumnHeader>
          {navLinks?.map((item) => (
            <FooterLink>
              <PointIcon />
              {item.title}
            </FooterLink>
          ))}
        </FooterColumn>
        <FooterColumn>
          <ColumnHeader>Contact Info</ColumnHeader>
          {contactData?.map((item) => (
            <ContactItem>
              <ContactIcon>{item.icon}</ContactIcon>
              <ContactInfo>
                <ContactInfoHeader>{item.title}</ContactInfoHeader>
                <ContactInfoDesc>{item.description}</ContactInfoDesc>
              </ContactInfo>
            </ContactItem>
          ))}
        </FooterColumn>
        <FooterColumn>
          <ColumnHeader>Follow us</ColumnHeader>
          <SocialContainer>
            {socialIcons?.map((icon) => (
              <SocialIcon footer padding>{icon.icon}</SocialIcon>
            ))}
          </SocialContainer>
        </FooterColumn>
      </FooterContent>
      <CopyRightContainer>
        © 2023 Wheels. Design & Developed by Sachin Nimshan.
      </CopyRightContainer>
    </FooterContainer>
  );
}

export default Footer;
