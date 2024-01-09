import axios from "axios";
import { DOMAIN, TOKEN } from "../util/config";
import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";

export const BookTicketService = {
  getDetaiBookTicket: (maLichChieu) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      method: "GET",
    });
  },

  bookTicket: (thongTinDatVe = new ThongTinDatVe()) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyDatVe/DatVe`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
      },
      data: thongTinDatVe,
    });
  },
};
