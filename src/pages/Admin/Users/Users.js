import React, { Fragment, useEffect } from "react";
import { Button, Table, Input, Space, Popconfirm } from "antd";
import {
  EditOutlined,
  SearchOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAction,
  editUserAction,
  getListUserAction,
} from "../../../redux/actions/UserAction";
const { Search } = Input;
export default function Users() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { listUser } = useSelector((state) => state.UserReducer);

  useEffect(() => {
    dispatch(getListUserAction());
  }, []);

  const onSearch = (value) => {
    // console.log(value);
    dispatch(getListUserAction(value));
  };

  const columns = [
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      sorter: (a, b) => {
        let hoTenA = a.hoTen.toLowerCase().trim();
        let hoTenB = b.hoTen.toLowerCase().trim();
        if (hoTenA > hoTenB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],

      width: "15%",
    },
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
      sorter: (a, b) => {
        let taiKhoanA = a.taiKhoan.toLowerCase().trim();
        let taiKhoanB = b.taiKhoan.toLowerCase().trim();
        if (taiKhoanA > taiKhoanB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "15%",
    },

    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => {
        let emailA = a.email.toLowerCase().trim();
        let emailB = b.email.toLowerCase().trim();
        if (emailA > emailB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "20%",
    },
    {
      title: "Số điên thoại",
      dataIndex: "soDt",
      width: "15%",
    },
    {
      title: "Loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      width: "15%",
    },
    {
      title: "Hành động",
      dataIndex: "taiKhoan",
      render: (text, user) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              className=" mr-2  text-2xl"
              to={`/admin/users/edit/${user.taiKhoan}`}
              onClick={() => {
                dispatch(editUserAction(user));
              }}
            >
              <EditOutlined style={{ color: "blue" }} />{" "}
            </NavLink>

            <Popconfirm
              title="Are you sure to delete this user?"
              onConfirm={() => {
                dispatch(deleteUserAction(user.taiKhoan));
              }}
              okText="Yes"
              cancelText="No"
            >
              <button className="text-2xl  cursor-pointer">
                <DeleteOutlined style={{ color: "red" }} />
              </button>
            </Popconfirm>
          </Fragment>
        );
      },
      width: "25%",
    },
  ];
  return (
    <div>
      <h3 className="text-4xl">Quản lý Người Dùng</h3>
      <Button
        className="mb-5"
        onClick={() => {
          navigate("/admin/films/add");
        }}
      ></Button>
      <Search
        className="mb-5"
        placeholder="input search text"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
      />
      <Table
        columns={columns}
        dataSource={listUser}
        // onChange={onChange}
        rowKey={"taiKhoan"}
      />
    </div>
  );
}
