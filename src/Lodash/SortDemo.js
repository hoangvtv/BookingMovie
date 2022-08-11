import React from "react";
import _ from "lodash";
export default function SortDemo() {
  var arrPeople = [
    {
      id: 4,
      name: "Nguyen Van E",
      age: 10,
    },
    {
      id: 2,
      name: "Nguyen Van E",
      age: 80,
    },
    {
      id: 3,
      name: "Nguyen Van F",
      age: 50,
    },
    {
      id: 1,
      name: "Nguyen Van D",
      age: 30,
    },
  ];
  //es6
  var arrPeopleSort = arrPeople
    .sort((a, b) => a.name > b.name)
    .sort((a, b) => a.age > b.age);

  console.log(arrPeopleSort);

  //lodash
  //   const result = _.sortBy(arrPeople, "age");
  //   const result = _.sortBy(arrPeople, [(item) => item.name]);
  const result = _.sortBy(arrPeople, ["name", "age"]);
  console.log(result);
  return <div>SortDemo</div>;
}
