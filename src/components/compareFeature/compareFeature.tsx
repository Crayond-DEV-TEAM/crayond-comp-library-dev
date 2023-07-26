import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CompareFeatureProps } from './props';
import { styles } from './styles';
import { SxProps } from '@mui/material';

const RowComponent = (row: any, column: any) => {
  const cellValue = row[column?.key];
  return cellValue;
};

const CompareFeature = (props: CompareFeatureProps) => {
  const {
    compareHeadingColor,
    compareHeadingSize,
    compareHeadingStyle,
    compareHeadingAlign,

    rowAlign,
    compareRowTitleColor,
    compareRowTitleSize,
    compareRowTitleStyle,

    rowBorderColor,

    rowData,
    columnData,
    tableRootStyle,
  } = props;

  return (
    <>
      <TableContainer>
        <Table sx={{ ...tableRootStyle }}>
          <TableHead>
            <TableRow sx={{ 'th, td': { borderBottom: 'none' } }}>
              {Array.isArray(columnData) && columnData?.length > 0
                ? columnData.map((column) => (
                    <TableCell
                      key={column?.id}
                      align={compareHeadingAlign}
                      sx={
                        {
                          color: compareHeadingColor,
                          fontSize: compareHeadingSize,
                          ...compareHeadingStyle,
                          ...styles.compareHeadingStyle,
                          ...column?.style,
                        } as SxProps
                      }
                    >
                      {column?.title}
                    </TableCell>
                  ))
                : null}
            </TableRow>
          </TableHead>

          <TableBody>
            {rowData?.map((row) => (
              <TableRow
                key={row?.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {columnData?.map((column) => (
                  <TableCell
                    component="th"
                    scope="row"
                    align={rowAlign}
                    sx={
                      {
                        color: compareRowTitleColor,
                        fontSize: compareRowTitleSize,
                        borderColor: rowBorderColor,
                        ...styles.compareRowTitleStyle,
                        ...compareRowTitleStyle,
                        ...row?.style,
                      } as SxProps
                    }
                  >
                    <>{RowComponent(row, column)}</>
                  </TableCell>
                ))}
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

  rowAlign: '',
  compareRowTitleColor: '',
  compareRowTitleSize: 12,
  compareRowTitleStyle: {},

  iconRootStyle: {},
  rowBorderColor: '',
  tableRootStyle: {},
  rowData: [],
  columnData: [],
};
