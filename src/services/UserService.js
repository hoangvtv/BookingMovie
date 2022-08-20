import axios from "axios";
import { DOMAIN, GROUP_ID } from "../util/config";

export const UserService = {
  signIn: (userLogin) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: userLogin,
    });
  },
};
