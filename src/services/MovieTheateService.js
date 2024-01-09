import axios from "axios";
import { DOMAIN, GROUP_ID, TOKEN } from "../util/config";

export const MovieTheateService = {
  getMovieTheate: () => {
    return axios({
      url: `${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`,
      method: "GET",
    });
  },

  getMovieShowTime: (maHeThongRap) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maHeThongRap}`,
      method: "GET",
    });
  },

  getInfoMovieTheate: () => {
    return axios({
      url: `${DOMAIN}/api/QuanLyRap/LayThongTinHeThongRap`,
      method: "GET",
    });
  },
  layThongTinCumRapTheoHeThong: (maHeThongRap) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
      method: "GET",
    });
  },

  taoLichChieu: (lichChieu) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyDatVe/TaoLichChieu`,
      method: "POST",
      data: lichChieu,
      headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
      },
    });
  },
};
