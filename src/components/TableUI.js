import React from "react";

function TableUI({ headers, rows }) {
  return (
    <div className="w-full h-80 overflow-auto scrollbar-hide">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3  font-medium text-white text-sm bg-blue-500 sticky top-0"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row_value, index) => (
            <tr key={index}>
              {row_value.map((cell_value, index) => (
                <td
                  key={index}
                  className="border-t-2 border-gray-200 px-4 py-2 text-sm"
                >
                  {cell_value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableUI;
