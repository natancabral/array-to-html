# Array to Html
Convert an array of objects to a simple html table, list or DOMElement.

# Install [<img src="https://github.com/natancabral/pdfkit-table/blob/main/example/npm-tile.png">](https://www.npmjs.com/package/array-to-html)

[![NPM](https://nodei.co/npm/array-to-html.png)](https://www.npmjs.com/package/array-to-html)

```bash
$ npm i array-to-html
```
# Use 
## Array to Table
```js
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

### Output 

<table> <thead> <tr> <td>Name</td> <td>Age</td></tr> </thead> <tbody><tr> <td>Jack</td> <td>40</td></tr><tr> <td>Maria</td> <td>35</td></tr></tbody></table>