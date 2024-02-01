export default function NavItems({ isOpen }) {
  const navItems = [
    { id: 1, text: "Advice" },
    { id: 2, text: "Find a pet" },
    { id: 3, text: "Support us" },
    { id: 4, text: "About us" },
    { id: 5, text: "Contact us" },
  ];

  function mapItems() {
    return (
      <ul>
        {navItems.map((item) => (
          <li
            key={item.id}
            className="mt-10 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-500 hover:text-black"
          >
            {item.text}
          </li>
        ))}
      </ul>
    );
  }

  return mapItems();
  return <>{isOpen && mapItems()}</>;
}
