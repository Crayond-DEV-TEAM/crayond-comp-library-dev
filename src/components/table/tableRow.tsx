import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import CustomizedSwitches from '../switch/switch';
import Typography from '@mui/material/Typography';
import { Progress } from '../progress';
import { CustomCheckbox } from '../checkbox';
import { Label } from '../label';
import { ImageWithLabel } from '../imageWithLabel';
import { ImageWithProfiles } from '../imageWithProfiles';
import { Performance } from '../performance';
import { AvatarName } from '../avatarName';
import { StarRating } from '../starRating';
import { Text } from '../text';
import { Growth } from '../growth';

const BodyRowLogic = ({
  val,
  i,
  Celldata,
  selectedCheckbox,
  switchList,
  checkboxHandleChange,
  handleSwitch,
}: any) => {
  switch (val?.type?.[0]) {
    case 'INCREMENT':
      return (
        <TableCell key={i}>
          <Typography> {Celldata?.id}</Typography>{' '}
        </TableCell>
      );

    case 'CHECKBOX':
      return (
        <TableCell key={i}>
          <CustomCheckbox
            value={selectedCheckbox?.includes(Celldata?.id)}
            name={Celldata?.id}
            onChange={checkboxHandleChange}
          />
        </TableCell>
      );

    case 'TEXT':
      return (
        <TableCell key={i}>
          <Text Celldata={Celldata} val={val} />
        </TableCell>
      );

    case 'SWITCH':
      return (
        <TableCell key={i}>
          <CustomizedSwitches
            onChange={handleSwitch}
            id={Celldata?.id}
            value={switchList?.includes(Celldata?.id)}
            label={
              switchList?.includes(Celldata?.id)
                ? val?.switchText?.[0]?.lable_2
                : val?.switchText?.[0]?.lable_1
            }
          />
        </TableCell>
      );

    case 'LABEL':
      return (
        <TableCell key={i}>
          <Label Celldata={Celldata} val={val} />
        </TableCell>
      );

    case 'PROGRESS':
      return (
        <TableCell key={i}>
          <Progress value={Celldata[val.name]} />
        </TableCell>
      );
    case 'IMAGE_WITH_LABEL':
      return (
        <TableCell key={i}>
          <ImageWithLabel Celldata={Celldata} val={val} />
        </TableCell>
      );
    case 'IMAGE_WITH_PROFILES':
      return (
        <TableCell key={i}>
          <ImageWithProfiles Celldata={Celldata} val={val} />
        </TableCell>
      );
    case 'PERFORMANCE':
      return (
        <TableCell key={i}>
          <Performance Celldata={Celldata} val={val} />
        </TableCell>
      );
    case 'AVATAR_NAME':
      return (
        <TableCell key={i}>
          <AvatarName Celldata={Celldata} val={val} />
        </TableCell>
      );
    case 'STAR_RATING':
      return (
        <TableCell key={i}>
          <StarRating Celldata={Celldata} val={val} />
        </TableCell>
      );
    case 'GROWTH':
      return (
        <TableCell key={i}>
          <Growth Celldata={Celldata} val={val} />
        </TableCell>
      );
    default:
      return (
        <TableCell key={i}>
          <Text Celldata={Celldata} val={val} />
        </TableCell>
      );
  }
};

export const EnhancedTableBody = ({
  Body,
  TableData,
  selectedCheckbox,
  switchList,
  handleSwitch,
  checkboxHandleChange,
}: any) => {
  return (
    <TableBody>
      {Body?.map((data: any, rowIndex: number) => {
        return (
          <TableRow>
            {TableData.map((val: any, i: number) => {
              return (
                <BodyRowLogic
                  rowIndex={rowIndex}
                  val={val}
                  i={i}
                  Celldata={data}
                  switchList={switchList}
                  handleSwitch={handleSwitch}
                  checkboxHandleChange={checkboxHandleChange}
                  selectedCheckbox={selectedCheckbox}
                />
              );
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default EnhancedTableBody;
