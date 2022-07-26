declare interface IHeader {
  property: string;
  label?: string;
  renderer?: (element: any) => any;
  /**
   * Percent
   */
  width?: number;
}

declare interface IOptions {
  minify?: boolean;
  fake_style?: boolean;
  columns_size?: number[];
  header?: IHeader[];
}

type ITypeFakeStyle = 'table' | 'thead_td' | 'tbody_td' ;
