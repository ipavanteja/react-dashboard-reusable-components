import { Power } from "lucide-react";
import React, { useContext } from "react";
import { DataContext } from "../contexts/DataProvider";

const LogoutButton = ({ user, onLogout }) => {
  const { smallSidebarOpen } = useContext(DataContext);
  return (
    <div className="px-6 py-3">
      <div
        className={`${
          smallSidebarOpen ? "lg:w-48" : "p-1"
        } h-16 flex items-center gap-3 bg-[#e8f7ff] p-2 rounded-lg`}
      >
        {/* User Profile Image */}
        <img
          src={user.profilePic}
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div
          className={`${
            smallSidebarOpen ? "" : "hidden"
          } flex items-center justify-between`}
        >
          {/* User Info */}
          <div className="flex flex-col">
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm">{user.role}</p>
          </div>

          {/* Logout Button */}
          <button className="pl-5" onClick={onLogout}>
            <Power className="text-[#5d87ff] p-1 rounded-full hover:bg-[#5d87ff] hover:text-white transition-colors duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutButton;
