import React from "react";
import _ from "lodash";

//flatten(array) là hàm dùng dể  phân tách cấc mảng trong mảng 1 cấp
//flattenDeep(array) là hàm dùng dể  phân tách cấc mảng trong mảng nhiều cấp

export default function FlattenDemo() {
  const arr = [[1, [2, [3, [4]]], 5]];

  const resultFlatten = _.flatten(arr);

  const resultFlattenDeep = _.flattenDeep(arr);

  console.log("resultFlatten", resultFlatten);
  console.log("resultFlattenDeep", resultFlattenDeep);

  return <div>FlattenDemo</div>;
}
