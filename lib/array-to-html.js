"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayToTable = void 0;
const FAKE_STYLE = {
    table: 'width: 100%; border: 1px solid #777; margin: 1px 1px 3px 1px;',
    thead_td: 'background-color: #555; color: #fff; padding: 3px 7px;',
    tbody_td: 'padding: 3px 7px;',
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
    let { minify, fake_style, columns_size, header } = options || {};
    let lenTable = array.length;
    let headerKeys = [];
    let table = '';
    let headerHtml = '';
    let body = '';
    let bodyPiece = '';
    let itemOfArray;
    let widthTd = '';
    let hasColumSize = true;
    let renderer;
    minify || (minify = false);
    fake_style || (fake_style = false);
    columns_size || (columns_size = []);
    header || (header = []);
    Array.isArray(columns_size) || (columns_size = []);
    Array.isArray(header) || (header = []);
    for (const keys in array[0]) {
        headerKeys.push(keys);
        headerHtml += `<td ${createFakeStyle(fake_style, 'thead_td')}>${keys}</td> `;
    }
    headerHtml = `
    <thead>
      <tr>
        ${headerHtml}
      </tr>
    </thead>`;
    if (columns_size.length !== headerKeys.length) {
        columns_size = [];
        hasColumSize = false;
    }
    for (let i = 0; i < lenTable; i++) {
        itemOfArray = array[i];
        bodyPiece = '';
        widthTd = '';
        for (let e = 0; e < headerKeys.length; e++) {
            const headerFind = header.find((el) => el.property === headerKeys[e]);
            renderer = (headerFind === null || headerFind === void 0 ? void 0 : headerFind.renderer) || (renderer = (el) => el);
            if (hasColumSize) {
                widthTd = columns_size[e] < 1 ? '' : ` width: ${columns_size[e]}%`;
            }
            if (headerFind === null || headerFind === void 0 ? void 0 : headerFind.width) {
                widthTd = (headerFind === null || headerFind === void 0 ? void 0 : headerFind.width) < 1 ? '' : ` width: ${headerFind === null || headerFind === void 0 ? void 0 : headerFind.width}%`;
            }
            bodyPiece += `<td ${createFakeStyle(fake_style, 'tbody_td', widthTd)}> ${renderer(itemOfArray[headerKeys[e]])} </td> `;
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
    ${headerHtml} 
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