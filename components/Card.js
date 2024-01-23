import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        
          {item.map((Val) => {
            return (
              <div className="mb-4"
                
                key={Val.id}
              >
                <div>
                  <img src={Val.img} alt="photo" className="h-auto max-w-full rounded-lg transition-transform duration-500 hover:scale-110 hover:opacity-70" />
                </div>
                
              </div>
            );
          })}
        </div>
  
    </>
  );
};

export default Card;