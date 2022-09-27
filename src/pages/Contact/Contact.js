import { Radio, Space, Tabs } from "antd";
import React, { useState } from "react";

const { TabPane } = Tabs;

export default function Contact() {
  const [tabPosition, setTabPosition] = useState("left");

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  return (
    <div
      style={{
        paddingTop: "110px",
        // display: "flex",
        // justifyContent: "center",
      }}
    >
      <Tabs defaultActiveKey="1" tabPosition="left" style={{}}>
        <TabPane tab="Tuyển dụng" key="1" style={{ minHeight: 300 }}>
          Tuyển dụng
        </TabPane>
        <TabPane tab="Trụ sở chính" key="2" style={{ minHeight: 300 }}>
          Thông tin
        </TabPane>
        <TabPane tab="Cụm rạp" key="3" style={{ minHeight: 300 }}>
          Đánh giá
        </TabPane>
      </Tabs>
    </div>
  );
}
