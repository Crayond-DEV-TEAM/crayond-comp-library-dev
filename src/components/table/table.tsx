import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
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
import { TablePagination } from '@mui/material';

const EnhancedTableHead = ({ Header, selectAllCheckbox }: any) => {
  return (
    <TableHead>
      <TableRow>
        {Header?.map((val: any, i: number) => {
          return (
            <TableCell
              key={i}
              align={val?.align}
              padding={val.disablePadding ? 'none' : 'normal'}
            >
              
              {val?.varient ==="CHECKBOX" &&
               <CustomCheckbox name="selectAll" onChange={selectAllCheckbox}/>
              }
              <TableSortLabel>{val?.label}</TableSortLabel>
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
  tableMinWidth
}: TableProps) {
 const [page, setPage] = React.useState(0);
 const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const selectAllCheckbox = (data:any,e:any) => {
    let ids = dataList?.map(({id}:any)=>id);
    SelectAll(ids, !e.target.checked)
  }
 
  const handleChangePage = (event:any, newPage:any) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event:any) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box>
      <Paper sx={{...Cusmstyle.tablePaper, minWidth:tableMinWidth}}>
        <TableContainer>
          <Table aria-labelledby="tableTitle">
            <EnhancedTableHead Header={Header} selectAllCheckbox={selectAllCheckbox} />
            <EnhancedTableBody Body={dataList?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)} TableData={tableData} handleSwitch={handleSwitch} switchList={switchList} checkboxHandleChange={checkboxHandleChange} setSelectedCheckbox={setSelectedCheckbox} selectedCheckbox={selectedCheckbox} />
          </Table>
        </TableContainer>
        <TablePagination
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
