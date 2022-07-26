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

// array collection
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

// the magic
const tableHtml = arrayToTable(tableArray);
// output
console.log(tableHtml);

```

### Output 

<table> <thead> <tr> <td>Name</td> <td>Age</td></tr> </thead> <tbody><tr> <td>Jack</td> <td>40</td></tr><tr> <td>Maria</td> <td>35</td></tr></tbody></table>


## Options

| **Options**        | Type | Description                      |
|--------------------|------|----------------------------------|
| **minify**         | Boolean | Compress HTML, remove spaces and breaks |
| **fake_style**     | Boolean | Insert styles |
| **columns_size**   | Numeric Array | Percent array [25, 25, 0, 50] |
| **header**         | Array | Header property, label, width |


```js
// array collection
const tableArray = [ ... ];

// options
const options = {
  minify: true, 
  fake_style: true,
  columns_size: [70, 30], // 70%. 30% (two columns)
  header: [
    {
      property: 'Name',
      label: 'N-A-M-E',
      width: 70, // 70%
    }
  ]
}
// the magic
const tableHtml = arrayToTable(tableArray, options);
```


## ToDo

- Table DOMElement
- Array to List


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
