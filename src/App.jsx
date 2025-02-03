import { createContext, useEffect, useState } from "react";
import { AddWork } from "./components/AddWork";
import { ListItems } from "./components/ListItems";

export const todo = createContext();

function App() {
  const [work, setWork] = useState("");
  const [workList, setWorkList] = useState(
    localStorage.getItem("workList")
      ? JSON.parse(localStorage.getItem("workList"))
      : []
  );

  useEffect(() => {
    // console.log(workList);
    localStorage.setItem("workList", JSON.stringify(workList));
  }, [workList]);

  // Add a work to the list
  const addWork = () => {
    if (work) {
      setWorkList([
        ...workList,
        { id: Date.now(), workName: work, isCompleted: false },
      ]);
      setWork("");
    } else {
      alert("Please enter a work");
    }
  };
  // Delete the work from the list
  const deleteWork = (id) => {
    const deleteItem = workList.filter((item) => item.id !== id);
    // console.log("deleteItem", deleteItem);
    setWorkList(deleteItem);
  };
  // Finish the work
  const finish = (id) => {
    const updateWorkList = workList.map((item) => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    // console.log("updateWorkList", updateWorkList);
    setWorkList(updateWorkList);
  };

  return (
    <div className="w-full min-h-screen bg-primary font-display">
      <div className="w-full py-8 px-4 sm:p-4 sm:w-2/3 sm:mx-auto">
        <div className="" id="header">
          <h1 className="font-bold text-3xl text-light sm:text-center">
            TODO APP
          </h1>
        </div>
        <todo.Provider
          value={{ work, setWork, addWork, workList, deleteWork, finish }}
        >
          <AddWork />
          <ListItems />
        </todo.Provider>
      </div>
    </div>
  );
}

export default App;
