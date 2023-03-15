import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


const BodyRowLogic = ({val, i, Celldata}: any) => {
    return(
        <TableCell key={i}> {Celldata[val.name]} </TableCell>
    )
}

export const EnhancedTableBody = ({ Body, TableData }: any) => {
    debugger;
    return (
      <TableBody>
        {Body?.map((data: any, i: number) => {
          return (
            <TableRow>
                {TableData.map((val: any, i: number)=>{                                                                                                 
                    return(
                        <BodyRowLogic val={val} i={i} Celldata={data}/>
                    )
                })}
            </TableRow>
          );
        })}
      </TableBody>
    );
  };

export default EnhancedTableBody;
