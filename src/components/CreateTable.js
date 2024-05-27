export default function CreateTable(data) {
  let tableDataStore = null;
  if (data === 1) {
    tableDataStore = require("./DataStore/customers.json");
  } else if (data === 2) {
    tableDataStore = require("./DataStore/products.json");
  }
  let tableHeaders = [];
  let tableRows = [];
  for (var i = 0; i < tableDataStore.length; i++) {
    const row = tableDataStore[i];
    if (i === 0) {
      for (const item in row) {
        tableHeaders.push(row[item]);
      }
    } else {
      let temp = [];
      for (const item in row) {
        temp.push(row[item]);
      }
      tableRows.push(temp);
    }
  }
  return { tableHeaders, tableRows };
}
