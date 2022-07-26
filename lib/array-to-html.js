"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayToTable = void 0;
const FAKE_STYLE = {
    table: 'width: 100%; border: 1px solid #000; ',
    thead_td: 'background-color: #333; color: #fff; padding: 5px 10px; ',
    tbody_td: 'padding: 5px 10px; ',
};
function createFakeStyle(apply, typeFakeStyle) {
    if (typeFakeStyle)
        return `style="${FAKE_STYLE[typeFakeStyle]}"`;
    else
        return '';
}
function arrayToTable(array, options) {
    if (!array || !Array.isArray(array) || array.length === 0) {
        return '';
    }
    let { minify, fake_style } = options || {};
    let lenTable = array.length;
    let headerKeys = [];
    let table = '';
    let header = '';
    let body = '';
    let bodyPiece = '';
    let itemOfArray;
    minify || (minify = false);
    fake_style || (fake_style = false);
    for (const keys in array[0]) {
        headerKeys.push(keys);
        header += `<td ${createFakeStyle(fake_style, 'thead_td')}>${keys}</td> `;
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
            bodyPiece += `<td ${createFakeStyle(fake_style, 'tbody_td')}>${itemOfArray[headerKeys[e]]}</td> `;
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
  <table ${createFakeStyle(fake_style, 'table')}> 
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