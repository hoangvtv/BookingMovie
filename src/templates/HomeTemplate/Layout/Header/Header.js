import React, { Suspense } from "react";
import { NavLink } from "react-router-dom";
import { Select } from "antd";

import { useTranslation } from "react-i18next";

const { Option } = Select;
export default function Header() {
  const { t, i18n } = useTranslation();
  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "#fff" : "",
    borderBottom: isActive ? "2px solid #fff" : "",
  });

  const handleChange = (value) => {
    i18n.changeLanguage(value);
  };

  return (
    <header className="p-4 bg-coolGray-100 text-coolGray-800 bg-opacity-40 bg-black text-white fixed w-full z-10">
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink to="/" className="flex items-center p-2">
          <img
            src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
            alt="logo"
          />
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              to="/"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600 text-white 
                 hover:scale-110"
              style={navLinkStyle}
            >
              {t("home")}
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/contact"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600 text-white 
                 hover:scale-110"
              style={navLinkStyle}
            >
              {t("contact")}
            </NavLink>
          </li>

          <li className="flex">
            <NavLink
              to="/news"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent  border-violet-600 text-white 
                hover:scale-110"
              style={navLinkStyle}
            >
              {t("news")}
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <NavLink
            to="/login"
            className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400  text-white "
            style={navLinkStyle}
          >
            {t("signin")}
          </NavLink>
          <NavLink
            to="/register"
            className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400  text-white "
            style={navLinkStyle}
          >
            {t("signup")}
          </NavLink>

          <Select
            defaultValue="en"
            style={{ width: 100 }}
            onChange={handleChange}
          >
            <Option value="en">Eng</Option>
            <Option value="chi">Chi</Option>

            <Option value="vi">Vi</Option>
          </Select>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
