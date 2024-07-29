// import React, { useState } from "react";
// import {
//   ChevronLeft,
//   Menu,
//   ChevronRight,
//   LogOut,
//   Contact,
//   FolderKanban,
//   HousePlus,
//   LayoutDashboard,
//   Store,
//   SunMoon,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Sidebar: React.FC = () => {
//   const navigate = useNavigate();
//   const [activeItem, setActiveItem] = useState<string>("Home");
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const handleLogout = () => {
//     console.log("Logging out...");
//     navigate("/login", { replace: true });
//   };

//   const handleClick = (itemText: string) => {
//     setActiveItem(itemText);
//     if (itemText === "Log Out") {
//       handleLogout();
//     } else {
//       navigate(`/${itemText.toLowerCase().replace(/ /g, "-")}`);
//     }
//     setIsOpen(false);
//   };

//   const sidebarItems = [
//     { text: "Theme", icon: <SunMoon /> },
//     { text: "Home", icon: <HousePlus /> },
//     { text: "About", icon: <Store /> },
//     { text: "Products", icon: <FolderKanban /> },
//     { text: "Product Information", icon: <LayoutDashboard /> },
//     { text: "Contact", icon: <Contact /> },
//     { text: "Log Out", icon: <LogOut /> },
//   ];

//   return (
//     <>
//       <div className="lg:hidden p-4">
//         <button onClick={() => setIsOpen(!isOpen)} className="text-black">
//           <Menu />
//         </button>
//       </div>
//       <div
//         className={`fixed top-0 left-0 h-full bg-gray-800 text-gray-100 border-r border-gray-700 shadow-lg flex flex-col transform lg:transform-none transition-transform duration-300 ease-in-out ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } lg:translate-x-0 ${isCollapsed ? "lg:w-20" : "lg:w-64"}`}
//       >
//         <div className="p-6 pb-5 flex justify-between items-center bg-gray-900 text-white">
//           <h2 className={`text-2xl font-bold ${isCollapsed ? "hidden" : ""}`}>
//             CANIK ARMS
//           </h2>
//           {isCollapsed ? (
//             <span className="text-2xl font-bold">CA</span>
//           ) : (
//             <button
//               onClick={() => setIsOpen(false)}
//               className="lg:hidden text-white hover:text-gray-300"
//             >
//               <ChevronLeft />
//             </button>
//           )}
//           <button
//             onClick={() => setIsCollapsed(!isCollapsed)}
//             className="hidden lg:block text-white hover:text-gray-300"
//           >
//             {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
//           </button>
//         </div>
//         <ul className="flex-grow">
//           {sidebarItems.map((item, index) => (
//             <li key={index} className={`border-t border-gray-700`}>
//               <SidebarItem
//                 text={item.text}
//                 icon={item.icon}
//                 onClick={() => handleClick(item.text)}
//                 active={activeItem === item.text}
//                 collapsed={isCollapsed}
//               />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// interface SidebarItemProps {
//   text: string;
//   icon: React.ReactNode;
//   onClick: () => void;
//   active: boolean;
//   collapsed: boolean;
// }

// const SidebarItem: React.FC<SidebarItemProps> = ({
//   text,
//   icon,
//   onClick,
//   active,
//   collapsed,
// }) => {
//   return (
//     <div
//       className={`flex items-center p-4 cursor-pointer hover:bg-gray-700 ${
//         active ? "bg-gray-600 text-blue-400" : "text-gray-300"
//       }`}
//       onClick={onClick}
//     >
//       <div className="mr-4 text-xl">{icon}</div>
//       {!collapsed && <span className="text-lg">{text}</span>}
//     </div>
//   );
// };

// export default Sidebar;
