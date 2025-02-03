import closeLogo from "../assets/closeLogo.svg";
import React, { useContext, useState } from "react";
import { todo } from "../App";

export const ListItems = () => {
  const { workList, deleteWork, finish } = useContext(todo);

  return (
    <div>
      <h1 className="font-bold text-xl text-light">LIST ITEMS</h1>
      {workList && (
        <ul className="text-light ">
          {workList.map((item, index) => (
            <div
              key={index}
              className="relative hover:scale-105 transition-all"
            >
              <li
                className={`border border-light mt-4 p-2 relative cursor-pointer rounded-lg hover:scale-105 transition-all ${
                  item.isCompleted ? "line-through" : ""
                }`}
                onClick={() => finish(item.id)}
              >
                {item.workName}
              </li>
              <button
                className="cursor-pointer z-20 absolute right-2 top-2"
                onClick={() => deleteWork(item.id)}
              >
                <img src={closeLogo} alt="" className=" " />
              </button>
            </div>
          ))}
        </ul>
      )}
      {!workList.length && (
        <div className="mt-12 text-center">
          <p className="text-light text-2xl uppercase">Add a Work...</p>
        </div>
      )}
    </div>
  );
};
