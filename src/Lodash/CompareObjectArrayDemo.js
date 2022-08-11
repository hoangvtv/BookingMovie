import _ from "lodash";
import React from "react";

export default function CompareObjectArrayDemo() {
  const arr = ["a", "b"];
  const arr2 = ["b", "a"];
  const result = _.isEqual(arr.sort(), arr2.sort());
  console.log("result", result);

  const arrObj1 = [
    {
      name: "a",
      age: 1,
    },
    {
      name: "b",
      age: 2,
    },
    {
      name: "c",
      age: 3,
    },
    { name: "e", age: 5 },
  ];

  const arrObj2 = [
    {
      name: "b",
      age: 2,
    },
    {
      name: "a",
      age: 1,
    },
    {
      name: "d",
      age: 4,
    },
  ];

  const result2 = _.differenceWith(arrObj1, arrObj2, _.isEqual); //trả về mảng chứa giá trị khac nhau của mảng 1 so với mảng 2, so sánh dến giá trị thuộc tính'
  console.log("result2", result2);

  const obj = {
    name: "a",
    age: 1,
  };
  const obj2 = {
    name: "a",
    age: 1,
  };

  console.log("obj", _.isEqual(obj, obj2)); //true

  return <div>CompareObjectArrayDemo</div>;
}
