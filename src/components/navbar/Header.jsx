export default function Header() {
  return (
    <div>
      <img
        src="/imgs/heart-paw.png"
        alt="heart and paw logo"
        className="absolute md:h-40 h-24 md:m-10 m-4 drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]"
      />
      <div className="absolute md:text-right text-center text-white md:right-0 w-full md:m-10 m-4">
        <h2 className="md:text-4xl text-lg drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]">
          Welcome to
        </h2>
        <h1 className="md:text-6xl text-2xl drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]">
          Paws and Hearts
        </h1>
        <h2 className="md:text-4xl text-lg drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]">
          Adoption Center
        </h2>
      </div>
      <img
        src="/imgs/dog-frontpage.jpg"
        alt="group of puppies"
        className="w-full object-center object-cover md:h-60 h-32"
      />
    </div>
  );
}
