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
import { BG_COLOR } from "../styles/theme";

function Footer({ mobile }) {
  return (
    <FooterContainer>
      <FooterContent mobile={mobile}>
        <FooterColumn>
          <ColumnHeader>About Us</ColumnHeader>
          <SiteLogo src={SiteLogoLight} />
          <ContactInfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra
          </ContactInfoDesc>
        </FooterColumn>
        <FooterColumn>
          <ColumnHeader>Useful Links</ColumnHeader>
          {navLinks?.map((item) => (
            <FooterLink key={item.title}>
              <PointIcon />
              {item.title}
            </FooterLink>
          ))}
        </FooterColumn>
        <FooterColumn>
          <ColumnHeader>Contact Info</ColumnHeader>
          {contactData?.map((item) => (
            <ContactItem key={item.title}>
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
              <SocialIcon footer padding color={BG_COLOR} key={icon.title}>
                {icon.icon}
              </SocialIcon>
            ))}
          </SocialContainer>
        </FooterColumn>
      </FooterContent>
      <CopyRightContainer mobile={mobile}>
        © 2023 Wheels. Design & Developed by Sachin Nimshan.
      </CopyRightContainer>
    </FooterContainer>
  );
}

export default Footer;
