# Array to Html
Convert an array of objects to a simple html table, list or DOMElement.

# Install
```bash
$ npm i array-to-table-html
```
# Use 
```bash
const { arrayToTable } = require('array-to-html');

const tableArray = [
  {
    Name: 'Jack',
    Age: 40,
  },
  {
    Name: 'Maria',
    Age: 35,
  },  
];

const tableHtml = arrayToTable(tableArray);
console.log(tableHtml);

```
# Output table

<table> <thead> <tr> <td>Name</td> <td>Age</td></tr> </thead> <tbody><tr> <td>Jack</td> <td>40</td></tr><tr> <td>Maria</td> <td>35</td></tr></tbody></table>