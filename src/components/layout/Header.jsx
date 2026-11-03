function Header() {
  return (
    <div className="sticky z-50 w-full bg-dark-300 shadow-lg opacity-85 flex flex-col gap-2 xs:flex-row xs: justify-between px-8 py-6 mb-5">
      <h2 className="uppercase text-shimmer text-xl lg:text-2xl">
        Natalie Falcon
      </h2>
      <button className="bg-red-200 hover:bg-red-100 font-mono font-bold px-2 py-1 text-xs lg:text-sm uppercase">
        Disable UI
      </button>
    </div>
  );
}

export default Header;
