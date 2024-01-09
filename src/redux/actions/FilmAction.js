import { GET_FILM, GET_INFO_FILM, SET_FILM_PARAM } from "../types/FilmType";
import { FilmService } from "../../services/FilmService";

export const getFilmAction = (tenPhim = "") => {
  return async (dispatch) => {
    try {
      const res = await FilmService.getFilm(tenPhim);

      dispatch({
        type: GET_FILM,
        arrFilm: res.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createFilmAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await FilmService.createFilm(formData);
      alert("Thêm phim thành công");
      console.log("Film created", result.data.content);
    } catch (err) {
      console.log(err);
    }
  };
};

export const getInfoFilmAction = (maPhim) => {
  return async (dispatch) => {
    try {
      let result = await FilmService.getInfoFilm(maPhim);
      dispatch({
        type: GET_INFO_FILM,
        infoFilm: result.data.content,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const editInfoFilmAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await FilmService.editInfoFilm(formData);
      alert("Cập nhập phim thành công");
      console.log("Film created", result.data.content);
      dispatch(getFilmAction());
    } catch (err) {
      alert("Cập nhập phim thất bại");
      console.log(err);
    }
  };
};

export const deleteFilmAction = (maPhim) => {
  return async (dispatch) => {
    try {
      let result = await FilmService.deleteFilm(maPhim);
      alert("Xóa phim thành công");
      dispatch(getFilmAction());
    } catch (err) {
      alert("Xóa phim thất bại");
      console.log(err);
    }
  };
};

export const setFilmParamAction = (filmParam) => {
  return {
    type: SET_FILM_PARAM,
    filmParam,
  };
};
