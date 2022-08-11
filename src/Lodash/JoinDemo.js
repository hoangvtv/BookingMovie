import React from "react";
import _ from "lodash";

export default function zJoinDemo() {
  let arr = ["Hoàng", "Tú", "Vy"];

  let arrPerson = [
    {
      id: 1,
      name: "Hoàng",
    },
    {
      id: 2,
      name: "Vy",
    },
    {
      id: 3,
      name: "Tú",
    },
  ];

  //es6
  let result = arr.join("-");

  //lodash
  let resultLodash = _.join(arr, "*");

  const name = _.find(arr, (item) => {
    return item === "Tú";
  }).toUpperCase();

  const person = _.find(arrPerson, (item) => {
    return item.name === "Tú";
  });

  const lastPerson = _.last(arrPerson);
  const firstPerson = _.first(arrPerson);

  const arrId = [
    ["001", "Alice"],
    ["002", "Pop"],
    ["003", "Barry"],
  ];
  const [id1, name1] = _.first(arrId);
  const [id2, name2] = _.last(arrId);

  return (
    <div>
      {" "}
      <div>{result}</div>
      <div>{resultLodash}</div>
      <div>{name}</div>
      <p>
        {" "}
        {person.name}- {person.id}{" "}
      </p>
      <p>
        Last person: {lastPerson.name}- {lastPerson.id}{" "}
      </p>
      <p>
        First person: {firstPerson.name}- {firstPerson.id}{" "}
      </p>
      <p>
        Double Arr: {id1} - {name1}
      </p>
      <p>
        Double Arr: {id2} - {name2}
      </p>
    </div>
  );
}
