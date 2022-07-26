

declare interface IOptions {
  minify?: boolean;
  fakeStyle?: boolean
}

function arrayToTable (array: any[], options: IOptions ) {

  if (!array || !Array.isArray(array) || array.length === 0) {
    return '';
  }

  const { minify } = options || {};

  // variables
  let lenTable = array.length;
  let headerKeys = [];
  let table: string = '';
  let header: string = '';
  let body: string = '';
  let bodyPiece: string = '';
  let itemOfArray: any;

  // header

  for(const keys in array[0]) {
    headerKeys.push(keys);
    header += `<td>${keys}</td> `;
  }
  
  header = `
    <thead>
      <tr>
        ${header}
      </tr>
    </thead>`;

  // for array
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