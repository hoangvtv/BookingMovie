import { ThongTinLichChieu } from "../../_core/models/ThongTinPhongVe";
import {
  CHANGE_TAB,
  DAT_VE,
  DAT_VE_HOAN_TAT,
  GET_DETAIL_BOOK_TICKET,
  GHE_KHACH_DANG_DAT,
} from "../types/BookTicketType";

const initialState = {
  detailTicket: new ThongTinLichChieu(),
  danhSachGheDangDat: [],
  tabActive: "1",
  danhSachGheKhachDat: [
    // { maGhe: 93481 },
    // { maGhe: 93484 },
    // {
    //   maGhe: 93485,
    // },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_BOOK_TICKET: {
      return {
        ...state,
        detailTicket: action.detailTicket,
      };
    }

    case DAT_VE: {
      let danhSachGheCapNhat = [...state.danhSachGheDangDat];

      let index = danhSachGheCapNhat.findIndex(
        (gheDD) => gheDD.maGhe === action.gheDuocChon.maGhe
      );
      if (index != -1) {
        //Nếu tìm thấy ghế được chọn trong mảng có nghĩa là trước đó đã click vào rồi => xoá đi
        danhSachGheCapNhat.splice(index, 1);
      } else {
        danhSachGheCapNhat.push(action.gheDuocChon);
      }
      return { ...state, danhSachGheDangDat: danhSachGheCapNhat };
    }

    case DAT_VE_HOAN_TAT: {
      return {
        ...state,
        danhSachGheDangDat: [],
      };
    }

    case CHANGE_TAB: {
      return {
        ...state,
        tabActive: "2",
      };
    }

    case "CHANGE_TAB_ACTIVE": {
      return {
        ...state,
        tabActive: action.number,
      };
    }

    case GHE_KHACH_DANG_DAT: {
      return {
        ...state,
        danhSachGheKhachDat: action.arrGheKhachDat,
      };
    }
    default:
      return state;
  }
};
