import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { LocationIcon, MailIcon, PhoneIcon } from "../icons";

export const socialIcons = [
  {
    title: "Facebook",
    icon: <FaFacebookF />,
  },
  {
    title: "Twitter",
    icon: <FaTwitter />,
  },
  {
    title: "Youtube",
    icon: <FaYoutube />,
  },
];

export const navLinks = [
  {
    title: "About",
  },
  {
    title: "Innovative Design",
  },
  {
    title: "Variations",
  },
  {
    title: "Specials",
  },
  {
    title: "Testimonial",
  },
  {
    title: "Find Dealer",
  },
];

export const contactData = [
  {
    title: "Phone",
    description: "+01(123) 456 7890",
    icon: <PhoneIcon />,
  },
  {
    title: "Email",
    description: "info@wheels.com",
    icon: <MailIcon />,
  },
  {
    title: "Address",
    description: "3892 Fincham Road,Los Angeles, CA 90017",
    icon: <LocationIcon />,
  },
];
