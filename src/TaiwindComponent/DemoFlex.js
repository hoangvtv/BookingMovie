import React from "react";

export default function DemoFlex() {
  return (
    <div className="w-screen h-screen bg-purple-400">
      <div className="flex justify-end h-1/2 w-full bg-red-500">
        <div className=" h-10 bg-yellow-400"> item 1</div>
        <div className=" h-10 bg-gray-400"> item 2</div>
        <div className=" h-10 bg-pink-200"> item 3</div>
      </div>
    </div>
  );
}
