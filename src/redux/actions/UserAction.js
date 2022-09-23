import { UserService } from "../../services/UserService";
import {
  EDIT_USER,
  GET_LIST_USER,
  LOGIN,
  SET_INFO_USER,
} from "../types/UserType";
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { USER_LOGIN } from "../../util/config";

export const loginAction = (userLogin) => {
  return async (dispatch, getState) => {
    try {
      const res = await UserService.signIn(userLogin);

      notification.open({
        message: "Đăng nhập thành công",
        description: res.data.content,
        icon: <SmileOutlined style={{ color: "#108ee9" }} />,
      });

      dispatch({
        type: LOGIN,
        userLogin: res.data.content,
      });

      const { navigate } = getState().NavigateReducer;
      navigate("/");
    } catch (error) {
      notification.open({
        message: "Đăng nhập thất bại",
        description: error.response?.data.content,
        icon: <SmileOutlined style={{ color: "#108ee9" }} />,
      });
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

export const registerAction = (userRegister) => {
  return async (dispatch, getState) => {
    try {
      await UserService.register(userRegister);

      notification.open({
        message: "Đăng ký thành công",
        icon: <SmileOutlined style={{ color: "#108ee9" }} />,
      });

      const { navigate } = getState().NavigateReducer;
      navigate("/login");
    } catch (error) {
      console.log(error);
      notification.open({
        message: "Đăng ký thất bại",
        description: error.response?.data.content,
        icon: <SmileOutlined style={{ color: "#108ee9" }} />,
      });
    }
  };
};

export const updateUserAction = (user) => {
  return async (dispatch, getState) => {
    try {
      const res = await UserService.updateUser(user);

      // console.log("res", res.data);
      await dispatch(getInfoUserAction());

      localStorage.setItem(USER_LOGIN, JSON.stringify(res.data.content));
      notification.open({
        message: "Cập nhập thông tin thành công",
        icon: <SmileOutlined style={{ color: "#108ee9" }} />,
      });
    } catch (error) {
      console.log(error);
      notification.open({
        message: "Cập nhập thông tin thất bại",
        description: error.response?.data.content,
        icon: <SmileOutlined style={{ color: "#108ee9" }} />,
      });
    }
  };
};

export const getListUserAction = (tuKhoa = "") => {
  return async (dispatch, getState) => {
    try {
      const res = await UserService.getListUser(tuKhoa);

      dispatch({
        type: GET_LIST_USER,
        listUser: res.data.content,
      });
    } catch (error) {
      console.log(error);
      notification.open({
        message: "Cập nhập thông tin thất bại",
        description: error.response?.data.content,
        icon: <SmileOutlined style={{ color: "#108ee9" }} />,
      });
    }
  };
};

export const deleteUserAction = (taiKhoan) => {
  return async (dispatch, getState) => {
    try {
      const res = await UserService.deleteUser(taiKhoan);
      notification.open({
        message: "Xóa tài khoản thành công",
        description: res.data.content,
        icon: <SmileOutlined style={{ color: "#108ee9" }} />,
      });
      await dispatch(getListUserAction());
    } catch (error) {
      console.log(error);
      notification.open({
        message: "Xóa tài khoản thất bại",
        description: error.response?.data.content,
        icon: <SmileOutlined style={{ color: "#108ee9" }} />,
      });
    }
  };
};

export const editUserAction = (user) => ({
  type: EDIT_USER,
  user,
});

export const editUserActionAPI = (user) => {
  return async (dispatch, getState) => {
    try {
      const res = await UserService.editUser(user);
      notification.open({
        message: "Sửa tài khoản thành công",
        description: res.data.content,
        icon: <SmileOutlined style={{ color: "#108ee9" }} />,
      });
      await dispatch(getListUserAction());
    } catch (error) {
      console.log(error);
      notification.open({
        message: "Sửa tài khoản thất bại",
        description: error.response?.data.content,
        icon: <SmileOutlined style={{ color: "#108ee9" }} />,
      });
    }
  };
};
