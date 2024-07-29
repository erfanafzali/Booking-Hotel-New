function HoverEffect({ title }) {
 
  return (
    <p className="text-base lg:text-lg group relative xl:text-xl">
      <span className="text-white cursor-pointer hover:text-gray-400">
        {title}
      </span>
      <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-300 h-0.5 bg-yellow-500 group-hover:w-3/6 active:w-3/6"></span>
      <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-300 h-0.5 bg-yellow-500 group-hover:w-3/6 active:w-3/6"></span>
    </p>
  );
}

export default HoverEffect;
