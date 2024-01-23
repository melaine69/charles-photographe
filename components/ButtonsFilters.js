import React from "react";
import { photoData } from "@/photoData";
 
const ButtonsFilters = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center mb-10">
        {menuItems.map((Val, id) => {
          return (
            <button
              className="mx-5 font-semibold bg-customColor-white text-customColor-dark rounded-xl my-6 p-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              key={id}
              onClick={() => filterItem(Val)}
            >
              {Val}
            </button>
          );
        })}
           <button
          className="mx-5 font-semibold bg-customColor-white text-customColor-dark rounded-xl my-6 p-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          onClick={() => setItem(photoData)}
        >
          Tous
        </button>
       </div>
    </>
  );
};
 
export default ButtonsFilters;