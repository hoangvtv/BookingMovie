import { connection } from "../../index";
import { BookTicketService } from "../../services/BookTicketService";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import {
  CHANGE_TAB,
  DAT_VE,
  DAT_VE_HOAN_TAT,
  GET_DETAIL_BOOK_TICKET,
  GHE_KHACH_DANG_DAT,
} from "../types/BookTicketType";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";

export const getDetaiBookTicketAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const res = await BookTicketService.getDetaiBookTicket(maLichChieu);

      dispatch({
        type: GET_DETAIL_BOOK_TICKET,
        detailTicket: res.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const bookTicketAction = (gheDuocChon, maLichChieu) => {
  return async (dispatch, getState) => {
    await dispatch({
      type: DAT_VE,
      gheDuocChon,
    });

    //call api về backend
    let danhSachGheDangDat = getState().BookTicketReducer.danhSachGheDangDat;
    let taiKhoan = getState().UserReducer.userLogin.taiKhoan;

    console.log("danhSachGheDangDat", danhSachGheDangDat);
    console.log("taiKhoan", taiKhoan);
    console.log("maLichChieu", maLichChieu);

    danhSachGheDangDat = JSON.stringify(danhSachGheDangDat);
    //call API đến server
    connection.invoke("datGhe", taiKhoan, danhSachGheDangDat, maLichChieu);
  };
};

export const setGheKhachDangDatAction = (arrGheKhachDat) => ({
  type: GHE_KHACH_DANG_DAT,
  arrGheKhachDat,
});

export const bookTicketAPIAction = (thongTinDatVe = new ThongTinDatVe()) => {
  return async (dispatch, getState) => {
    try {
      dispatch(displayLoadingAction);
      const res = await BookTicketService.bookTicket(thongTinDatVe);
      console.log("Book ticket", res.data);

      await dispatch(getDetaiBookTicketAction(thongTinDatVe.maLichChieu)); //await để đợi hàm này thực thi xong mới chạy hàm tiếp theo
      await dispatch({
        type: DAT_VE_HOAN_TAT,
      });

      // let taiKhoan = getState().UserReducer.userLogin.taiKhoan;
      // connection.invoke("datGheThanhCong", taiKhoan, thongTinDatVe.maLichChieu);
      dispatch({
        type: CHANGE_TAB,
      });
      dispatch(hideLoadingAction);
    } catch (error) {
      console.log(error);
      dispatch(hideLoadingAction);
    }
  };
};
