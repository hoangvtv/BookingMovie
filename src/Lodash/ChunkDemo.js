import React from "react";
import _ from "lodash";

//tạo ra mảng con dựa trên mảng cha
export default function ChunkDemo() {
  const arr = ["id", 1, "name", "Hoàng", "age", 18];

  const result = _.chunk(arr, 2);
  console.log(result);

  const arrString = [
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "a10",
    "a11",
    "a12",
    "a13",
  ];

  const arrStringResult = _.chunk(arrString, 3);
  console.log(arrStringResult);

  return <div>ChunkDemo</div>;
}
