import React from "react";
import { Radio, Space, Tabs } from "antd";
const { TabPane } = Tabs;

export default function HomeMenu() {
  return (
    <div>
      <Tabs tabPosition={"left"}>
        <TabPane
          tab={
            <img
              src="https://picsum.photos/200"
              className="rounded-full"
              width="50"
            />
          }
          key="1"
        ></TabPane>
        <TabPane
          tab={
            <img
              src="https://picsum.photos/200"
              className="rounded-full"
              width="50"
            />
          }
          key="2"
        >
          Content of Tab 2
        </TabPane>
        <TabPane
          tab={
            <img
              src="https://picsum.photos/200"
              className="rounded-full"
              width="50"
            />
          }
          key="3"
        >
          Content of Tab 3
        </TabPane>
      </Tabs>
    </div>
  );
}
