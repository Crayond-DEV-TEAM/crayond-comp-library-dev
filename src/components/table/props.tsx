interface TableBody {
  slice(arg0: number, arg1: number): unknown;
  length: number;
  map(arg0: ({ id }: any | object, i: number) => any): unknown;
  [index: number]: object;
}

interface TableHeader {
  map(arg0: (val: any) => { key: any; width: number }): any;
  [index: number]: {
    disablePadding: boolean;
    // id: keyof TableData;
    id: string | number;
    label: string;
    align: 'center' | 'right' | 'left' | 'inherit' | 'justify' | undefined;
    variant?: 'CHECKBOX' | string | undefined;
    isSortable: boolean;
  };
}

interface TableData {
  map(arg0: (data: any, i: number) => any): unknown;
  [index: number]: {
    type: Array<string>;
    name: string;
    variant?:
      | 'circular'
      | 'rounded'
      | 'square'
      | {
          icon: React.ReactNode;
          method: Function;
        }[]
      | undefined;
    format?: string;
    label?: string;
    switchText?: { label_1: string | number; label_2: string | number }[];
    viewHandel?: Function;
  };
}

export interface TableProps {
  id?: any;
  Header: TableHeader;
  dataList: TableBody;
  tableData: TableData;
  setSelectedCheckbox?: any;
  selectedCheckbox?: Array<string | number>;
  checkboxHandleChange?: Function;
  handleSwitch?: Function;
  switchList?: Array<string | number>;
  SelectAll?:
    | Function
    | ((data: any | undefined, isRestSet: boolean | undefined) => {});
  tableMinWidth?: string;
  tableMinHeight?: string;
  tableMaxWidth?: string;
  tableMaxHeight?: string;
  tableName: string;
  paddingAll?: string;
  padding?: Array<string>;
  marginAll?: string;
  margin?: Array<string>;
  HeaderComponent: {
    variant: string | number;
    component?: React.ReactNode;
    styles?: {
      padding?: string | any;
      margin?: string | any;
    };
    headerSelect?: string;
    setHederSelect?: Function;
    searchPlaceholder?: string;
    selectOption?: { label: string; value: string | undefined }[];
    setHederSearch?: Function;
    deleteIcon?: React.ReactNode;
    downloadIcon?: React.ReactNode;
    funnelIcon?: React.ReactNode;
    searchIcon?: React.ReactNode;
    fillerMethod?: Function;
    downloadMethod?: Function;
    checkboxLabel?: string;
    primaryBtnText?: string;
    secondaryBtnText?: string;
    secondaryBtnIcon?: React.ReactNode;
    primaryBtnMethod?: Function;
    secondaryBtnMethod?: Function;
    headerCheckbox?: Boolean;
    setHederCheckbox?: Function;
  };
  isSelectedAll?: boolean;
  dense?: 'small' | 'medium' | undefined;
  headerOptions?: {
    fontSize?: string;
    fontWeight?: string;
    color?: string;
    bgColor?: string;
    borderBottom?: string;
    padding?: string;
  };
  rowOptions?: {
    rowOddBgColor: string;
    rowEvenBgColor: string;
  };
  cellOptions?: {
    fontSize?: string;
    fontWeight?: string;
    color?: string;
    bgColor?: string;
    borderBottom?: string;
    padding?: string;
  };
  tableBorderRadius?: string;
  tableBackground?: string | any;
  paginationOption: {
    isEnable:boolean;
    rowPerPage: number;
    rowsPerPageOptions?: Array<number | { value: number; label: string }>;
  };
  noDataFound?: {
    fontSize: string;
    fontWeight: string;
    color: string;
    bgColor: string;
    text: string;
    component: React.ReactNode | null;
  };
  stickyOptions?: {
    stickyHeader:boolean | undefined;
    stickyRight: Array<string>;
    stickyLeft: Array<string>;
  };
  alertOptions?:{
    isEnable?:boolean,
    title?:string,
    description?:string,
    primaryText?:string,
    secondaryText?:string,
    icon?:React.ReactNode;
  }
}
