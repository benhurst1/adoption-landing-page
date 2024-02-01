export default function MobileMenuButton({ isOpen, clickHandle }) {
  return (
    <div className="md:hidden">
      {isOpen ? (
        <button
          className="md:hidden mr-5 -right-0 absolute p-5 z-20"
          onClick={clickHandle}
        >
          X
        </button>
      ) : (
        <button
          className="md:hidden mr-5 -right-0 fixed p-5 z-20"
          onClick={clickHandle}
        >
          =
        </button>
      )}
    </div>
  );
}
