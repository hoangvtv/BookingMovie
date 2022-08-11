import React from "react";

export default function CardComponent() {
  return (
    <div className="card w-full">
      <div className="card-body bg-gray-200  py-8 rounded-t-lg px-5">
        <h3 className="text-purple-800 font-bold"> Category </h3>
        <p className="text-black text-xl my-2">
          {" "}
          CyberSoft FrontEnd Developer{" "}
        </p>
        <p className="font-thin text-xl text-gray-500 text-center">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          qui fugiat nulla exercitationem adipisci perferendis, ab placeat
          ducimus quae quis minima iusto aliquam veniam? Repudiandae molestias
          id iure ut nemo?{" "}
        </p>
      </div>

      <div className="footer  rounded-b-lg flex justify-between bg-gray-100 px-2">
        <p className="mt-4"> 1 USD </p>
        <button className="rounded-lg bg-purple-400 p-2 my-2 text-white hover:text-purple-400 hover:bg-gray-500 transition duration-300">
          {" "}
          Register{" "}
        </button>
      </div>
    </div>
  );
}
