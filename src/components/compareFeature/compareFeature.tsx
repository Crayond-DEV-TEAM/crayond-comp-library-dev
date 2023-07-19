import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TickIcon from '../../assets/tickIcon';
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
  } = props;

  const columnData = [
    { id: 1, title: '' },
    { id: 2, title: 'Starter' },
    { id: 3, title: 'Personal' },
    { id: 4, title: 'Professional' },
  ];
  const rowData = [
    {
      id: 1,
      title: 'Import Data from Cloud Storage Services',
      Starter: <TickIcon />,
      Personal: <TickIcon />,
      Professional: <TickIcon />,
    },
    {
      id: 2,
      title: 'Upload Excel and CSV Files',
      Starter: '',
      Personal: <TickIcon />,
      Professional: <TickIcon />,
    },
    {
      id: 3,
      title: 'Export Charts',
      Starter: <TickIcon />,
      Personal: '',
      Professional: <TickIcon />,
    },
    {
      id: 3,
      title: 'Import Data from Cloud Storage Services',
      Starter: <TickIcon />,
      Personal: <TickIcon />,
      Professional: <TickIcon />,
    },
    {
      id: 4,
      title: 'Share Charts with Other Users',
      Starter: <TickIcon />,
      Personal: <TickIcon />,
      Professional: <TickIcon />,
    },
  ];

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                    borderColor:rowBorderColor ,
                    ...compareRowTitleStyle,
                  }}
                >
                  {row?.title}
                </TableCell>
                <TableCell align={rowIconAlign} sx={{ ...iconRootStyle ,borderColor:rowBorderColor }}>
                  {row?.Starter}
                </TableCell>
                <TableCell align={rowIconAlign} sx={{ ...iconRootStyle ,borderColor:rowBorderColor  }}>
                  {row?.Personal}
                </TableCell>
                <TableCell align={rowIconAlign} sx={{ ...iconRootStyle ,borderColor:rowBorderColor  }}>
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
  rowBorderColor:""
};
