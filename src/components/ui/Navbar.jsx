import { useContext } from "react";
import { BellRing, Menu, Moon, Search, ShoppingCart } from "lucide-react";
import { DataContext } from "../contexts/DataProvider";

const Navbar = () => {
  const { sidebarOpen, setSidebarOpen, smallSidebarOpen, setSmallSidebarOpen } =
    useContext(DataContext);

  return (
    <header className="bg-white text-[13.5px] py-2 px-7 flex justify-between items-center">
      {/* Left Section - Apps, Chat, Calendar, Email */}
      <div className="flex items-center">
        <div className="hover:bg-sky-100 p-2   rounded-full cursor-pointer">
          <Menu
            className="w-4 h-4 text-gray-700 hover:text-blue-600"
            onClick={() => setSmallSidebarOpen(!smallSidebarOpen)}
          />
        </div>

        {/* Search Icon */}
        <div className="hover:bg-sky-100 p-3 rounded-full cursor-pointer">
          <Search className="w-3 h-3 text-gray-700 hover:text-blue-600" />
        </div>
        {/* Nav Items */}
        <nav className="flex items-center">
          {["Apps", "Chat", "Calendar", "Email"].map((item) => (
            <h1
              key={item}
              className="hover:bg-sky-100 hover:text-blue-600 px-3.5 py-1.5 rounded-md cursor-pointer text-center"
            >
              {item}
            </h1>
          ))}
        </nav>
      </div>

      {/* Right Section - Flags, Icons, Profile */}
      <div className="flex items-center gap-1">
        {/* Flag Icon */}
        <img
          src="https://modernize-react.adminmart.com/assets/icon-flag-en-20a62c34.svg"
          className="w-8 h-8 object-cover rounded-full hover:bg-sky-100 p-2 cursor-pointer"
          alt="English Flag"
        />

        {/* Shopping Cart Icon */}
        <div className="hover:bg-sky-100 p-3 rounded-full cursor-pointer">
          <ShoppingCart className="w-4 h-4 text-gray-700 hover:text-blue-600" />
        </div>
        {/* Moon Icon */}
        <div className="hover:bg-sky-100 p-3 rounded-full cursor-pointer">
          <Moon className="w-4 h-4 text-gray-700 hover:text-blue-600" />
        </div>
        {/* Bell Icon */}
        <div className="hover:bg-sky-100 p-3 rounded-full cursor-pointer">
          <BellRing className="w-4 h-4 text-gray-700 hover:text-blue-600" />
        </div>
        {/* Profile Image */}
        <img
          src="https://modernize-react.adminmart.com/assets/user-1-6d05e3ce.jpg"
          alt="Profile"
          className="w-12 h-12 rounded-full hover:bg-blue-100 cursor-pointer p-2"
        />
      </div>
    </header>
  );
};

export default Navbar;
