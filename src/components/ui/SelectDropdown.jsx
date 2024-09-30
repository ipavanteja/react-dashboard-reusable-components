import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const SelectDropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(options[0]);

  const handleOptionClick = (option) => {
    setSelectedMonth(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div
        className="flex items-center justify-between px-3 py-1.5 border rounded-lg text-gray-700 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-2">{selectedMonth}</span>
        {isOpen ? (
          <ChevronDown className="w-4 h-4 text-gray-500" />
        ) : (
          <ChevronUp className="w-4 h-4 text-gray-500" />
        )}
      </div>

      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <ul className="py-1">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-3 py-1.5 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectDropdown;
