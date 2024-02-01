import Navbar from "./components/navbar/Navbar";
import Dropdown from "./components/menu/Dropdown";

function App() {
  const items = [
    { id: 1, text: "Advice" },
    { id: 2, text: "Find a pet" },
    { id: 3, text: "Support us" },
    { id: 4, text: "About us" },
    { id: 5, text: "Contact us" },
  ];

  return (
    <>
      <Navbar />

      {/* <div className="bg-pink-500 w-screen h-screen"></div> */}
    </>
  );
}

export default App;
