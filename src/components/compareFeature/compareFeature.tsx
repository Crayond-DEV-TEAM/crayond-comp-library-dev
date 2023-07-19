import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CompareFeatureProps } from './props';

const CompareFeature = (props: CompareFeatureProps) => {
  const {
    compareHeadingColor,
    compareHeadingSize,
    compareHeadingStyle,
    compareHeadingAlign,

    rowTitleAlign,
    compareRowTitleColor,
    compareRowTitleSize,
    compareRowTitleStyle,

    rowIconAlign,
    iconRootStyle,
    rowBorderColor,

    rowData,
    columnData,
    tableRootStyle,
  } = props;

  return (
    <>
      <TableContainer>
        <Table sx={{...tableRootStyle }}>
          <TableHead>
            <TableRow sx={{ 'th, td': { borderBottom: 'none' } }}>
              {columnData.map((column) => (
                <TableCell
                  key={column?.id}
                  align={compareHeadingAlign}
                  sx={{
                    color: compareHeadingColor,
                    fontSize: compareHeadingSize,
                    ...compareHeadingStyle,
                  }}
                >
                  {column?.title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rowData?.map((row) => (
              <TableRow
                key={row?.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  align={rowTitleAlign}
                  sx={{
                    color: compareRowTitleColor,
                    fontSize: compareRowTitleSize,
                    borderColor: rowBorderColor,
                    ...compareRowTitleStyle,
                  }}
                >
                  {row?.title}
                </TableCell>
                <TableCell
                  align={rowIconAlign}
                  sx={{ ...iconRootStyle, borderColor: rowBorderColor }}
                >
                  {row?.Starter}
                </TableCell>
                <TableCell
                  align={rowIconAlign}
                  sx={{ ...iconRootStyle, borderColor: rowBorderColor }}
                >
                  {row?.Personal}
                </TableCell>
                <TableCell
                  align={rowIconAlign}
                  sx={{ ...iconRootStyle, borderColor: rowBorderColor }}
                >
                  {row?.Professional}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CompareFeature;

CompareFeature.defaultProps = {
  compareHeadingColor: '',
  compareHeadingSize: 12,
  compareHeadingStyle: {},
  compareHeadingAlign: '',

  rowTitleAlign: '',
  compareRowTitleColor: '',
  compareRowTitleSize: 12,
  compareRowTitleStyle: {},

  rowIconAlign: '',
  iconRootStyle: {},
  rowBorderColor: '',
  tableRootStyle:{},
  rowData: [],
  columnData: [],
};
