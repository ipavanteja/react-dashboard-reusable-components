import React from "react";

const TilesSection = () => {
  const tilesData = [
    {
      bgColor: "bg-[#ecf2ff]",
      imgSrc:
        "https://modernize-react.adminmart.com/assets/icon-user-male-ff0c3edd.svg",
      title: "Employees",
      count: "96",
      textColor: "text-[#5d87ff]",
    },
    {
      bgColor: "bg-[#fef5e5]",
      imgSrc:
        "https://modernize-react.adminmart.com/assets/icon-briefcase-5ac68925.svg",
      title: "Clients",
      count: "3,650",
      textColor: "text-[#ffae1f]",
    },
    {
      bgColor: "bg-[#e8f7ff]",
      imgSrc:
        "https://modernize-react.adminmart.com/assets/icon-mailbox-58a01fce.svg",
      title: "Projects",
      count: "356",
      textColor: "text-[#49beff]",
    },
    {
      bgColor: "bg-[#fdede8]",
      imgSrc:
        "https://modernize-react.adminmart.com/assets/icon-favorites-c75eec14.svg",
      title: "Events",
      count: "696",
      textColor: "text-[#fa896b]",
    },
    {
      bgColor: "bg-[#e6fffa]",
      imgSrc:
        "https://modernize-react.adminmart.com/assets/icon-speech-bubble-4432cbf3.svg",
      title: "Payroll",
      count: "$96k",
      textColor: "text-[#13deb9]",
    },
    {
      bgColor: "bg-[#ebf3fe]",
      imgSrc:
        "https://modernize-react.adminmart.com/assets/icon-connect-93bb1783.svg",
      title: "Reports",
      count: "59",
      textColor: "text-[#539bff]",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 mb-6">
      {tilesData.map((tile, index) => (
        <Tile key={index} {...tile} />
      ))}
    </div>
  );
};

const Tile = ({ bgColor, imgSrc, title, count, textColor }) => {
  return (
    <div className={`${bgColor} p-4 rounded-md text-center`}>
      <div className="mb-2 flex items-center justify-center">
        <img src={imgSrc} alt={title} className="w-[45px]" />
      </div>
      <h2 className={`text-sm font-semibold ${textColor}`}>{title}</h2>
      <p className={`text-xl font-bold ${textColor}`}>{count}</p>
    </div>
  );
};

export default Tile;
