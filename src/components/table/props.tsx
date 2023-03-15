interface TableBody {
    map(arg0: ({ id }: any) => any): unknown;
    [index: number]: object
}

interface TableHeader {
    [index: number]: object
    // disablePadding: boolean;
    // id: keyof TableBody;
    // label: string;
    // numeric: boolean;
}

interface TableData {
    [index: number]: object
}

export interface TableProps  {
    id?: any;
    Header: TableHeader;
    dataList: TableBody;
    tableData: TableData;
    setSelectedCheckbox:any;
    selectedCheckbox:any;
  };
  