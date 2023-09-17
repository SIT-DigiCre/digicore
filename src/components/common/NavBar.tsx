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
