function TextInputArea({
  name,
  register,
  type,
  validationSchema,
  required,
  errors,
  placeholder,
}) {
  return (
    <div className="w-full lg:w-2/3  dark:bg-slate-800 bg-slate-100 border rounded-md  c2Shadow py-2 md:py-1 md:px-5 px-3 border-gray-500">
      <div className="w-full flex justify-start items-start">
        <label
          htmlFor={name}
          className="text-sm md:text-base whitespace-nowrap"
        >
          {required && <span className="text-gray-500">*</span>}
        </label>
        <textarea
          {...register(name, validationSchema)}
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          autoComplete="off"
          className=" dark:bg-slate-800 bg-slate-100 dark:text-white text-black w-full py-0.5 md:py-1.5 px-3 rounded-lg mt-1 text-base sm:text-lg md:text-xl flex h-32 resize-none"
        />
        {errors && errors[name] && (
          <span className="text-red-500 bolck text-xs md:text-sm mt-1 whitespace-nowrap">
            {errors[name]?.message}
          </span>
        )}
      </div>
    </div>
  );
}

export default TextInputArea;
