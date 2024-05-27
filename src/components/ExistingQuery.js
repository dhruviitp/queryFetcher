import React from "react";

function ExistingQuery({ setDefaults, setValue }) {
  const qurtyValue = [
    {
      query: "select * from customers;",
      default: 1,
    },
    {
      query: "select * from products;",
      default: 2,
    },
  ];
  return (
    <div>
      <div className="flex items-center  justify-center  py-2 h-11 px-4  text-white bg-blue-500  w-100 ">
        My SQL editior
      </div>
    </div>
  );
}

export default ExistingQuery;
