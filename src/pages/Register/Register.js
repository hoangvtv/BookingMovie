import React from "react";
import styles from "./Register.module.css";
import { NavLink } from "react-router-dom";

import "./Register.css";

export default function Register() {
  return (
    <div className={styles.container__login}>
      <div className={styles.login__form}>
        <div className="login__form__title">
          {" "}
          <h6>Đăng ký</h6>{" "}
          <p className={styles.login__form__text}>
            Hãy thiết lập tất cả để truy cập tài khoản của bạn
          </p>
        </div>
        <div className="login__form__content">
          <form>
            <div className="input-group">
              <label className="input__group____user__pass__label" for="email">
                Tên đăng nhập
              </label>
              <input
                className="input__group__user__pass"
                type="text"
                id="usernames"
                placeholder="Nhập tên đăng nhập của bạn"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="input-group">
                <label
                  className="input__group____user__pass__label"
                  for="email"
                >
                  Email
                </label>
                <input
                  className="input__group__user__pass"
                  type="email"
                  id="email"
                  placeholder="Nhập email của bạn"
                  style={{ width: "230px" }}
                />
              </div>
              <div className="input-group">
                <label
                  className="input__group____user__pass__label"
                  for="phone"
                >
                  Số điện thoại
                </label>
                <input
                  className="input__group__user__pass"
                  type="tel"
                  id="phone"
                  placeholder="Nhập email của bạn"
                  style={{ width: "230px" }}
                />
              </div>
            </div>
            <div className="input-group">
              <label className="input__group____user__pass__label">
                Mật khẩu
              </label>
              <input
                className="input__group__user__pass"
                type="password"
                placeholder="Nhập mật khẩu của bạn"
              />
            </div>
            <div className="input-group">
              <label className="input__group____user__pass__label">
                Nhập lại mật khẩu
              </label>
              <input
                className="input__group__user__pass"
                type="password"
                placeholder="Nhập lại mật khẩu của bạn"
              />
            </div>
            <div className={styles.login__footer}>
              <div className="input-group">
                <input type="checkbox" id="checkbox" />
                <label style={{ paddingLeft: "8px", fontWeight: "500" }}>
                  Tôi đồng ý với tất cả các Điều Khoản và Chính sách quyền riêng
                  tư{" "}
                </label>{" "}
              </div>
            </div>
            <NavLink
              to="/"
              className="cursor-pointer text-indigo-600 hover:text-indigo-800"
            >
              <button
                style={{
                  width: "100%",
                  padding: "8px 0",
                  backgroundColor: "#177BA5",
                  borderRadius: "40px",
                  color: "#FFF",
                  fontFamily: "Be Vietnam Pro",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                  margin: "16px 0 30px",
                }}
              >
                Tạo tài khoản
              </button>
            </NavLink>
          </form>
        </div>
        <div className="login__form__footer">
          <div
            className="form__footer--register"
            style={{
              display: "flex",
              justifyContent: "center",
              color: "#051721",
              fontFamily: "Be Vietnam Pro",
              fontSize: "14px",
              fontStyle: " normal",
              fontWeight: " 500",
              lineHeight: " normal",
            }}
          >
            <p>Bạn đã có tài khoản?</p>
            <NavLink
              to="/login"
              className="cursor-pointer text-indigo-600 hover:text-indigo-800"
            >
              {" "}
              Hãy Đăng nhập
            </NavLink>
          </div>
          <div className="form__footer--register-social">
            <p
              style={{
                color: " #051721",
                /* PAGE Label1 */
                fontFamily: " Be Vietnam Pro",
                fontSize: " 14px",
                fontStyle: " normal",
                fontWeight: " 500",
                lineHeight: " normal",
                textAlign: "center",
                margin: " 16px 0",
              }}
            >
              Hoặc đăng ký với
            </p>
            <div
              className="form__footer--register-social"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <img
                src={require("../../assets/img/fb-social.png")}
                style={{ maxWidth: "112px" }}
              />
              <img
                src={require("../../assets/img/gg-social.png")}
                style={{ maxWidth: "112px" }}
              />
              <img
                src={require("../../assets/img/apple-social.png")}
                style={{ maxWidth: "112px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
