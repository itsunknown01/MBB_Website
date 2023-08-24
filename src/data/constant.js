import educators from "../assests/images/Faculty.jpeg";
import Student from "../assests/images/Student.jpeg";
import events from "../assests/images/events.jpeg";
import school from "../assests/images/school.jpeg";
import london from "../assests/images/london.png";
import newyork from "../assests/images/newyork.png";
import washington from "../assests/images/washington.png";

export const NavbarItems = ["Home", "About", "Course", "Blog", "Contact"];

export const AboutSectionData = [
  {
    title: "Dedicated Educators",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nulla facilisi morbi tempus iaculis. Sed pulvinar proin gravida hendrerit. Pulvinar pellentesque habitant morb tristique senectus.",
    image: educators,
  },
  {
    title: "First-Rate Curriculum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Sit amet nulla facilisi morbi tempus iaculis. Sed pulvinar proin gravida hendrerit. Pulvinar pellentesque habitant morb tristique senectus.",
    image: Student,
  },
  {
    title: "Exciting Extracurriculars",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Sit amet nulla facilisi morbi tempus iaculis. Sed pulvinar proin gravida hendrerit. Pulvinar pellentesque habitant morb tristique senectus.",
    image: events,
  },
];

export const CampusImage = [
  {
    name: "Student",
    image: london
  },
  {
    name: "Front-Entrance",
    image: newyork
  },
  {
    name: "Events",
    image: washington
  }
];
