import React from "react";
import Seoaal from "../assets/Images/Seoaal.png";

const MobileMenu = ({ showMobileMenu, setShowMobileMenu }) => {
  const [openMenus, setOpenMenus] = React.useState({});
  const [activeItem, setActiveItem] = React.useState(null);
  const [activeSubItem, setActiveSubItem] = React.useState(null);

  const toggleSubMenu = (index) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const menuItems = [
    {
      title: "Home",
      src: "#",
      subMenu: ["Overview", "Landing"],
    },
    {
      title: "About Us",
      src: "#",
      subMenu: ["Our Team", "Mission"],
    },
    {
      title: "Services",
      src: "#",
      subMenu: ["Web", "App", "Design"],
    },
    {
      title: "Blog",
      src: "#",
      subMenu: ["Latest Posts", "Categories"],
    },
    {
      title: "Portfolio",
      src: "#",
      subMenu: ["Projects", "Clients"],
    },
    {
      title: "Shop",
      src: "#",
      subMenu: ["All Products", "Cart"],
    },
    {
      title: "Contact Us",
      src: "#",
      subMenu: [],
    },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-gradient-to-br from-[#292391] to-[#e53e8e]  z-50 overflow-hidden transition-all duration-500 ease-in-out ${
        showMobileMenu ? "h-screen opacity-100" : "h-0 opacity-0"
      }`}
    >
      {/* Header with logo */}
      <div className="flex justify-between items-center p-4 border-b">
        <img src={Seoaal} alt="Logo" className="h-10 w-auto object-contain" />
        <button
          onClick={() => setShowMobileMenu(false)}
          className="text-white text-2xl"
        >
          ✕
        </button>
      </div>

      <div className="p-4">
        {menuItems.map((item, index) => (
          <div key={index} className="mb-4">
            {/* Main menu item */}
            <div className="flex justify-between items-center">
            <a
                href={item.src}
                onClick={() => setActiveItem(item.title)}
                className={`font-medium transition-colors cursor-pointer ${
                  activeItem === item.title
                    ? "text-amber-400"
                    : "text-white"
                }`}
              >
                {item.title}
              </a>

  {item.subMenu.length > 0 && (
    <button
      onClick={() => toggleSubMenu(index)}
      className="text-white text-2xl focus:outline-none"
    >
      {openMenus[index] ? "–" : "+"}
    </button>
  )}
</div>


            {/* Submenu items */}
            {openMenus[index] &&
              item.subMenu.map((subItem, subIndex) => (
                <div
                  key={subIndex}
                  onClick={() => setActiveSubItem(subItem)}
                  className={`ml-4 mt-2 text-sm cursor-pointer ${
                    activeSubItem === subItem
                      ? "text-amber-400 font-semibold"
                      : "text-gray-400 hover:text-pink-500"
                  }`}
                >
                  {subItem}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
