import { TOKEN, USER_LOGIN } from "../../util/config";
import {
  EDIT_USER,
  GET_LIST_USER,
  LOGIN,
  SET_INFO_USER,
} from "../types/UserType";

let user = {};

if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
  userLogin: user,
  infoUser: {},
  listUser: [],
  editUser: {},
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

    case GET_LIST_USER: {
      return {
        ...state,
        listUser: action.listUser,
      };
    }

    case EDIT_USER: {
      console.log("user: " + action.user?.taiKhoan);
      return {
        ...state,
        editUser: action.user,
      };
    }

    default:
      return state;
  }
};
