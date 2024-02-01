import { useEffect, useState } from "react";
import NavbarButton from "./NavbarButton";

export default function NavItems({ isOpen }) {
  const [openMenu, setOpenMenu] = useState(0);

  const navItems = [
    {
      id: 1,
      text: "Advice",
      menuItems: [
        { id: 1, text: "Speak to a professional" },
        { id: 2, text: "Check out our forums" },
        { id: 3, text: "Attend a training school" },
        { id: 4, text: "Community events" },
        { id: 5, text: "FAQs" },
      ],
    },
    {
      id: 2,
      text: "Find a pet",
      menuItems: [
        { id: 1, text: "Cats" },
        { id: 2, text: "Dogs" },
        { id: 3, text: "Hamster" },
        { id: 4, text: "Rabbit" },
        { id: 5, text: "Birds" },
        { id: 6, text: "Other" },
      ],
    },
    {
      id: 3,
      text: "Support us",
      menuItems: [
        { id: 1, text: "Sponsor a pet" },
        { id: 2, text: "Volunteer" },
        { id: 3, text: "Fundraise" },
        { id: 4, text: "Campaigns" },
        { id: 5, text: "More" },
      ],
    },
    {
      id: 4,
      text: "About us",
      menuItems: [
        { id: 1, text: "What we do" },
        { id: 2, text: "Who we are" },
        { id: 3, text: "How we do it" },
        { id: 4, text: "Why we do it" },
        { id: 5, text: "Where we do it" },
      ],
    },
    {
      id: 5,
      text: "Contact us",
    },
  ];

  function handleClick(e) {
    if (e.target.id == openMenu) {
      setOpenMenu(0);
    } else {
      setOpenMenu(e.target.id);
    }
  }

  function mapItems() {
    return navItems.map((item) => (
      <NavbarButton
        key={item.id}
        id={item.id}
        text={item.text}
        handleClick={handleClick}
        openMenu={openMenu}
        menuItems={item.menuItems}
      />
    ));
  }

  return mapItems();
}
