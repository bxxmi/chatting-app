const fs = require('fs');

module.exports = (filePath) => {
  dataToRead = fs.readFileSync(
    filePath,
    { encoding: "utf-8"}
  );

  const rows = dataToRead.split('\n');
  const headers = rows[0].split(',');

  const rowDatas = [];
  
  rows.slice(1).forEach((row) => {
    let rowData = {};

    for (let headerIndex = 0; headerIndex < headers.length; headerIndex++) {
      const header = headers[headerIndex];
      rowData[header] = row.split(',')[headerIndex];
    }
    rowDatas.push(rowData);
  });
  return rowDatas;
};
