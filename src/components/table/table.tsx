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

const EnhancedTableHead = ({ Header,selectAll }: any) => {
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
              
              {val?.varient &&
               <CustomCheckbox name="selectAll"  onChange={selectAll}/>
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
}: TableProps) {

  const selectAll = (data:any,e:any) => {
 if(e.target.checked){
  const list = dataList?.map(({id}:any)=>id)
    setSelectedCheckbox(list);
 }else{
  setSelectedCheckbox([]);
 }
    
  
  }
  return (
    <Box>
      <Paper sx={Cusmstyle.tablePaper}>
        <TableContainer>
          <Table aria-labelledby="tableTitle">
            <EnhancedTableHead Header={Header} selectAll={selectAll} />
            <EnhancedTableBody Body={dataList} TableData={tableData} setSelectedCheckbox={setSelectedCheckbox} selectedCheckbox={selectedCheckbox} />
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
