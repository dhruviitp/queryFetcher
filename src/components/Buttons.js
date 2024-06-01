import React from "react";
import toast from "react-hot-toast";
import createTable from "./CreateTable";

function Buttons({
  setCSVData,
  setQuery,
  setValue,
  setHeaders,
  setRows,
  setDefaults,
  defaults,
  value,
}) {
  const runQuery = () => {
    setQuery(value);
    const { tableHeaders, tableRows } = createTable(defaults);
    setHeaders(tableHeaders);
    setRows(tableRows);
    const temp = [];
    if (tableHeaders.length > 0 && tableRows.length > 0) {
      temp.push(tableHeaders);
      tableRows.forEach((row) => {
        temp.push(row);
      });
      setCSVData(temp);
      if (temp.length > 0) {
        toast.success("Your query has run successfully");
      } else {
        toast.error("There is some issue with loading your data.");
      }
    }
  };

  const reset = () => {
    // function to reset the editor
    setQuery("");
    setValue("select * from customers");
    setDefaults(1);
    setHeaders([]);
    setRows([]);
    setCSVData([]);
  };
  return (
    <div className="flex justify-center ">
      <div className="p-2 ">
        <button
          onClick={reset}
          className="text-sm flex text-white bg-blue-500 border-0 py-2 h-11 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg justify-center items-center"
        >
          Clear
        </button>
      </div>
      <div className="p-2">
        <button
          onClick={runQuery}
          className="text-sm flex mx-auto text-white bg-blue-500 border-0 py-2 h-11 px-4 focus:outline-none hover:bg-blue-600 rounded text-lg justify-center items-center"
        >
          <div></div>
          <div>Run</div>
        </button>
      </div>
    </div>
  );
}

export default Buttons;
