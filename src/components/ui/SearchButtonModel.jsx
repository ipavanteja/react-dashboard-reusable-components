import React, { useState } from "react";
import { Search, X } from "lucide-react";

const SearchButtonModal = ({
  modalPosition = "center",
  customModalStyles = "",
  onSearch,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Modal position styling logic
  const modalPositionClasses = {
    top: "top-10 left-1/2 transform -translate-x-1/2",
    center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    bottom: "bottom-10 left-1/2 transform -translate-x-1/2",
    custom: customModalStyles, // Allow custom styles to be passed in
  };

  return (
    <div>
      {/* Search Icon Button */}
      <button
        className="hover:bg-sky-100 p-3 rounded-full cursor-pointer focus:outline-none"
        onClick={openModal}
      >
        <Search className="w-3 h-3 text-gray-700 hover:text-blue-500" />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className={`fixed ${modalPositionClasses[modalPosition]} bg-white shadow-lg p-6 rounded-lg z-50 w-full max-w-md`}
        >
          {/* Search Input */}
          <div className="flex items-center justify-between space-x-2 mb-4">
            <input
              type="text"
              placeholder="Search here"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSearch(e.target.value);
                  closeModal();
                }
              }}
            />
            {/* Close Button */}
            <button
              className="text-gray-500 hover:bg-sky-100 rounded-full p-1"
              onClick={closeModal}
            >
              <X className="w-4 h-4 hover:text-blue-500" />
            </button>
          </div>

          {/* Quick Page Links Section */}
          <div className="quick-links">
            <h3 className="text-lg font-semibold mb-2">Quick Page Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/dashboards/modern"
                  className="text-blue-500 hover:underline"
                >
                  Modern
                </a>
              </li>
              <li>
                <a
                  href="/dashboards/ecommerce"
                  className="text-blue-500 hover:underline"
                >
                  eCommerce
                </a>
              </li>
              <li>
                <a
                  href="/frontend-pages/homepage"
                  className="text-blue-500 hover:underline"
                >
                  Homepage
                </a>
              </li>
              <li>
                <a
                  href="/frontend-pages/about"
                  className="text-blue-500 hover:underline"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/frontend-pages/blog"
                  className="text-blue-500 hover:underline"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/frontend-pages/blog/Blog_1"
                  className="text-blue-500 hover:underline"
                >
                  Blog Details
                </a>
              </li>
              <li>
                <a
                  href="/frontend-pages/contact"
                  className="text-blue-500 hover:underline"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/frontend-pages/portfolio"
                  className="text-blue-500 hover:underline"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Modal Background */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={closeModal}
        />
      )}
    </div>
  );
};

export default SearchButtonModal;
