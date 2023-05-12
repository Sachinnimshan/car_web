import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { LocationIcon, MailIcon, PhoneIcon } from "../icons";
import { CarSlideImg1, CarSlideImg2, CarSlideImg3 } from "../images";

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
        value: "420kmph",
      },
      {
        title: "0-100KMPH",
        value: "2.5 s",
      },
    ],
  },
  {
    title: "TOP AUTOMATIC W16",
    engSpec: [
      {
        title: "Max power",
        value: "1600bhp",
      },
      {
        title: "Top speed",
        value: "480kmph",
      },
      {
        title: "0-100KMPH",
        value: "2.0 s",
      },
    ],
  },
];

export const carSlideData = [
  {
    title: "Racing Car1",
    image: CarSlideImg1,
  },
  {
    title: "Racing Car2",
    image: CarSlideImg2,
  },
  {
    title: "Racing Car3",
    image: CarSlideImg3,
  },
];

export const technicalData = [
  {
    title: "Engine",
    data: [
      {
        title: "Engine type",
        value: "Petrol",
      },
      {
        title: "Displacement(cc)",
        value: "7993",
      },
      {
        title: "Max. Power",
        value: "1479bhp@6700rpm",
      },
      {
        title: "Max. Torque",
        value: "1600Nm@2000-6000rpm",
      },
      {
        title: "No. of cylinder",
        value: "16",
      },
      {
        title: "Valves Per Cylinder",
        value: "4",
      },
    ],
  },
  {
    title: "Steering & Suspension",
    data: [
      {
        title: "Steering Type",
        value: "Power",
      },
      {
        title: "Front Suspension",
        value: "Double wishbone",
      },
      {
        title: "Rear Suspension",
        value: "Double wishbone",
      },
    ],
  },
  {
    title: "Transmission",
    data: [
      {
        title: "Transmission",
        value: "Auto & Manual",
      },
      {
        title: "Gear Box",
        value: "7 Speed",
      },
      {
        title: "Drive Type",
        value: "AWD",
      },
      {
        title: "Clutch Type",
        value: "DSG dual-clutch",
      },
      {
        title: "Turbo Charger",
        value: "Yes",
      },
    ],
  },
  {
    title: "Brakes",
    data: [
      {
        title: "Front brake",
        value: "Disc",
      },
      {
        title: "Rear brake",
        value: "Disc",
      },
      {
        title: "Front Brake Diameter",
        value: "400",
      },
      {
        title: "Rear Brake Diameter",
        value: "280",
      },
    ],
  },
  {
    title: "Safety",
    data: [
      {
        title: "Anti-Lock Braking System",
        value: "Yes",
      },
      {
        title: "Brake Assist",
        value: "Yes",
      },
      {
        title: "Central Locking",
        value: "Yes",
      },
      {
        title: "Child Safety Locks",
        value: "No",
      },
      {
        title: "Driver Airbag",
        value: "Yes",
      },
      {
        title: "Passenger Airbag",
        value: "Yes",
      },
      {
        title: "Clutch Lock",
        value: "No",
      },
      {
        title: "Day & Night Rear View Mirror",
        value: "No",
      },
      {
        title: "Xenon Headlamps",
        value: "No",
      },
    ],
  },
  {
    title: "Dimensions & Capacity",
    data: [
      {
        title: "Length (mm)",
        value: "4544",
      },
      {
        title: "Width (mm)",
        value: "2038",
      },
      {
        title: "Height (mm)",
        value: "1212",
      },
      {
        title: "Seating Capacity",
        value: "2",
      },
      {
        title: "Wheel Base (mm)",
        value: "2711",
      },
      {
        title: "Ground Clearance (Laden)",
        value: "125mm",
      },
      {
        title: "Kerb Weight (Kg)",
        value: "1995",
      },
    ],
  },
];
