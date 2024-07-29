function MenuIcon({ handleOpenMenu, openMenu }) {
  return (
    <>
      <button
        onClick={handleOpenMenu}
        className="flex flex-col gap-y-1.5 relative  !z-50"
      >
        <span
          className={`w-7 h-[3px] rounded-lg bg-white absolute transition-all duration-300 ease-in ${
            openMenu ? "-rotate-45 top-1" : "rotate-0 -top-2 "
          }`}
        ></span>
        <span
          className={`w-5 h-[3px] rounded-lg bg-white transition-all duration-300 ease-in ${
            openMenu ? "hidden " : ""
          }`}
        ></span>
        <span
          className={`w-7 h-[3px] rounded-lg bg-white absolute transition-all duration-300 ease-in ${
            openMenu ? "rotate-45 top-1" : "rotate-0 top-2"
          }`}
        ></span>
      </button>
      <div className="w-full text-center text-yellow-500 font-bold">LOGO</div>
      <div></div>
    </>
  );
}

export default MenuIcon;
