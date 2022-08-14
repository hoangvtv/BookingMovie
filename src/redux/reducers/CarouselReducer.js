import { GET_CAROUSEL } from "../types/CarouselType";

const initialState = {
  carouselList: [
    {
      maBanner: 1,
      maPhim: 1282,
      hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png",
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CAROUSEL: {
      return {
        ...state,
        carouselList: action.carouselList,
      };
    }
    default: {
      return state;
    }
  }
};
