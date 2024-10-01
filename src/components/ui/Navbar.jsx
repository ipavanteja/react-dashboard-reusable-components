import { useContext, useEffect, useState } from "react";
import { BellRing, Menu, Moon, ShoppingCart } from "lucide-react";
import { DataContext } from "../contexts/DataProvider";
import SearchButtonModal from "./SearchButtonModel";
import AppsDropdown from "./AppsDropdown";
import NotificationDropdown from "./NotificationDropdown";

const Navbar = () => {
  const { sidebarOpen, setSidebarOpen, smallSidebarOpen, setSmallSidebarOpen } =
    useContext(DataContext);
  const [isLgScreen, setIsLgScreen] = useState(false);

  const notifications = [
    {
      avatar:
        "https://modernize-react.adminmart.com/assets/user-2-8a001bcb.jpg",
      title: "Roman Joined the Team!",
      description: "Congratulate him",
    },
    {
      avatar:
        "https://modernize-react.adminmart.com/assets/user-3-94da4ac7.jpg",
      title: "New message received",
      description: "Salma sent you a new message",
    },
    {
      avatar:
        "https://modernize-react.adminmart.com/assets/user-4-a9b2728d.jpg",
      title: "New Payment received",
      description: "Check your earnings",
    },
    {
      avatar:
        "https://modernize-react.adminmart.com/assets/user-5-77f60b86.jpg",
      title: "Jolly completed tasks",
      description: "Assign her new tasks",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024); // Tailwind's `lg` screen starts from 1024px
    };

    // Call once on component mount to set the initial state
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    if (isLgScreen) {
      setSmallSidebarOpen(!smallSidebarOpen);
    } else {
      setSidebarOpen(!sidebarOpen);
    }
  };

  return (
    <header className="bg-white text-[13.5px] py-2 px-7 flex justify-between items-center">
      {/* Left Section - Apps, Chat, Calendar, Email */}
      <div className="flex items-center">
        <div
          className="hover:bg-sky-100 p-2   rounded-full cursor-pointer"
          onClick={handleClick}
        >
          <Menu className="w-4 h-4 text-gray-700 hover:text-blue-600" />
        </div>

        {/* Search Icon */}
        <div className="">
          {/* <Search className="w-3 h-3 text-gray-700 hover:text-blue-600" /> */}
          <SearchButtonModal onSearch={{}} modalPosition="top" />
        </div>

        {/* Apps Dropdown */}
        <AppsDropdown />

        {/* Nav Items */}
        <nav className="flex items-center">
          {["Chat", "Calendar", "Email"].map((item) => (
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
        {/* <div className="hover:bg-sky-100 p-3 rounded-full cursor-pointer">
          <BellRing className="w-4 h-4 text-gray-700 hover:text-blue-600" />
        </div> */}
        <NotificationDropdown notifications={notifications} unreadCount={5} />
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
