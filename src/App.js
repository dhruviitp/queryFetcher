import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Buttons from "./components/Buttons";
import ExistingQuery from "./components/ExistingQuery";
import QueryEditor from "./components/QueryEditor";
import DataTable from "./components/Table";

function App() {
  const [value, setValue] = useState("select * from customers;");
  const [rows, setRows] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [query, setQuery] = useState("");
  const [defaults, setDefaults] = useState(1);
  const [csvData, setCSVData] = useState([]);

  if (value === "") {
    setValue("Please enter a new query !! ");
  }

  useEffect(() => {
    if (value.toLowerCase() === "select * from customers;") {
      setDefaults(1);
    } else if (value.toLowerCase() === "select * from products;") {
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
