export default function Dropdown({ menuItems }) {
  const className = `
    md:absolute md:mt-12 md:w-52
    
    flex flex-col pr-10
    items-end
    
    `;

  function mapItems() {
    if (menuItems != undefined) {
      return menuItems.map((item) => (
        <button
          className="md:p-3 p-3 bg-gray-200 w-full text-right md:text-left hover:brightness-90"
          key={item.id}
        >
          {item.text}
        </button>
      ));
    }
  }

  return <div className={className}>{mapItems()}</div>;
}
