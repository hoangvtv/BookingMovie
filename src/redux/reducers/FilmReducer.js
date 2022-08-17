import {
  GET_FILM,
  GET_FILM_COMING,
  GET_FILM_PLAYING,
  GET_MOVIE_SHOWTIMES,
} from "../types/FilmType";

const initialState = {
  arrFilm: [
    {
      maPhim: 10544,
      tenPhim: "NHÍM Sonic 3",
      biDanh: "nhim-sonic-3",
      trailer: "https://www.youtube.com/embed/G1Mrk6pFqVI",
      hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/nhim-sonic-3_gp01.jpg",
      moTa: "Khi Robotnik tìm cách quay trở về Trái Đất thành công, ông ta có một đồng minh mới là Knuckles hùng mạnh, liệu Sonic và người bạn ới Tails có thể ngăn chặn được âm mưu điên rồi để cứu lấy thế giới?",
      maNhom: "GP01",
      ngayKhoiChieu: "2022-08-02T00:00:00",
      danhGia: 7,
      hot: true,
      dangChieu: false,
      sapChieu: true,
    },
  ],
  playing: true,
  coming: true,
  arrFilmDefault: [],
  filmDetail: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FILM: {
      return {
        ...state,
        arrFilm: action.arrFilm,
        arrFilmDefault: action.arrFilm,
      };
    }
    case GET_FILM_PLAYING: {
      return {
        ...state,
        playing: !state.playing,
        coming: true,
        arrFilm: state.arrFilmDefault.filter(
          (film) => film.dangChieu === state.playing
        ),
      };
    }

    case GET_FILM_COMING: {
      return {
        ...state,
        coming: !state.coming,
        playing: true,
        arrFilm: state.arrFilmDefault.filter(
          (film) => film.sapChieu === state.coming
        ),
      };
    }
    case GET_MOVIE_SHOWTIMES: {
      return {
        ...state,
        filmDetail: action.filmDetail,
      };
    }
    default:
      return state;
  }
};
