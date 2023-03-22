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
import { TablePagination, Typography } from '@mui/material';
import { HeaderOne } from '../headerOne';
import { HeaderTwo } from '../HeaderTwo';

const EnhancedTableHead = ({ Header, selectAllCheckbox, isSelectedAll }: any) => {
  return (
    <TableHead>
      <TableRow>
        {Header?.map((val: any, i: number) => {
          return (
            <TableCell
              key={"Header"+i}
              align={val?.align}
              padding={val.disablePadding ? 'none' : 'normal'}
            >
              {val?.varient === 'CHECKBOX' && (
                <CustomCheckbox name="selectAll" value={isSelectedAll} onChange={selectAllCheckbox} />
              )}
              <TableSortLabel>
                <Typography sx={Cusmstyle.tableHeader}>{val?.label}</Typography>
              </TableSortLabel>
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

  return (
    <Box
      sx={{
        margin: marginAll,
        marginTop: margin[0],
        marginRight: margin[1],
        marginBottom: margin[2],
        marginLeft: margin[3],
        padding: paddingAll,
        paddingTop: padding[0],
        paddingRight: padding[1],
        paddingBottom: padding[2],
        paddingLeft: padding[3],
      }}
    >
      <Paper sx={Cusmstyle.tablePaper}>
        <Box sx={Cusmstyle.titleContainer}>
          <Box>
          <Typography sx={Cusmstyle.tableTitle}>{tableName}</Typography>
          </Box>
          <Box flexGrow={1}>
            <EnhancedHeader selectedCheckbox={selectedCheckbox} SelectAll={SelectAll} HeaderComponent={HeaderComponent} />
          </Box>
        </Box>
        <TableContainer className='tableContainer' sx={{ minHeight: tableMinHeight }}>
          <Table
            stickyHeader
            sx={{ ...Cusmstyle.tableContainer, minWidth: tableMinWidth }}
            aria-labelledby="tableTitle"
            size={dense}
          >
            <EnhancedTableHead
              Header={Header}
              selectAllCheckbox={selectAllCheckbox}
              isSelectedAll={isSelectedAll}
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
      return <HeaderOne HeaderComponent={props?.HeaderComponent} selectedCheckbox={props?.selectedCheckbox} SelectAll={props?.SelectAll}/>;
    case 2:
      return  <HeaderTwo HeaderComponent={props?.HeaderComponent} />;
    case 'CUSTOM':
      return props?.HeaderComponent?.component;
    default:
      return <HeaderOne />;
  }
};

EnhancedTable.defaultProps = { 
  Header:[], selectAllCheckbox:()=>{}, isSelectedAll:false,
}

EnhancedTableHead.defaultProps = {
  Header:[],
  dataList:[],
  tableData:[],
  setSelectedCheckbox:()=>{},
  selectedCheckbox:[],
  checkboxHandleChange:()=>{},
  handleSwitch:()=>{},
  switchList:[],
  SelectAll:()=>{},
  tableMinWidth:"100%",
  tableMinHeight:"100%",
  tableName:"",
  paddingAll:0,
  padding:[],
  marginAll:0,
  margin:[],
  HeaderComponent:{},
  isSelectedAll:false,
  dense:"small",
}

EnhancedHeader.defaultProps = {
  HeaderComponent:{},
  selectedCheckbox:[],
  SelectAll:()=>{},
  component:<></>,
}
