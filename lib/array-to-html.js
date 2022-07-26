"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayToTable = void 0;
function arrayToTable(array, options) {
    if (!array || !Array.isArray(array) || array.length === 0) {
        return '';
    }
    const { minify } = options || {};
    let lenTable = array.length;
    let headerKeys = [];
    let table = '';
    let header = '';
    let body = '';
    let bodyPiece = '';
    let itemOfArray;
    for (const keys in array[0]) {
        headerKeys.push(keys);
        header += `<td>${keys}</td> `;
    }
    header = `
    <thead>
      <tr>
        ${header}
      </tr>
    </thead>`;
    for (let i = 0; i < lenTable; i++) {
        itemOfArray = array[i];
        bodyPiece = '';
        for (let e = 0; e < headerKeys.length; e++) {
            bodyPiece += `<td>${itemOfArray[headerKeys[e]]}</td> `;
        }
        body += `
      <tr>
        ${bodyPiece}
      </tr>
    `;
    }
    body = `
    <tbody>
      ${body}
    </tbody>`;
    table = `
  <table> 
    ${header} 
    ${body} 
  </table>`;
    if (minify) {
        table = table.replace(/\s\s/g, '');
        table = table.replace(/\n/g, '');
    }
    return table;
}
exports.arrayToTable = arrayToTable;
//# sourceMappingURL=array-to-html.js.map