import Dropdown from "../menu/Dropdown";

export default function NavbarButton({
  text,
  id,
  handleClick,
  openMenu,
  menuItems,
}) {
  const className = `
  hover:brightness-90 bg-gray-100 cursor-pointer duration-300
  

  md:px-0 md:text-center md:w-40
  
  py-3 pr-10 text-right
  `;

  return (
    <>
      <div className="flex flex-col">
        <button id={id} onClick={(e) => handleClick(e)} className={className}>
          {text}
        </button>
        {openMenu == id && <Dropdown menuItems={menuItems} />}
      </div>
    </>
  );
}
