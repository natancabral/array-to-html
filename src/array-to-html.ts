


const FAKE_STYLE = {
  table:    'width: 100%; border: 1px solid #000;',
  thead_td: 'background-color: #333; color: #fff; padding: 5px 10px;',
  tbody_td: 'padding: 5px 10px;',
}

function createFakeStyle(apply: boolean, typeFakeStyle: ITypeFakeStyle, addStyle?: string): string {
  if (typeFakeStyle)
    return `style="${FAKE_STYLE[typeFakeStyle]} ${addStyle || ''}"`;
  else
    return '';
}

function arrayToTable (array: any[], options: IOptions ) {

  if (!array || !Array.isArray(array) || array.length === 0) {
    return '';
  }

  let { minify, fake_style, columns_size} = options || {};

  // variables
  let lenTable = array.length;
  let headerKeys = [];
  let table: string = '';
  let header: string = '';
  let body: string = '';
  let bodyPiece: string = '';
  let itemOfArray: any;
  let widthTd: string = '';
  let hasColumSize:boolean = true;

  // traitament
  minify      || (minify = false);
  fake_style  || (fake_style = false);
  columns_size  || (columns_size = []);

  // header
  for(const keys in array[0]) {
    headerKeys.push(keys);
    header += `<td ${createFakeStyle(fake_style, 'thead_td')}>${keys}</td> `;
  }
  
  header = `
    <thead>
      <tr>
        ${header}
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

export {
  arrayToTable
} 

// var country = ["Norway", "Sweden", "Denmark"];
// var capital = ["Oslo", "Stockholm" , "Copenhagen"]
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