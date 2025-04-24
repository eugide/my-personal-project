function Navbar() {
  return (
    <>
      <div className="bg-gray-800/80 text-white py-4 text-center fixed top-0 left-0 right-0 z-50 shadow-md w-full">
        <a className="lg:text-2xl md:text-xl text-[12px] font-bold" href="/">
          MY PERSONAL PROJECT
        </a>
        <hr className="mx-auto mt-2 px-4 md:w-4/5 lg:w-3/4" />
      </div>
      <div className="h-16"></div>
    </>
  );
}

export default Navbar;
