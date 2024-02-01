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
      <div className="hidden md:flex justify-center bg-gray-500">
        <NavItems />
      </div>
      <MobileMenuButton isOpen={isOpen} clickHandle={clickHandle} />
      <div
        className={`flex md:hidden fixed flex-col bg-red-500 h-screen w-screen transition-all duration-500 ${
          isOpen ? "translate-x-2/4" : "translate-x-full"
        }`}
      >
        <NavItems isOpen={isOpen} />
      </div>
    </>
  );
}
