import { useState, useContext } from "react";
import { DataContext } from "../contexts/DataProvider";

// Icons
import {
  Chrome,
  ShoppingCart,
  AppWindowMac,
  ChevronDown,
  ChevronUp,
  Circle,
  BookUser,
  LifeBuoy,
  ShoppingBag,
  ChartColumn,
  Users,
  NotepadText,
  Kanban,
  NotebookPen,
  CalendarDays,
  Mail,
  Ticket,
} from "lucide-react";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen, smallSidebarOpen, setSmallSidebarOpen } =
    useContext(DataContext);

  const handleSmallSidebar = () => {
    setSmallSidebarOpen(!smallSidebarOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <style>
        {`
          /* Initially hide the scrollbar */
          ::-webkit-scrollbar {
            width: 0;
            background: transparent;
          }

          /* Show the scrollbar on hover or scroll */
          .scrollbar:hover::-webkit-scrollbar {
            width: 6px;
            
          }

          .scrollbar::-webkit-scrollbar-thumb {
            background-color: #f1f1f1;
            border-radius: 10px;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .scrollbar:hover::-webkit-scrollbar-thumb,
          .scrollbar:active::-webkit-scrollbar-thumb {
            opacity: 1;
          }

          .scrollbar::-webkit-scrollbar-track {
            background-color: #ffffff;
          }
        `}
      </style>

      <div
        className={`h-full transition-all duration-300 ease-in-out ${
          smallSidebarOpen ? "lg:w-[243px]" : "lg:w-[78px]"
        }`}
      >
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out z-50 lg:z-0 bg-white border-r border-gray-200
      ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
      ${smallSidebarOpen ? "lg:w-[243px]" : "lg:w-[78px]"} 
       lg:translate-x-0`}
        >
          <div
            className="flex flex-col h-full"
            // onMouseEnter={handleSmallSidebar}
            // onMouseLeave={handleSmallSidebar}
          >
            <Logo />
            <nav className="scrollbar flex-grow overflow-y-auto">
              {/* Home Section */}
              <MenuSection title="Home">
                <MenuItem
                  icon={<Chrome className="w-4 h-4" />}
                  label="Modern"
                  active
                />
                <MenuItem
                  icon={<ShoppingCart className="w-4 h-4" />}
                  label="eCommerce"
                />
                <CollapsibleMenuItem
                  icon={<AppWindowMac className="w-4 h-4" />}
                  label="Frontend Pages"
                >
                  <SubMenuItem label="Homepage" />
                  <SubMenuItem label="About Us" />
                  <SubMenuItem label="Blog" />
                  <SubMenuItem label="Blog Details" />
                  <SubMenuItem label="Contact" />
                  <SubMenuItem label="Portfolio" />
                  <SubMenuItem label="Pricing" />
                </CollapsibleMenuItem>
              </MenuSection>
              {/* Apps Section */}
              <MenuSection title="Apps">
                <MenuItem
                  icon={<BookUser className="w-4 h-4" />}
                  label="Contacts"
                />
                <CollapsibleMenuItem
                  icon={<LifeBuoy className="w-4 h-4" />}
                  label="Blog"
                >
                  <SubMenuItem label="Posts" />
                  <SubMenuItem label="Details" />
                </CollapsibleMenuItem>
                <CollapsibleMenuItem
                  icon={<ShoppingBag className="w-4 h-4" />}
                  label="Ecommerce"
                >
                  <SubMenuItem label="Shop" />
                  <SubMenuItem label="Detail" />
                  <SubMenuItem label="List" />
                  <SubMenuItem label="Checkout" />
                  <SubMenuItem label="Add Product" />
                  <SubMenuItem label="Edit Product" />
                </CollapsibleMenuItem>
                <MenuItem
                  icon={<ChartColumn className="w-4 h-4" />}
                  label="Charts"
                />
                <CollapsibleMenuItem
                  icon={<Users className="w-4 h-4" />}
                  label="Users"
                >
                  <SubMenuItem label="Profile" />
                  <SubMenuItem label="Followers" />
                  <SubMenuItem label="Friends" />
                  <SubMenuItem label="Gallery" />
                </CollapsibleMenuItem>
                <CollapsibleMenuItem
                  icon={<NotepadText className="w-4 h-4" />}
                  label="Invoice"
                >
                  <SubMenuItem label="List" />
                  <SubMenuItem label="Create" />
                  <SubMenuItem label="Detail" />
                  <SubMenuItem label="Edit" />
                </CollapsibleMenuItem>
                <MenuItem
                  icon={<Kanban className="w-4 h-4" />}
                  label="Kanban"
                />
                <MenuItem
                  icon={<NotebookPen className="w-4 h-4" />}
                  label="Notes"
                />
                <MenuItem
                  icon={<CalendarDays className="w-4 h-4" />}
                  label="Calendar"
                />
                <MenuItem icon={<Mail className="w-4 h-4" />} label="Email" />
                <MenuItem
                  icon={<Ticket className="w-4 h-4" />}
                  label="Tickets"
                />
              </MenuSection>
              {/* Pages Section */}
            </nav>
            {/* Logout Button */}
            <LogoutButton
              user={{
                name: "Mathew",
                role: "Designer",
                profilePic:
                  "https://modernize-react.adminmart.com/assets/user-1-6d05e3ce.jpg",
              }}
              onLogout={{}}
            />
          </div>
        </div>

        {/* Overlay (when sidebar is open) */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </>
  );
};

const Logo = () => {
  const { smallSidebarOpen } = useContext(DataContext);
  return smallSidebarOpen ? (
    <div className="p-4 ml-2 mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="174"
        height="26"
        fill="none"
      >
        <>
          <path
            fill="#11142D"
            d="M46.027 23V5.12h3.12l6.696 9.096h-1.488l6.552-9.096h3.12V23h-3.288V8.84l1.272.312-6.792 9.048h-.384L48.21 9.152l1.08-.312V23zm27.542.288q-1.92 0-3.504-.888a6.84 6.84 0 0 1-2.496-2.424q-.912-1.536-.912-3.504t.912-3.504a6.84 6.84 0 0 1 2.496-2.424q1.56-.888 3.504-.888 1.92 0 3.48.888a6.66 6.66 0 0 1 2.472 2.424q.936 1.512.936 3.504 0 1.968-.936 3.504a6.84 6.84 0 0 1-2.496 2.424q-1.56.888-3.456.888m0-2.88q1.056 0 1.848-.504.816-.504 1.272-1.392.48-.912.48-2.04 0-1.152-.48-2.016a3.45 3.45 0 0 0-1.272-1.392q-.792-.528-1.848-.528-1.08 0-1.896.528-.816.504-1.296 1.392-.456.864-.456 2.016 0 1.128.456 2.04.48.888 1.296 1.392t1.896.504m15.344 2.88q-1.896 0-3.384-.888a6.6 6.6 0 0 1-2.352-2.472q-.864-1.56-.864-3.456 0-1.92.864-3.456a6.64 6.64 0 0 1 2.352-2.448q1.512-.912 3.36-.912 1.488 0 2.64.6a4.47 4.47 0 0 1 1.848 1.632l-.48.648V4.832h3.144V23h-2.976v-2.52l.336.624q-.672 1.056-1.872 1.632-1.2.552-2.616.552m.336-2.88q1.08 0 1.896-.504t1.272-1.392q.48-.888.48-2.04 0-1.128-.48-2.016a3.4 3.4 0 0 0-1.272-1.416q-.816-.504-1.896-.504-1.056 0-1.896.528-.84.504-1.32 1.392-.456.864-.456 2.016t.456 2.04q.48.888 1.32 1.392t1.896.504m15.909 2.88q-2.016 0-3.528-.912a6.35 6.35 0 0 1-2.352-2.472q-.84-1.56-.84-3.456 0-1.968.84-3.48a6.5 6.5 0 0 1 2.328-2.424q1.488-.888 3.312-.888 1.536 0 2.688.504 1.176.504 1.992 1.392t1.248 2.04q.432 1.128.432 2.448 0 .336-.048.696-.024.36-.12.624h-10.08v-2.4h8.304l-1.488 1.128q.216-1.104-.12-1.968a2.73 2.73 0 0 0-1.056-1.368q-.72-.504-1.752-.504-.984 0-1.752.504-.768.48-1.176 1.44-.384.936-.288 2.28-.096 1.2.312 2.136.432.912 1.248 1.416.84.504 1.92.504t1.824-.456a3.26 3.26 0 0 0 1.2-1.224l2.544 1.248a4.45 4.45 0 0 1-1.2 1.656 6 6 0 0 1-1.944 1.128q-1.104.408-2.448.408m8.503-.288V9.944h2.952v2.904l-.24-.432q.456-1.464 1.416-2.04.984-.576 2.352-.576h.768v2.784h-1.128q-1.344 0-2.16.84-.816.816-.816 2.304V23zm8.977 0V9.944h2.952v2.568l-.24-.456q.456-1.176 1.488-1.776 1.056-.624 2.448-.624 1.44 0 2.544.624 1.128.624 1.752 1.752.624 1.104.624 2.568V23h-3.144v-7.656q0-.864-.336-1.488a2.35 2.35 0 0 0-.936-.96q-.576-.36-1.368-.36-.768 0-1.368.36-.6.336-.936.96t-.336 1.488V23zm14.226 0V9.944h3.144V23zm0-14.52V5.12h3.144v3.36zM141.783 23v-2.544l7.584-8.784.48 1.08h-7.728V9.944h10.512v2.568l-7.44 8.784-.48-1.08h7.968V23zm18.875.288q-2.016 0-3.528-.912a6.35 6.35 0 0 1-2.352-2.472q-.84-1.56-.84-3.456 0-1.968.84-3.48a6.5 6.5 0 0 1 2.328-2.424q1.488-.888 3.312-.888 1.536 0 2.688.504 1.176.504 1.992 1.392t1.248 2.04q.432 1.128.432 2.448 0 .336-.048.696-.024.36-.12.624h-10.08v-2.4h8.304l-1.488 1.128q.216-1.104-.12-1.968a2.73 2.73 0 0 0-1.056-1.368q-.72-.504-1.752-.504-.984 0-1.752.504-.768.48-1.176 1.44-.384.936-.288 2.28-.096 1.2.312 2.136.432.912 1.248 1.416.84.504 1.92.504t1.824-.456a3.26 3.26 0 0 0 1.2-1.224l2.544 1.248a4.45 4.45 0 0 1-1.2 1.656 6 6 0 0 1-1.944 1.128q-1.104.408-2.448.408"
          ></path>
          <path
            fill="#615DFF"
            d="M20.137 26c2.761 0 5.047-2.258 4.536-4.971a26.7 26.7 0 0 0-1.45-4.979 26.1 26.1 0 0 0-5.448-8.435A25.1 25.1 0 0 0 9.619 1.98 24.5 24.5 0 0 0 4.965.512C2.262-.05 0 2.24 0 5v16a5 5 0 0 0 5 5z"
          ></path>
          <path
            fill="#3DD9EB"
            d="M13.701 26c-2.761 0-5.047-2.258-4.536-4.971.32-1.702.805-3.37 1.45-4.979a26.1 26.1 0 0 1 5.449-8.435 25.1 25.1 0 0 1 8.155-5.636A24.5 24.5 0 0 1 28.873.512C31.577-.05 33.838 2.24 33.838 5v16a5 5 0 0 1-5 5z"
            // style="mix-blend-mode: multiply"
          ></path>
        </>
      </svg>
    </div>
  ) : (
    <div className="p-4 ml-2 mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="auto"
        height="26"
        fill="none"
      >
        <path
          fill="#615DFF"
          d="M20.137 26c2.761 0 5.047-2.258 4.536-4.971a26.7 26.7 0 0 0-1.45-4.979 26.1 26.1 0 0 0-5.448-8.435A25.1 25.1 0 0 0 9.619 1.98 24.5 24.5 0 0 0 4.965.512C2.262-.05 0 2.24 0 5v16a5 5 0 0 0 5 5z"
        ></path>
        <path
          fill="#3DD9EB"
          d="M13.701 26c-2.761 0-5.047-2.258-4.536-4.971.32-1.702.805-3.37 1.45-4.979a26.1 26.1 0 0 1 5.449-8.435 25.1 25.1 0 0 1 8.155-5.636A24.5 24.5 0 0 1 28.873.512C31.577-.05 33.838 2.24 33.838 5v16a5 5 0 0 1-5 5z"
          // style="mix-blend-mode: multiply"
        ></path>
      </svg>
    </div>
  );
};

const MenuSection = ({ title, children }) => (
  <div className="px-6 py-3">
    <p className="text-[11px] font-bold text-gray-600 uppercase">{title}</p>
    <div className="mt-2 flex flex-col text-[13.5px] text-gray-600">
      {children}
    </div>
  </div>
);

const MenuItem = ({ icon, label, active }) => {
  const { smallSidebarOpen } = useContext(DataContext);

  return (
    <a
      href="#"
      className={`${
        smallSidebarOpen
          ? "w-48 flex items-center p-3"
          : "w-9 flex items-center justify-center py-3"
      } gap-4 mb-0.5 rounded-md ${
        active
          ? "text-white bg-[#5d87ff]"
          : "hover:text-blue-600 hover:bg-sky-100"
      }`}
    >
      {icon} <p className={smallSidebarOpen ? "block" : "hidden"}>{label}</p>
    </a>
  );
};

const CollapsibleMenuItem = ({ icon, label, children }) => {
  const { smallSidebarOpen } = useContext(DataContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details className="group" open={isOpen}>
      <summary
        className={`gap-4 cursor-pointer hover:text-blue-600 hover:bg-sky-100 ${
          smallSidebarOpen
            ? "w-48 flex items-center p-3"
            : "w-9 flex items-center justify-center py-3"
        } rounded-md`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {icon}
        <span
          className={`${
            smallSidebarOpen
              ? "w-full flex items-center justify-between"
              : "hidden"
          }`}
        >
          {label}
          {isOpen ? (
            <ChevronDown className="w-4 h-4 ml-auto" />
          ) : (
            <ChevronUp className="w-4 h-4 ml-auto" />
          )}
        </span>
      </summary>
      <div className="px-4 flex flex-col gap-3 text-sm">{children}</div>
    </details>
  );
};

const SubMenuItem = ({ label }) => {
  const { smallSidebarOpen } = useContext(DataContext);
  return (
    smallSidebarOpen === true && (
      <div className="hover:text-[#5d87ff] py-1 cursor-pointer">
        <a href="#" className="flex items-center gap-4 rounded-lg">
          <Circle className="w-2 h-2 text-black" />
          {label}
        </a>
      </div>
    )
  );
};

export default Sidebar;
