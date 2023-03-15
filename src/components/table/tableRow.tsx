import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import CustomizedSwitches from '../switch/switch';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Cusmstyle } from './style';
import { Progress } from '../progress';
import { CustomCheckbox } from '../checkbox';
import Avatar from '@mui/material/Avatar';


const BodyRowLogic = ({val,rowIndex, i, Celldata,  selectedCheckbox, setSelectedCheckbox }: any) => {
 
 const checkboxHandleChange = (data:any) => {
    if(!selectedCheckbox.includes(Celldata?.id)){
    setSelectedCheckbox([
      ...selectedCheckbox,
      data
    ]);
  }else{
    const array = selectedCheckbox;
    const index = array.indexOf(data);
    if (index > -1) {
     array.splice(index, 1)
      setSelectedCheckbox(array);
    }
}
  };
 
  switch (val?.type?.[0]) {
    case 'INCREMENT':
      return <TableCell key={i}> {rowIndex + 1} </TableCell>;

    case 'CHECKBOX':
      return <TableCell key={i}><CustomCheckbox value={selectedCheckbox} name={Celldata?.id} onChange={checkboxHandleChange} /> </TableCell>;

    case 'TEXT':
      return <TableCell key={i}> {Celldata[val.name]} </TableCell>;

    case 'SWITCH':
      return <TableCell key={i}> <CustomizedSwitches value={Celldata[val.name]} label={Celldata[val.name] ? "Active" : "Inactive"} /> </TableCell>;

    case 'LABLE':
      return <TableCell key={i}>
        <Box sx={Cusmstyle.labelBackground}>
          <Typography sx={Cusmstyle.labelText}>{Celldata[val.name]}</Typography>
        </Box>
      </TableCell>;

    case 'PROGRESS':
      return <TableCell key={i}>
        <Progress value={Celldata[val.name]} />
      </TableCell>;
    case 'IMAGE_WITH_LABLE':
      return <TableCell key={i}>
        <Box display={"flex"} alignItems={"center"} gap={"10px"}>
          <Avatar variant={val?.variant} sx={Cusmstyle.labelImage} alt='' src={Celldata[val.name]?.image} />
          <Typography>{Celldata[val.name]?.label}</Typography>
        </Box>
      </TableCell>;
    default:
      return <TableCell key={i}> {Celldata[val.name]} </TableCell>;

  }
}

export const EnhancedTableBody = ({ Body, TableData, selectedCheckbox, setSelectedCheckbox }: any) => {

  // const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.checked) {
  //     const newSelected = Body.map((n) => n.name);
  //     setSelectedCheckbox(newSelected);
  //     return;
  //   }
  //   setSelectedCheckbox([]);
  // };

    return (
      <TableBody>
        {Body?.map((data: any, rowIndex: number) => {
          return (
            <TableRow>
                {TableData.map((val: any, i: number)=>{                                                                                                 
                    return(
                        <BodyRowLogic rowIndex={rowIndex} val={val} i={i} Celldata={data} setSelectedCheckbox={setSelectedCheckbox} selectedCheckbox={selectedCheckbox}/>
                    )
                })}
            </TableRow>
          );
        })}
      </TableBody>
    );
  };

export default EnhancedTableBody;
