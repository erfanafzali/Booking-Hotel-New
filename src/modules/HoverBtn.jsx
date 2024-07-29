function HoverBtn({ title, icon }) {
  return (
    <button className="dark:text-white text-black hover:before:bg-redborder-red-500 relative h-[45px] text-xl w-full md:w-64 mt-12 overflow-hidden border border-primary px-7  transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-primary before:transition-all before:duration-500 hover:text-white  hover:before:left-0 hover:before:w-full">
      <span className="relative z-10 flex justify-center items-center gap-x-2">
        {icon}
        <p className="text-base font-bold">{title}</p>
      </span>
    </button>
  );
}

export default HoverBtn;
