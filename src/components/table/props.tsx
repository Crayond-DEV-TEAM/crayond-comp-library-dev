interface TableBody {
  slice(arg0: number, arg1: number): unknown;
  length: number;
  map(arg0: ({ id }: any) => any): unknown;
  [index: number]: object;
}

interface TableHeader {
  map(arg0: (val: any) => { key: any; width: number; }): any;
  [index: number]: object;
  // disablePadding: boolean;
  // id: keyof TableBody;
  // label: string;
  // numeric: boolean;
}

interface TableData {
  [index: number]: object;
}

export interface TableProps {
  id?: any;
  Header: TableHeader;
  dataList: TableBody;
  tableData: any;
  setSelectedCheckbox: any;
  selectedCheckbox: any;
  checkboxHandleChange: any;
  handleSwitch: any;
  switchList: any;
  SelectAll: any;
  tableMinWidth: any;
  tableMinHeight: any;
  tableName: string;
  paddingAll: any;
  padding: Array<string>;
  marginAll: any;
  margin: Array<string>;
  HeaderComponent: any;
  isSelectedAll: boolean;
  dense: 'small' | 'medium' | undefined;
  headerOptions: object;
  rowOptions: object;
  cellOptions: object;
  tableBorderRadius:any;
  tableBackground:string;
  noDataFound: object;

}
