import React from "react";

const menuItems = [
  "Home",
  "Products",
  "Service Booking",
  "Gallery",
  "Articles",
  "Our Story",
  "Enquiry",
  "Contact us",
  "Resources"
];

export default function SidebarNavbar({ active, onSelect }) {
  return (
    <aside className="fixed left-0 top-0 h-full w-56 bg-gray-100 text-black flex flex-col py-10 z-30 shadow-lg">
      {menuItems.map((item) => (
        <button
          key={item}
          className={`py-3 px-6 text-lg mb-2 rounded-l-full text-left transition-all duration-300 ${
            active === item
              ? "bg-blue-600 text-white font-semibold"
              : "hover:bg-blue-100"
          }`}
          onClick={() => onSelect(item)}
        >
          {item}
        </button>
      ))}
    </aside>
  );
}
