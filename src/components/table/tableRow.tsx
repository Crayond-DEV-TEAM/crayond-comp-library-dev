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
import Performance from '../../assets/performance';
import { Tooltip } from '@mui/material';


const BodyRowLogic = ({ val, rowIndex, i, Celldata, selectedCheckbox, switchList, checkboxHandleChange, handleSwitch }: any) => {

  switch (val?.type?.[0]) {
    case 'INCREMENT':
      return <TableCell key={i}> {Celldata?.id} </TableCell>;

    case 'CHECKBOX':
      return <TableCell key={i}><CustomCheckbox value={selectedCheckbox?.includes(Celldata?.id)} name={Celldata?.id} onChange={checkboxHandleChange} /> </TableCell>;

    case 'TEXT':
      return <TableCell key={i}> {Celldata[val.name]} </TableCell>;

    case 'SWITCH':
      return <TableCell key={i}> <CustomizedSwitches onChange={handleSwitch} id={Celldata?.id} value={switchList?.includes(Celldata?.id)} label={switchList?.includes(Celldata?.id) ? val?.switchText?.[0]?.lable_2 : val?.switchText?.[0]?.lable_1} /> </TableCell>;

    case 'LABLE':
      return <TableCell key={i}>
        <Box sx={{ ...Cusmstyle.labelBackground, backgroundColor: Celldata[val.name]?.bgColor ? Celldata[val.name]?.bgColor : "#e2eafa" }}>
          <Typography sx={{ ...Cusmstyle.labelText, color: Celldata[val.name]?.color ? Celldata[val.name]?.color : "#7692cc" }}>{Celldata[val.name]?.label}</Typography>
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
    case 'PERFORMANCE':
      return <TableCell key={i}>
        <Tooltip title={Celldata[val.name]} placement={"bottom"} componentsProps={{
          tooltip: {
            sx: {
              bgcolor: 'primary.main',
              '& .MuiTooltip-arrow': {
                color: 'primary.main',
              },
            },
          },
        }} arrow>
          <Box display={"flex"} alignItems={"center"}>
          <Performance variant={Celldata[val.name]} />
          </Box>
        </Tooltip>
      </TableCell>;

    default:
      return <TableCell key={i}> {Celldata[val.name]} </TableCell>;

  }
}

export const EnhancedTableBody = ({ Body, TableData, selectedCheckbox, switchList, handleSwitch, checkboxHandleChange }: any) => {

  return (
    <TableBody>
      {Body?.map((data: any, rowIndex: number) => {
        return (
          <TableRow>
            {TableData.map((val: any, i: number) => {
              return (
                <BodyRowLogic rowIndex={rowIndex} val={val} i={i} Celldata={data} switchList={switchList} handleSwitch={handleSwitch} checkboxHandleChange={checkboxHandleChange} selectedCheckbox={selectedCheckbox} />
              )
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default EnhancedTableBody;
