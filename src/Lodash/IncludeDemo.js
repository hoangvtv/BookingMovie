import React from "react";
import _ from "lodash";

//kiểm tra xem các giá trị ta truyền có nằm trong collection hay không
export default function IncludeDemo() {
  const arr = ["1", "2", "3"];

  console.log(_.includes(arr, "1"));

  const obj = {
    id: 1,
    name: "Nguyen Van D",
    age: 30,
  };

  console.log(_.includes(obj, "Nguyen Van E"));

  return <div>IncludeDemo</div>;
}
