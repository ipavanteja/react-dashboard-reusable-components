import React from "react";

const Button = ({
  label,
  onClick,
  fullWidth = true,
  customStyles = "",
  disabled = false,
}) => {
  const baseStyles = `text-[13.5px] text-white px-2 py-1.5 rounded-md shadow hover:bg-blue-600 focus:outline-none`;
  const widthStyle = fullWidth ? "w-full" : "w-auto";
  const disabledStyle = disabled
    ? "bg-gray-400 cursor-not-allowed"
    : "bg-[#5d87ff]";

  return (
    <button
      className={`${widthStyle} ${baseStyles} ${disabledStyle} ${customStyles}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

// Default props
Button.defaultProps = {
  label: "View Full Report",
  onClick: () => alert("Button clicked!"),
};

export default Button;
