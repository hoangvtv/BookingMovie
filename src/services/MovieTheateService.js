import axios from "axios";
import { DOMAIN, GROUP_ID } from "../util/config";

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
};
