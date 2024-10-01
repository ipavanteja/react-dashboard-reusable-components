import React, { useState, useRef, useEffect } from "react";
import { BellRing } from "lucide-react";

const NotificationDropdown = ({ notifications, unreadCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hover:bg-sky-100 p-3 rounded-full cursor-pointer"
      >
        <BellRing className="w-4 h-4 text-gray-700 hover:text-blue-600" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
        >
          <div className="p-4 border-b flex items-center justify-between">
            <h3 className="font-semibold text-lg">Notifications</h3>
            {unreadCount > 0 && (
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                {unreadCount} new
              </span>
            )}
          </div>

          <div className="max-h-64 overflow-y-auto">
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="flex items-center p-4 hover:bg-gray-100"
              >
                <img
                  src={notification.avatar}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">{notification.title}</p>
                  <p className="text-sm text-gray-500">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t text-center">
            <button className="text-blue-600 hover:underline">
              See all Notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
