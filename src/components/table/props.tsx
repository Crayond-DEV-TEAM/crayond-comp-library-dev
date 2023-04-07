interface TableBody {
  slice(arg0: number, arg1: number): unknown;
  length: number;
  map(arg0: ({ id }: any | object, i:number) => any): unknown;
  [index: number]: object;
}

interface TableHeader {
  map(arg0: (val: any) => { key: any; width: number }): any;
  [index: number]: object;
  // disablePadding: boolean;
  // id: keyof TableBody;
  // label: string;
  // numeric: boolean;
}

interface TableData {
  map(arg0: (data: any, i: number) => any): unknown;
  [index: number]:  any  ;
}

export interface TableProps {
  id?: any;
  Header: TableHeader;
  dataList: TableBody;
  tableData: TableData;
  setSelectedCheckbox: any;
  selectedCheckbox: any;
  checkboxHandleChange: any;
  handleSwitch: any;
  switchList: any;
  SelectAll: any;
  tableMinWidth: any;
  tableMinHeight: any;
  tableMaxHeight:string | undefined;
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
  tableBorderRadius: any;
  tableBackground: string;
  paginationOption: {
    rowPerPage: number;
    rowsPerPageOptions?: Array<number | { value: number; label: string }>;
  };
  noDataFound: {
    fontSize: string;
    fontWeight: string;
    color: string;
    bgColor: string;
    text: string;
    component: React.ReactNode | null;
  };
  stickyOptions:{
    stickyHeader:boolean | undefined;
    stickyRight:Array<any>;
    stickyLeft:Array<any>;
  }
}
