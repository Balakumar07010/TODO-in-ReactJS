import React, { useContext } from "react";
import closeLogo from "../assets/closeLogo.svg";
import { todo } from "../App";

export const AddWork = () => {
  const { work, setWork, addWork } = useContext(todo);

  return (
    <div className="flex flex-col sm:flex sm:flex-row my-8 gap-4">
      <div className="flex flex-1 relative">
        <input
          type="text"
          className="flex-1 border-2 border-secondary text-light p-2 pr-8 placeholder-light outline-none rounded-lg relative"
          placeholder="Enter a Work "
          value={work}
          onChange={(e) => setWork(e.target.value)}
        />
        <button type="button" onClick={() => setWork("")}>
          <img
            src={closeLogo}
            alt="CloseButton"
            className="absolute right-2 top-2 cursor-pointer"
          ></img>
        </button>
      </div>
      <button
        className="text-base bg-secondary text-light p-2 font-semibold rounded-lg cursor-pointer hover:bg-[#727D73]"
        onClick={addWork}
      >
        Add Work
      </button>
    </div>
  );
};
