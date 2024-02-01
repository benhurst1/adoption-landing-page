export default function NavItems({ isOpen }) {
  const navItems = [
    { id: 1, text: "Advice" },
    { id: 2, text: "Find a pet" },
    { id: 3, text: "Support us" },
    { id: 4, text: "About us" },
    { id: 5, text: "Contact us" },
  ];

  function mapItems() {
    // Mobile navigation buttons
    if (isOpen) {
      return navItems.map((item) => (
        <li
          key={item.id}
          className="hover:bg-[#00df9a] py-3 pr-10 list-none bg-pink-300 rounded-xl cursor-pointer text-right duration-500 hover:text-black"
        >
          {item.text}
        </li>
      ));
    }
    // wide screen navigation buttons
    return navItems.map((item) => (
      <li
        key={item.id}
        className="hover:bg-[#00df9a] p-3 list-none bg-pink-300 rounded-xl cursor-pointer text-right duration-500 hover:text-black"
      >
        {item.text}
      </li>
    ));
  }

  return mapItems();
}
