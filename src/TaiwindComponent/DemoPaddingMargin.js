import React from "react";
// 1 đơn vị 0.25rem 1rem=16px
export default function DemoPaddingMargin() {
  return (
    <div className="container  ">
      <button
        className="bg-red-400 px-5 py-5"
        style={{
          width: "auto",
        }}
      >
        button padding
      </button>

      <br />
      <button className="m-5 bg-yellow-500">button margin</button>
    </div>
  );
}
