import { UserService } from "../../services/UserService";
import { LOGIN, SET_INFO_USER } from "../types/UserType";
import { history } from "../../App";

export const loginAction = (userLogin) => {
  return async (dispatch) => {
    try {
      const res = await UserService.signIn(userLogin);

      dispatch({
        type: LOGIN,
        userLogin: res.data.content,
      });

      history.goBack();
    } catch (error) {
      console.log(error);
    }
  };
};

export const getInfoUserAction = () => {
  return async (dispatch) => {
    try {
      const res = await UserService.getInfoUser();

      dispatch({
        type: SET_INFO_USER,
        infoUser: res.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
