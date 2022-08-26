import axios from "axios";
import { DOMAIN, GROUP_ID, TOKEN } from "../util/config";

export const UserService = {
  signIn: (userLogin) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: userLogin,
    });
  },

  getInfoUser() {
    return axios({
      url: `${DOMAIN}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
      },
    });
  },
};
