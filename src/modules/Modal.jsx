function Modal({ onOpen, onClose, title, children }) {
  return (
    <div className="">
      {onOpen && (
        <div className=" fixed top-0 left-0 w-full h-screen dark:bg-slate-800 bg-slate-500 z-20">
          <div className="fixed top-[0] min-h-screen overflow-y-auto  rounded-b-lg bg-secondary-0 p-4 shadow-lg transition-all duration-500 ease-out w-full md:hidden">
            <div className="w-full flex justify-between items-center  border-secondary-700 ">
              <p className="text-lg md:text-xl font-bold dark:text-white">
                {title}
              </p>
              {/* <button onClick={onClose}>
                <IoCloseCircle className="w-6 h-6 text-error md:w-8 md:h-8" />
              </button> */}
            </div>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
