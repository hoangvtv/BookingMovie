import React, { Fragment, Suspense } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import _ from "lodash";
import { TOKEN, USER_LOGIN } from "../../../../util/config";
import { history } from "../../../../App";

const { Option } = Select;
export default function Header() {
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  const { userLogin } = useSelector((state) => state.UserReducer);

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "#fff" : "",
    borderBottom: isActive ? "2px solid #fff" : "",
  });

  const handleChange = (value) => {
    i18n.changeLanguage(value);
  };
  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="self-center px-8 py-3 rounded"
          >
            {t("Đăng nhập")}
          </button>
          <button
            onClick={() => {
              navigate("/register");
            }}
            className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-coolGray-50"
          >
            {t("Đăng ký")}
          </button>
        </Fragment>
      );
    }

    return (
      <Fragment>
        {" "}
        <button
          onClick={() => {
            navigate("/profile");
          }}
          className="self-center px-8 py-3 rounded"
        >
          Hello ! {userLogin.taiKhoan}
        </button>
        <button
          onClick={() => {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN);
            navigate("/");
            window.location.reload();
          }}
          className="text-yellow-500 mr-5"
        >
          {t("logout")}
        </button>
      </Fragment>
    );
  };
  return (
    <header className="p-4 bg-coolGray-100 text-coolGray-800 bg-opacity-40 bg-black text-white fixed w-full z-10">
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink to="/" className="flex items-center p-2">
          <img
            src={require("../../../../assets/img/logoCG.png")}
            alt="logo"
            style={{ width: "120px" }}
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
              {t("Trang chủ")}
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/hotel"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600 text-white 
                 hover:scale-110"
              style={navLinkStyle}
            >
              {t("Khách sạn")}
            </NavLink>
          </li>
          {/* <li className="flex">
            <NavLink
              to="/"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600 text-white 
                 hover:scale-110"
              style={navLinkStyle}
            >
              {t("home")}
            </NavLink>
          </li> */}
          <li className="flex">
            <NavLink
              to="/flights"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600 text-white 
                 hover:scale-110"
              style={navLinkStyle}
            >
              {t("Chuyến bay")}
            </NavLink>
          </li>

          <li className="flex">
            <NavLink
              to="/discovery"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent  border-violet-600 text-white 
                hover:scale-110"
              style={navLinkStyle}
            >
              {t("Khám phá")}
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {/* <NavLink
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
          </NavLink> */}
          {renderLogin()}
          <Select
            defaultValue="vi"
            style={{ width: 100 }}
            onChange={handleChange}
          >
            <Option value="vi">Vi</Option>
            <Option value="en">Eng</Option>

            <Option value="chi">Chi</Option>
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
