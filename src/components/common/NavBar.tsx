const NavBar = () => {
  return (
    <nav className="ml-4 mr-4 p-4 flex justify-between items-center bg-gradient-to-b from-blue-800 to-indigo-500 rounded-bl-2xl rounded-br-2xl shadow border-l border-r border-b border-sky-400">
      <div>
        <img
          src="digicore.png"
          alt="Logo"
          className="h-8 w-8 mr-4"
          style={{ borderRadius: 10 }}
        />
      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-white">
          アイコン1
        </a>
        <a href="#" className="text-white">
          アイコン2
        </a>
        <a href="#" className="text-white">
          アイコン3
        </a>
        <a href="#" className="text-white">
          アイコン4
        </a>
      </div>
      <div>
        <img src="user-icon.png" alt="User" className="h-8 w-8" />
      </div>
    </nav>
  );
};

export default NavBar;

const aaa = () => (
  <div
    className="h-20 relative"
    style={{ width: "100%", paddingLeft: 40, paddingRight: 40 }}
  >
    <div
      className="h-20 left-0 top-0 absolute bg-gradient-to-b from-blue-800 to-indigo-500 rounded-bl-2xl rounded-br-2xl shadow border-l border-r border-b border-sky-400"
      style={{ width: "100%" }}
    >
      <img
        className="w-12 h-12 left-[10px] top-[15px] absolute rounded-lg"
        src="https://via.placeholder.com/48x49"
      />
      <div className="left-[68px] top-[45px] absolute text-stone-300 text-base font-normal">
        digicore 3.14
      </div>
      <div className="w-96 h-9 left-[533px] top-[45px] absolute">
        <div className="w-5 h-5 left-0 top-0 absolute bg-stone-300 rounded-full" />
        <div className="w-5 h-5 left-[55px] top-0 absolute bg-stone-300 rounded-full" />
        <div className="w-5 h-5 left-[110px] top-0 absolute bg-stone-300 rounded-full" />
        <div className="w-5 h-5 left-[220px] top-0 absolute bg-stone-300 rounded-full" />
        <div className="w-5 h-5 left-[275px] top-0 absolute bg-stone-300 rounded-full" />
        <div className="w-5 h-5 left-[614px] top-0 absolute bg-stone-300 rounded-full" />
        <div className="left-[138px] top-0 absolute text-stone-300 text-base font-normal">
          work
        </div>
        <div className="left-[642px] top-0 absolute text-stone-300 text-base font-normal">
          dark mode
        </div>
      </div>
      <img
        className="w-12 h-12 left-[1286px] top-[16px] absolute rounded-full"
        src="https://via.placeholder.com/50x50"
      />
    </div>
  </div>
);
