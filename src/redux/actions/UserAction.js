import { UserService } from "../../services/UserService";
import { LOGIN } from "../types/UserType";

export const loginAction = (userLogin) => {
  return async (dispatch) => {
    try {
      const res = await UserService.signIn(userLogin);

      dispatch({
        type: LOGIN,
        userLogin: res.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
