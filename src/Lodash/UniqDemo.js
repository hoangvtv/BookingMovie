import React from "react";
import _ from "lodash";

//uniq(array) loại bỏ các phần tử kiểu dữ liệu nguyên thủy trùng nhau
//uniqBy(arr, iteratee=_.identity) loại bỏ các phần tử kiểu object trùng nhau theo 1 tiêu chí nào đó

const UniqDemo = () => {
  const arr = [1, 2, 2, 2, 4, 5, 6];
  console.log(_.uniq(arr));

  const arrPerson = [
    { id: 1, name: "Nguyen Van A" },
    { id: 1, name: "Nguyen Van B" },
    { id: 1, name: "Nguyen Van C" },
    { id: 2, name: "Nguyen Van B" },
    { id: 3, name: "Nguyen Van C" },
    { id: 4, name: "Nguyen Van D" },
    { id: 5, name: "Nguyen Van E" },
  ];

  console.log(_.uniqBy(arrPerson, "id"));

  return <div>UniqDemo</div>;
};

export default UniqDemo;
