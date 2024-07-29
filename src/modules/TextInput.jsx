function TextInput({
  name,
  register,
  type ,
  validationSchema,
  required,
  errors,
  placeholder,
}) {
  return (
    <div className="w-full lg:w-2/3 dark:bg-slate-800 bg-slate-100 border border-gray-500 rounded-lg  py-2 md:py-1 md:px-5 px-3">
      <div className="w-full flex justify-start items-center">
        <label
          htmlFor={name}
          className="text-sm md:text-base whitespace-nowrap"
        >
          {required && <span className="text-gray-500">*</span>}
        </label>
        <input
          {...register(name, validationSchema)}
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          autoComplete="off"
          className=" dark:bg-slate-800 bg-slate-100 pb-1.5 dark:text-white text-black w-full  md:py-1.5 md:pb-3 px-3 rounded-lg mt-1 text-base sm:text-lg md:text-xl "
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

export default TextInput;
