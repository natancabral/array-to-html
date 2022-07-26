"use strict";
exports.__esModule = true;
function arrayToTable(array, options) {
    if (!array || !Array.isArray(array)) {
        return '';
    }
    // variables
    var lenTable = array.length;
    var headerKeys = array.keys();
    var header = '';
    var table = '';
    console.log(headerKeys);
    // for array
    // for (let i = 0; i < lenTable; i++) {
    // }
    // table += `<table> ${table} </table>`;
    table += '<table>' + table + '</table>';
    return table;
}
exports["default"] = {
    arrayToTable: arrayToTable
};
