import React from "react";
import _ from "lodash";

//fill(array, params): ghi đè phần tử  params vào tất cả các phần tử của array
//fill(array, params, start, end-1) chèn phân tử  từ sau vị trí start đến end-1
export default function FillDemo() {
  var arr = [
    { id: 1, name: "IPhone" },
    { id: 2, name: "IPhone X" },
    { id: 3, name: "IPhone XS" },
    { id: 4, name: "IPhone Pro" },
    { id: 5, name: "IPhone Pro max" },
  ];
  //   _.fill(arr, { id: 6, name: "Samsung galaxy note 10" });
  _.fill(arr, { id: 5, name: "Samsung galaxy note 10 plus" }, 1, 4);

  console.log("arr", arr);
  return <div>FillDemo</div>;
}
