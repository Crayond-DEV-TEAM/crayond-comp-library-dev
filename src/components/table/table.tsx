import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { Cusmstyle } from './style';
import { TableProps } from './props';
import EnhancedTableBody from './tableRow';
import { CustomCheckbox } from '../checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TablePagination from '@mui/material/TablePagination';
import Typography from '@mui/material/Typography';
import { HeaderOne } from '../headerOne';
import { HeaderTwo } from '../HeaderTwo';
import * as excelJS from 'exceljs';
import { saveAs } from 'file-saver';

const EnhancedTableHead = ({
  Header,
  selectAllCheckbox,
  isSelectedAll,
  headerOptions,
}: any) => {
  return (
    <TableHead>
      <TableRow>
        {Header?.map((val: any, i: number) => {
          return (
            <TableCell
              key={'Header' + i}
              align={val?.align}
              padding={val.disablePadding ? 'none' : 'normal'}
              sx={{
                fontSize: headerOptions?.fontSize,
                color: headerOptions?.color,
                fontWeight: headerOptions?.fontWeight,
                backgroundColor: headerOptions?.bgColor,
                borderBottom: headerOptions?.borderBottom,
                padding: headerOptions?.padding,
              }}
            >
              {val?.varient === 'CHECKBOX' ? (
                <FormControlLabel
                  style={{ marginLeft: '0px' }}
                  control={
                    <CustomCheckbox
                      name="selectAll"
                      value={isSelectedAll}
                      onChange={selectAllCheckbox}
                    />
                  }
                  label={
                    <TableSortLabel>
                      <Typography sx={Cusmstyle.tableHeader}>
                        {val?.label}
                      </Typography>
                    </TableSortLabel>
                  }
                />
              ) : (
                <TableSortLabel>
                  <Typography sx={Cusmstyle.tableHeader}>
                    {val?.label}
                  </Typography>
                </TableSortLabel>
              )}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default function EnhancedTable({
  Header,
  dataList,
  tableData,
  setSelectedCheckbox,
  selectedCheckbox,
  checkboxHandleChange,
  handleSwitch,
  switchList,
  SelectAll,
  tableMinWidth,
  tableMinHeight,
  tableName,
  paddingAll,
  padding,
  marginAll,
  margin,
  HeaderComponent,
  isSelectedAll,
  dense,
  headerOptions,
  cellOptions,
  rowOptions,
  tableBorderRadius,
}: TableProps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const selectAllCheckbox = (data: any, e: any) => {
    let ids = dataList?.map(({ id }: any) => id);
    SelectAll(ids, !e.target.checked);
  };

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const workbook = new excelJS.Workbook();
  workbook.creator = 'test';
  workbook.lastModifiedBy = 'test';
  workbook.created = new Date();
  workbook.modified = new Date();

  let sheet:any = workbook.addWorksheet('TABLE');

  // 添加表头
  sheet.getRow(1).values = Header?.map((val: any) => val.id);

  // const datas = dataList?.map((list: any) => {
  //   console.log('🚀 ~ file: table.tsx:128 ~ datas ~ head:', list);

  //   return (Header?.map((val: any) => {
  //     return { [val?.id]: list?.[val?.id] };
  //   })).flat(2)
  // });
  // console.log('🚀 ~ file: table.tsx:135 ~ column:', datas);

  sheet.columns = Header?.map((val: any) => ({ key: val.id, width: 35 }));
  // [
  //   { key: "category", width: 30 },
  //   { key: "2018-05", width: 30 },
  //   { key: "2018-06", width: 30 },
  //   { key: "2018-07", width: 30 },
  //   { key: "2018-08", width: 30 },
  //   { key: "store", width: 30 }
  // ];
  const data = [
    {
      category: '衣服',
      '2018-05': 300,
      '2018-06': 230,
      '2018-07': 730,
      '2018-08': 630,
      store: '王小二旗舰店',
    },
    {
      category: '零食',
      '2018-05': 672,
      '2018-06': 826,
      '2018-07': 302,
      '2018-08': 389,
      store: '吃吃货',
    },
  ];
  const dataLists:any = dataList?.map(({calories,id, name, fat, carbs,protein,overall_progress, status,performance,global_rating,experience }) => {
    	return {calories, id, name, fat, carbs,protein,overall_progress, status,performance,global_rating,experience };
   
  })
  sheet.addRows(dataLists);
  console.log("🚀 ~ file: table.tsx:164 ~ dataList:====", dataLists)

  const row = sheet.getRow(1);
  row.eachCell((cell:any, rowNumber:any) => {
    sheet.getColumn(rowNumber).alignment = {
      vertical: 'middle',
      horizontal: 'center',
    };
    sheet.getColumn(rowNumber).font = { size: 14, family: 2 };
  });

  console.log(workbook.xlsx);

  const handelDownload = () => {
    workbook.xlsx.writeBuffer().then(function (buffer: any) {
      const blob = new Blob([buffer], { type: 'applicationi/xlsx' });
      saveAs(blob, 'myexcel.xlsx');
    });
  };
  return (
    <Box
      sx={{
        margin: marginAll,
        marginTop: margin?.[0],
        marginRight: margin?.[1],
        marginBottom: margin?.[2],
        marginLeft: margin?.[3],
        padding: paddingAll,
        paddingTop: padding?.[0],
        paddingRight: padding?.[1],
        paddingBottom: padding?.[2],
        paddingLeft: padding?.[3],
      }}
    >
      <Paper sx={Cusmstyle.tablePaper}>
        <Box sx={Cusmstyle.titleContainer}>
          <Box>
            <Typography sx={Cusmstyle.tableTitle}>{tableName}</Typography>
          </Box>
          <Box flexGrow={1}>
            <EnhancedHeader
              selectedCheckbox={selectedCheckbox}
              SelectAll={SelectAll}
              HeaderComponent={HeaderComponent}
              handelDownload={handelDownload}
            />
          </Box>
        </Box>
        <TableContainer
          className="tableContainer"
          sx={{ minHeight: tableMinHeight, borderRadius:tableBorderRadius }}
        >
          <Table
            sx={{ ...Cusmstyle.tableContainer, minWidth: tableMinWidth }}
            aria-labelledby="tableTitle"
            size={dense}
          >
            <EnhancedTableHead
              Header={Header}
              selectAllCheckbox={selectAllCheckbox}
              isSelectedAll={isSelectedAll}
              headerOptions={headerOptions}
            />
            <EnhancedTableBody
              Body={dataList?.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )}
              TableData={tableData}
              handleSwitch={handleSwitch}
              switchList={switchList}
              checkboxHandleChange={checkboxHandleChange}
              setSelectedCheckbox={setSelectedCheckbox}
              selectedCheckbox={selectedCheckbox}
              cellOptions={cellOptions}
              rowOptions={rowOptions}
            />
          </Table>
        </TableContainer>
        <TablePagination
          sx={{ alignSelf: 'flex-end' }}
          rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
          component="div"
          count={dataList?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

const EnhancedHeader = (props: any) => {
  switch (props?.HeaderComponent?.variant) {
    case 1:
      return (
        <HeaderOne
          HeaderComponent={props?.HeaderComponent}
          selectedCheckbox={props?.selectedCheckbox}
          SelectAll={props?.SelectAll}
          handelDownload={props?.handelDownload}
        />
      );
    case 2:
      return <HeaderTwo HeaderComponent={props?.HeaderComponent} />;
    case 'CUSTOM':
      return props?.HeaderComponent?.component;
    default:
      return;
  }
};

EnhancedTable.defaultProps = {
  Header: [],
  selectAllCheckbox: () => {},
  isSelectedAll: false,
  cellOptions: {},
  headerOptions: {},
};

EnhancedTableHead.defaultProps = {
  Header: [],
  dataList: [],
  tableData: [],
  setSelectedCheckbox: () => {},
  selectedCheckbox: [],
  checkboxHandleChange: () => {},
  handleSwitch: () => {},
  switchList: [],
  SelectAll: () => {},
  tableMinWidth: '100%',
  tableMinHeight: '100%',
  tableName: '',
  paddingAll: 0,
  padding: [],
  marginAll: 0,
  margin: [],
  HeaderComponent: {},
  isSelectedAll: false,
  dense: 'small',
  headerOptions: {},
  rowOptions:{},
  cellOptions: {},
};

EnhancedHeader.defaultProps = {
  HeaderComponent: {},
  selectedCheckbox: [],
  SelectAll: () => {},
  component: <></>,
};
