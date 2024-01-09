import React, { Fragment, memo } from "react";
import { Radio, Space, Tabs } from "antd";
import { NavLink } from "react-router-dom";
import moment from "moment";

const { TabPane } = Tabs;

function HomeMenu(props) {
  const { movieTheates } = props;

  const renderMovieTheates = () => {
    return movieTheates
      ?.map((movieTheate, index) => {
        return (
          <TabPane
            tab={
              <img src={movieTheate.logo} className="rounded-full" width="50" />
            }
            key={index}
          >
            <Tabs tabPosition="left" key={index}>
              {movieTheate.lstCumRap?.map((theaterCluster, index) => {
                return (
                  <TabPane tab={theaterCluster.tenCumRap} key={index}>
                    {theaterCluster.lstCumRap?.map((theater, index) => {
                      return (
                        <div key={index}>
                          <div className="text-2xl font-bold">
                            {theater.tenCumRap}
                          </div>
                        </div>
                      );
                    })}

                    {theaterCluster.danhSachPhim
                      ?.slice(0, 4)
                      .map((film, index) => {
                        return (
                          <Fragment key={index}>
                            <div className="my-2">
                              <div
                                style={{
                                  display: "flex",
                                }}
                              >
                                <img
                                  src={film.hinhAnh}
                                  style={{
                                    width: "100px",
                                    height: "100px",
                                  }}
                                  alt={film.tenPhim}
                                  onError={(e) => {
                                    e.target.src =
                                      "https://www.picsum.photos/100/100";
                                  }}
                                />
                                <div className="ml-2  ">
                                  <h1 className=" text-xl text-gray-800">
                                    {film.tenPhim}
                                  </h1>
                                  <p className=" text-gray-800">
                                    {" "}
                                    {theaterCluster.diaChi}
                                  </p>
                                  <div className="grid grid-cols-6 gap-5">
                                    {film.lstLichChieuTheoPhim
                                      ?.slice(0, 12)
                                      .map((showtimes, index) => {
                                        return (
                                          <NavLink
                                            to={`/checkout/${showtimes.maLichChieu}`}
                                            key={index}
                                            className="text-xl text-red-400"
                                          >
                                            {moment(
                                              showtimes.ngayChieuGioChieu
                                            ).format("hh:mm A")}
                                          </NavLink>
                                        );
                                      })}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <hr />
                          </Fragment>
                        );
                      })}
                  </TabPane>
                );
              })}
            </Tabs>
          </TabPane>
        );
      })
      .slice(0, 20);
  };
  return (
    <div>
      <Tabs tabPosition={"left"}>{renderMovieTheates()}</Tabs>
    </div>
  );
}

export default memo(HomeMenu);
