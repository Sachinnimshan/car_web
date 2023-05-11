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

export const engineData = [
  {
    title: "TOP PETROL W11T",
    engSpec: [
      {
        title: "Max power",
        value: "1479bhp",
      },
      {
        title: "Top speed",
        value: "420",
      },
      {
        title: "0-100KMPH",
        value: "2.5 s",
      },
    ],
  },
  // {
  //   title: "TOP AUTOMATIC W16",
  //   engSpec: [
  //     {
  //       title: "Max power",
  //       value: "1600bhp",
  //     },
  //     {
  //       title: "Top speed",
  //       value: "480",
  //     },
  //     {
  //       title: "0-100KMPH",
  //       value: "2 s",
  //     },
  //   ],
  // },
];
