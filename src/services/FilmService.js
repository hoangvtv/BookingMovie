import axios from "axios";
import { DOMAIN, GROUP_ID, TOKEN } from "../util/config";

export const FilmService = {
  getFilm: (tenPhim) => {
    if (tenPhim !== "") {
      return axios({
        url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}&tenPhim=${tenPhim}`,
        method: "GET",
      });
    } else {
      return axios({
        url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`,
        method: "GET",
      });
    }
  },
  createFilm: (formData) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyPhim/ThemPhimUploadHinh`,
      method: "POST",
      data: formData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
      },
    });
  },

  getInfoFilm: (maPhim) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
      },
    });
  },

  editInfoFilm: (formData) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyPhim/CapNhatPhimUpload`,
      method: "POST",
      data: formData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
      },
    });
  },

  deleteFilm: (maPhim) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
      },
    });
  },
};
