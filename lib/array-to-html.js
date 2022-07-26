"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayToTable = void 0;
const FAKE_STYLE = {
    table: 'width: 100%; border: 1px solid #000;',
    thead_td: 'background-color: #333; color: #fff; padding: 5px 10px;',
    tbody_td: 'padding: 5px 10px;',
};
function createFakeStyle(apply, typeFakeStyle, addStyle) {
    if (typeFakeStyle)
        return `style="${FAKE_STYLE[typeFakeStyle]} ${addStyle || ''}"`;
    else
        return '';
}
function arrayToTable(array, options) {
    if (!array || !Array.isArray(array) || array.length === 0) {
        return '';
    }
    let { minify, fake_style, columns_size } = options || {};
    let lenTable = array.length;
    let headerKeys = [];
    let table = '';
    let header = '';
    let body = '';
    let bodyPiece = '';
    let itemOfArray;
    let widthTd = '';
    let hasColumSize = true;
    minify || (minify = false);
    fake_style || (fake_style = false);
    columns_size || (columns_size = []);
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
    if (columns_size.length !== headerKeys.length) {
        columns_size = [];
        hasColumSize = false;
    }
    for (let i = 0; i < lenTable; i++) {
        itemOfArray = array[i];
        bodyPiece = '';
        for (let e = 0; e < headerKeys.length; e++) {
            if (hasColumSize) {
                widthTd = columns_size[e] < 1 ? '' : ` width: ${columns_size[e]}%`;
            }
            bodyPiece += `<td ${createFakeStyle(fake_style, 'tbody_td', widthTd)}>${itemOfArray[headerKeys[e]]}</td> `;
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