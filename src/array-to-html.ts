
const FAKE_STYLE = {
  table:    'width: 100%; border: 1px solid #777; margin: 1px 1px 3px 1px;',
  thead_td: 'background-color: #555; color: #fff; padding: 3px 7px;',
  tbody_td: 'padding: 3px 7px;',
}

function createFakeStyle(apply: boolean, typeFakeStyle: ITypeFakeStyle, addStyle?: string): string {
  if (apply)
    return `style="${FAKE_STYLE[typeFakeStyle]} ${addStyle || ''}"`;
  else if (addStyle)
    return `style="${addStyle}"`;
  else
    return '';
}

function arrayToTable (array: any[], options: IOptions ) {

  if (!array || !Array.isArray(array) || array.length === 0) {
    return '';
  }

  let { minify, fake_style, columns_size, header } = options || {};

  // set variables
  let lenTable              = array.length;
  let headerKeys: string[]  = [];
  let table: string         = '';
  let headerHtml: string    = '';
  let body: string          = '';
  let bodyPiece: string     = '';
  let itemOfArray: any      = null;
  let widthTd: string       = '';
  let hasColumSize:boolean  = true;
  let renderer: Function    = (el:any) => el;

  // soft treatment
  minify        || (minify = false);
  fake_style    || (fake_style = false);
  columns_size  || (columns_size = []);
  header        || (header = []);
  // arrays
  Array.isArray(columns_size) || (columns_size = []);
  Array.isArray(header) || (header = []);

  // header
  for(const keys in array[0]) {
    // renderer
    const headerFind = header.find((el) => el.property === keys);
    const label = headerFind?.label || keys;
    // push name
    headerKeys.push(keys);
    // push cell
    headerHtml += `<td ${createFakeStyle(fake_style, 'thead_td')}>${label}</td> `;
  }
  
  // draw header
  headerHtml = `
    <thead>
      <tr>
        ${headerHtml}
      </tr>
    </thead>`;

  // check length colums = keys
  if (columns_size.length !== headerKeys.length) {
    columns_size = [];
    hasColumSize = false;
  }

  // for array
  for (let i = 0; i < lenTable; i++) {
    // get item by array
    itemOfArray = array[i];
    bodyPiece = '';
    widthTd = '';

    for (let e = 0; e < headerKeys.length; e++) {

      // renderer
      const headerFind = header.find((el) => el.property === headerKeys[e]);
      renderer = headerFind?.renderer || (renderer = (el: any) => el);
      
      // columns size 2
      if (hasColumSize) {
        widthTd = columns_size[e] < 1 ? '' : `width: ${columns_size[e]}%`;
      }
      // columns size 1
      if (headerFind?.width) {
        widthTd = headerFind?.width < 1 ? '' : `width: ${headerFind?.width}%`;
        hasColumSize = true;
      }
      // cells
      bodyPiece += `<td ${createFakeStyle(fake_style, 'tbody_td', widthTd)}> ${ renderer(itemOfArray[headerKeys[e] || '']) } </td> `;
    }

    // draw line
    body += `
      <tr>
        ${bodyPiece}
      </tr>
    `;
  }

  // draw body
  body = `
    <tbody>
      ${body}
    </tbody>`;

  // done table
  table = `
  <table ${createFakeStyle(fake_style, 'table', hasColumSize ? 'width: 100%' : '')}> 
    ${headerHtml} 
    ${body} 
  </table>`;

  // soft minify 
  if (minify) {
    table = table.replace(/\s\s/g, '');
    // table = table.replace(/\n/g, '');
    table = table.replace(/[\n\t]/g, '');
    table = table.replace(/ >/g, '>');
  }
  
  return table;
}

export {
  arrayToTable
} 

// var table= document.createElement('table'),
// thead = document.createElement('thead'),
// tbody = document.createElement('tbody'),
// th,
// tr,
// td;

// th = document.createElement('th'),          
// th.innerHTML="County";
// table.appendChild(th);
// th = document.createElement('th'); 
// th.innerHTML= "Capital"
// table.appendChild(th);
// table.appendChild(thead);            
// table.appendChild(tbody);

// document.body.appendChild(table);
// for(var i=0;i<country.length;i++){
// tr = document.createElement('tr'),
// //for county
// td= document.createElement('td');
// td.innerHTML=country[i];
// tr.appendChild(td);

// //for capital
// td = document.createElement('td');
// td.innerHTML=capital[i];
// tr.appendChild(td);
// tbody.appendChild(tr);
// }