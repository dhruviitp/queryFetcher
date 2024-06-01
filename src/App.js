import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Buttons from "./components/Buttons";
import ExistingQuery from "./components/ExistingQuery";
import QueryEditor from "./components/QueryEditor";
import DataTable from "./components/Table";

function App() {
  const [value, setValue] = useState("select * from customers");
  const [rows, setRows] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [query, setQuery] = useState("");
  const [defaults, setDefaults] = useState(1);
  const [csvData, setCSVData] = useState([]);
  const queries = ["select * from customers", "select * from products"];
  if (value === "") {
    setValue("Please enter a new query !! ");
  }

  useEffect(() => {
    if (value.toLowerCase() === queries[0]) {
      setDefaults(1);
    } else if (value.toLowerCase() === queries[1]) {
      setDefaults(2);
    } else {
      setDefaults(0);
    }
  }, [value]);

  return (
    <div>
      <div>
        <div>
          <div>
            <ExistingQuery setValue={setValue} setDefaults={setDefaults} />
          </div>
          <div>
            <div className="mt-4 px-5 font-bold">
              <div className="text-sm">
                Exisitng queries:
                <ul className="flex ">
                  <li>
                    {" "}
                    <button
                      onClick={() => {
                        setValue(queries[0]);
                      }}
                      className="text-sm flex text-white bg-blue-500 border-0 py-2 h-8 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg justify-center items-center"
                    >
                      {queries[0]}
                    </button>
                  </li>
                  <li>
                    {" "}
                    <button
                      onClick={() => {
                        setValue(queries[1]);
                      }}
                      className="text-sm flex text-white bg-blue-500 border-0 py-2 h-8 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg justify-center items-center mx-4"
                    >
                      {queries[1]}
                    </button>
                  </li>
                </ul>
                <br></br>
                <button
                  disabled={true}
                  onClick={() => {}}
                  className="text-sm flex text-white bg-gray-500 border-0 py-2 h-8 px-4 focus:outline-none  rounded text-lg justify-center items-center"
                >
                  Add more queries
                </button>
              </div>
              <br />
              <div className="text-sm">QUERYBOX:</div>
            </div>
            <div className="mt-4 px-5 font-bold">
              <div className="text-sm">Enter your query in the input box:</div>
              <br />
              <div className="text-sm">QUERYBOX:</div>
            </div>
            <QueryEditor value={value} setValue={setValue} />
            <Buttons
              setQuery={setQuery}
              setHeaders={setHeaders}
              setRows={setRows}
              setCSVData={setCSVData}
              value={value}
              setValue={setValue}
              setDefaults={setDefaults}
              defaults={defaults}
            />
          </div>
        </div>
        <DataTable
          query={query}
          headers={headers}
          rows={rows}
          csvData={csvData}
        />
      </div>
      <Toaster
        position="center"
        gutter={8}
        toastOptions={{
          duration: 3000,
        }}
      />
    </div>
  );
}

export default App;
