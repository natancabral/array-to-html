declare interface IOptions {
  minify?: boolean;
  fake_style?: boolean;
  columns_size?: number[];
}

type ITypeFakeStyle = 'table' | 'thead_td' | 'tbody_td' ;
