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

const EnhancedTableHead = ({ Header }: any) => {
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
}: TableProps) {
  return (
    <Box>
      <Paper sx={Cusmstyle.tablePaper}>
        <TableContainer>
          <Table aria-labelledby="tableTitle">
            <EnhancedTableHead Header={Header} />
            <EnhancedTableBody Body={dataList} TableData={tableData} />
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
