# Array to Html
Convert an array of objects to a simple html table, list or DOMElement.

# Install [<img src="https://github.com/natancabral/pdfkit-table/blob/main/example/npm-tile.png">](https://www.npmjs.com/package/array-to-html)

[![NPM](https://nodei.co/npm/array-to-html.png)](https://www.npmjs.com/package/array-to-html)

```bash
$ npm i array-to-html
```
# Use 
## Array to Table
### Sample 

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


## Options

| **Options**      | Type | Description                      |
|------------------|------|----------------------------------|
| **minify**       | boolean | Compress HTML, remove spaces and bleaks |
| **fake_style**   | boolean | Insert styles |
| **columns_size**  | numeric array | Percent array [25, 25, 0, 50] |

## License

The MIT License.

## Author

<table>
  <tr>
    <td>
      <img src="https://github.com/natancabral.png?s=100" width="100"/>
    </td>
    <td>
      Natan Cabral<br />
      <a href="mailto:natancabral@hotmail.com">natancabral@hotmail.com</a><br />
      <a href="https://github.com/natancabral/">https://github.com/natancabral/</a>
    </td>
  </tr>
</table>
