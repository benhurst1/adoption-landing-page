export default function MobileMenuButton({ isOpen, clickHandle }) {
  function textForButton() {
    if (isOpen) {
      return "X";
    }
    return "=";
  }

  return (
    <div className="md:hidden fixed rounded-full  right-5 top-5 bg-yellow-500 w-16 h-16">
      <button
        className="md:hidden text-green w-full h-full"
        onClick={clickHandle}
      >
        {textForButton()}
      </button>
    </div>
  );
}
