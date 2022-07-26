declare interface IOptions {
  minify?: boolean;
  fake_style?: boolean;
  columnsSize?: number[];
}

type ITypeFakeStyle = 'table' | 'thead_td' | 'tbody_td' ;
