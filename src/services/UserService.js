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
  register: (userRegister) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data: userRegister,
    });
  },
  updateUser: (user) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      data: user,
      headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
      },
    });
  },

  getListUser: (tuKhoa) => {
    if (tuKhoa === "") {
      return axios({
        url: `${DOMAIN}/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`,
        method: "GET",
      });
    } else {
      return axios({
        url: `${DOMAIN}/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}&tuKhoa=${tuKhoa}`,
        method: "GET",
      });
    }
  },

  editUser: (user) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      data: user,
      headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
      },
    });
  },

  deleteUser: (taiKhoan) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
      },
    });
  },
};
