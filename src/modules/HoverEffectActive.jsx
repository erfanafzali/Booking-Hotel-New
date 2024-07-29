function HoverEffectActive({ title }) {
  return (
    <p className="text-lg group relative lg:text-xl">
      <span className="text-gray-400">{title}</span>
      <span className="absolute -bottom-1 left-1/2  transition-all duration-300 h-0.5 bg-yellow-500 w-3/6 active:w-3/6"></span>
      <span className="absolute -bottom-1 right-1/2  transition-all duration-300 h-0.5 bg-yellow-500 w-3/6 active:w-3/6"></span>
    </p>
  );
}

export default HoverEffectActive;
