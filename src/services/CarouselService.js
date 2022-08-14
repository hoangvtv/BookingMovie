import axios from "axios";
import { DOMAIN } from "../util/config";

export const CarouselService = {
  getCarousel: () => {
    return axios({
      url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
      method: "GET",
    });
  },
};
