import { useState } from "react";
import MobileMenuButton from "./MobileMenuButton";
import NavItems from "./NavItems";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function clickHandle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="hidden md:flex flex-row justify-center bg-gray-500">
        <NavItems />
      </div>
      <MobileMenuButton isOpen={isOpen} clickHandle={clickHandle} />
      <div
        className={`flex  md:hidden fixed z-10 flex-col  bg-gray-500 pt-20 h-screen w-3/6 transition-all duration-500 ${
          isOpen ? "left-1/2" : "left-full"
        }`}
      >
        <NavItems isOpen={isOpen} />
      </div>
      <div
        onClick={clickHandle}
        className={`absolute backdrop-brightness-75  w-screen h-screen ${
          isOpen ? "visible" : "hidden"
        }`}
      />
    </>
  );
}
