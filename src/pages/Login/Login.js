import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Login.module.css";
import "./Login.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Login() {
  return (
    <div className={styles.container__login}>
      <div className={styles.login__form}>
        <div className="login__form__title">
          {" "}
          <h6>Đăng nhập</h6>{" "}
          <p className={styles.login__form__text}>
            Đăng nhập để truy cập tài khoản Cango của bạn
          </p>
        </div>
        <div className="login__form__content">
          <form>
            <div className="input-group">
              <label className="input__group____user__pass__label" for="email">
                Email
              </label>
              <input
                className="input__group__user__pass"
                type="email"
                id="email"
                placeholder="Nhập email của bạn"
              />
            </div>
            <div className="input-group">
              <label className="input__group____user__pass__label">
                Password
              </label>
              <input
                className="input__group__user__pass"
                type="password"
                placeholder="Nhập email của bạn"
              />
            </div>
            <div className={styles.login__footer}>
              <div className="input-group">
                <input type="checkbox" id="checkbox" />
                <label style={{ paddingLeft: "8px" }}>Ghi nhớ </label>{" "}
              </div>
              <a> Quên mật khẩu</a>
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
                Đăng nhập
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
            <p>Bạn chưa có tài khoản?</p>
            <NavLink
              to="/register"
              className="cursor-pointer text-indigo-600 hover:text-indigo-800"
            >
              {" "}
              Hãy Đăng ký
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
                margin: " 16px 0 32px",
              }}
            >
              Hoặc đăng nhập với
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

AOS.init();
