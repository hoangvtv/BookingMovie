import axios from "axios";
import { DOMAIN, GROUP_ID } from "../util/config";

export const FilmService = {
  getFilm: () => {
    return axios({
      url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`,
      method: "GET",
    });
  },
};
