import { TOKEN, USER_LOGIN } from "../../util/config";
import { LOGIN, SET_INFO_USER } from "../types/UserType";

let user = {};

if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
  userLogin: user,

  infoUser: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      localStorage.setItem(USER_LOGIN, JSON.stringify(action.userLogin));
      localStorage.setItem(TOKEN, action.userLogin.accessToken);
      return {
        ...state,
        userLogin: action.userLogin,
      };
    }

    case SET_INFO_USER: {
      return {
        ...state,
        infoUser: action.infoUser,
      };
    }

    default:
      return state;
  }
};
