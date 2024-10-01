import React, { useState, useEffect, useRef } from "react";

const AppsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle closing the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* Navbar Item (Apps button) */}
      <button
        className="hover:bg-sky-100 hover:text-blue-600 px-3.5 py-1.5 rounded-md cursor-pointer text-center"
        onClick={toggleDropdown}
      >
        Apps
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute left-0 mt-2 w-[320px] md:w-[640px] bg-white shadow-lg rounded-lg p-6 z-50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              {/* Apps Section */}
              <h3 className="font-semibold mb-2">Apps</h3>
              <ul className="space-y-2">
                <li>
                  <AppItem
                    title="Chat Application"
                    description="Messages & Emails"
                    icon="📨"
                  />
                </li>
                <li>
                  <AppItem
                    title="Invoice App"
                    description="Messages & Emails"
                    icon="💼"
                  />
                </li>
                <li>
                  <AppItem
                    title="Contact Application"
                    description="Account settings"
                    icon="👤"
                  />
                </li>
                <li>
                  <AppItem
                    title="Email App"
                    description="To-do and Daily tasks"
                    icon="📧"
                  />
                </li>
                <li>
                  <AppItem
                    title="eCommerce App"
                    description="Messages & Emails"
                    icon="🛒"
                  />
                </li>
                <li>
                  <AppItem
                    title="Calendar App"
                    description="Messages & Emails"
                    icon="📅"
                  />
                </li>
                <li>
                  <AppItem
                    title="Tickets App"
                    description="Account settings"
                    icon="🎫"
                  />
                </li>
                <li>
                  <AppItem
                    title="Ecom Dashboard"
                    description="Data-genic Dashboards"
                    icon="📊"
                  />
                </li>
              </ul>
            </div>
            <div>
              {/* Quick Links Section */}
              <h3 className="font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <QuickLink label="Pricing Page" />
                </li>
                <li>
                  <QuickLink label="Authentication Design" />
                </li>
                <li>
                  <QuickLink label="Register Now" />
                </li>
                <li>
                  <QuickLink label="404 Error Page" />
                </li>
                <li>
                  <QuickLink label="Notes App" />
                </li>
                <li>
                  <QuickLink label="User Application" />
                </li>
                <li>
                  <QuickLink label="Blog Design" />
                </li>
                <li>
                  <QuickLink label="Shopping Cart" />
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4">
            {/* Extra Section */}
            <div className="flex items-center justify-between">
              <p className="text-blue-600">Frequently Asked Questions</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                Check
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// AppItem Component for rendering each app
const AppItem = ({ title, description, icon }) => (
  <div className="flex items-center space-x-2">
    <span>{icon}</span>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </div>
);

// QuickLink Component for rendering quick links
const QuickLink = ({ label }) => (
  <p className="text-sm text-blue-600 hover:underline cursor-pointer">
    {label}
  </p>
);

export default AppsDropdown;
