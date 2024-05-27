import React from "react";
import { CSVLink } from "react-csv";
import TableUI from "./TableUI";

function DataTable({ query, headers, rows, csvData }) {
  return (
    <div>
      {query ? (
        <section className="text-gray-600 body-font pl-4">
          <div className="flex w-full justify-between mt-6 lg:mt-0">
            <div className="border-0 py-2 h-9 px-4 focus:outline-none text-black ml-100">
              Query Results:
            </div>
            <CSVLink
              data={csvData}
              filename={new Date().getTime().toString() + ".csv"}
              className="p-2"
            >
              <a className="text-sm flex mx-auto text-white bg-blue-500 border-0 py-2 h-9 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg justify-center items-center">
                <span className="">Download Data</span>
              </a>
            </CSVLink>
          </div>
          <TableUI headers={headers} rows={rows} />
        </section>
      ) : (
        <div className="flex text-center h-60 justify-center items-center text-gray-600 ">
          Please run your queries to check the Output.
        </div>
      )}
    </div>
  );
}

export default DataTable;
