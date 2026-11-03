function Header() {
  return (
    <div className="sticky z-50 w-full bg-dark-300 shadow-lg opacity-85 flex flex-row justify-between px-8 py-6">
      <h2 className="uppercase text-shimmer">Natalie Falcon</h2>
      <button className="bg-red-200 hover:bg-red-100 font-mono font-bold px-2 py-1 transition-colors duration-150">
        Disable UI
      </button>
    </div>
  );
}

export default Header;
