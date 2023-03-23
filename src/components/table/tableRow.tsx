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
import { Date } from '../date';
import { Action } from '../action';
import { Link } from '../link';
import { IconWithLabel } from '../iconWithLabel';
import { IconWithText } from '../iconWithText';

const BodyRowLogic = ({
  val,
  i,
  Celldata,
  selectedCheckbox,
  switchList,
  checkboxHandleChange,
  handleSwitch,
  cellOptions,
}: any) => {
  const cellStyle = {
    fontSize: cellOptions?.fontSize,
    color: cellOptions?.color,
    fontWeight: cellOptions?.fontWeight,
    backgroundColor: cellOptions?.bgColor,
    borderBottom: cellOptions?.borderBottom,
    padding:cellOptions?.padding
  };
  switch (val?.type?.[0]) {
    case 'INCREMENT':
      return (
        <TableCell sx={cellStyle} key={i + 'INCREMENT'}>
          <Typography> {Celldata?.id}</Typography>{' '}
        </TableCell>
      );

    case 'CHECKBOX':
      return (
        <TableCell sx={cellStyle} key={i + 'CHECKBOX'}>
          <CustomCheckbox
            value={selectedCheckbox?.includes(Celldata?.id)}
            name={Celldata?.id}
            onChange={checkboxHandleChange}
          />
        </TableCell>
      );

    case 'TEXT':
      return (
        <TableCell sx={cellStyle} key={i + 'TEXT'}>
          <Text Celldata={Celldata} val={val} />
        </TableCell>
      );

    case 'SWITCH':
      return (
        <TableCell sx={cellStyle} key={i + 'SWITCH'}>
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
        <TableCell sx={cellStyle} key={i + 'LABEL'}>
          <Label Celldata={Celldata} val={val} />
        </TableCell>
      );
    case 'ICON_WITH_LABEL':
      return (
        <TableCell sx={cellStyle} key={i + 'LABEL'}>
          <IconWithLabel cellStyle={cellStyle} Celldata={Celldata} val={val} />
        </TableCell>
      );
    case 'ICON_WITH_TEXT':
      return (
        <TableCell sx={cellStyle} key={i + 'LABEL'}>
          <IconWithText Celldata={Celldata} val={val} />
        </TableCell>
      );
    case 'PROGRESS':
      return (
        <TableCell sx={cellStyle} key={i + 'PROGRESS'}>
          <Progress value={Celldata[val.name]} />
        </TableCell>
      );
    case 'IMAGE_WITH_LABEL':
      return (
        <TableCell sx={cellStyle} key={i + 'IMAGE_WITH_LABEL'}>
          <ImageWithLabel Celldata={Celldata} val={val} />
        </TableCell>
      );
    case 'IMAGE_WITH_PROFILES':
      return (
        <TableCell sx={cellStyle} key={i + 'IMAGE_WITH_PROFILES'}>
          <ImageWithProfiles Celldata={Celldata} val={val} />
        </TableCell>
      );
    case 'PERFORMANCE':
      return (
        <TableCell sx={cellStyle} key={i + 'PERFORMANCE'}>
          <Performance Celldata={Celldata} val={val} />
        </TableCell>
      );
    case 'AVATAR_NAME':
      return (
        <TableCell sx={cellStyle} key={i + 'AVATAR_NAME'}>
          <AvatarName Celldata={Celldata} val={val} />
        </TableCell>
      );
    case 'STAR_RATING':
      return (
        <TableCell sx={cellStyle} key={i + 'STAR_RATING'}>
          <StarRating Celldata={Celldata} val={val} />
        </TableCell>
      );
    case 'GROWTH':
      return (
        <TableCell sx={cellStyle} key={i + 'GROWTH'}>
          <Growth Celldata={Celldata} val={val} />
        </TableCell>
      );
    case 'DATE':
      return (
        <TableCell sx={cellStyle} key={i + 'DATE'}>
          <Date Celldata={Celldata} val={val} />
        </TableCell>
      );
    case 'ACTION':
      return (
        <TableCell sx={cellStyle} key={i + 'ACTION'}>
          <Action Celldata={Celldata} val={val} />
        </TableCell>
      );
    case 'LINK':
      return (
        <TableCell sx={cellStyle} key={i + 'LINK'}>
          <Link Celldata={Celldata} val={val} />
        </TableCell>
      );
    // case 'LINK':
    //   return (
    //     <TableCell sx={cellStyle} key={i + 'LINK'}>
    //      { Celldata[val.name]}
    //     </TableCell>
    //   );
    default:
      return (
        <TableCell sx={cellStyle} key={i + 'default'}>
          <Text Celldata={Celldata} val={val} />
        </TableCell>
      );
  }
};
BodyRowLogic.defaultProps = {
  val: {},
  i: 0,
  Celldata: {},
  selectedCheckbox: [],
  switchList: [],
  handleSwitch: () => {},
  checkboxHandleChange: () => {},
};
export const EnhancedTableBody = ({
  Body,
  TableData,
  selectedCheckbox,
  switchList,
  handleSwitch,
  checkboxHandleChange,
  cellOptions,
  rowOptions,
}: any) => {
  return (
    <TableBody>
      {Body?.map((data: any, rowIndex: number) => {
        return (
          <TableRow key={'Row' + rowIndex} sx={{
            '&:nth-of-type(odd)': {
              background : rowOptions?.rowOddBgColor,
            },
            '&:nth-of-type(even)': {
              background : rowOptions?.rowEvenBgColor,
            },
            // hide last border
            '&:last-child td, &:last-child th': {
              border: 0,
            },
          }}>
            {TableData.map((val: any, i: number) => {
              return (
                <BodyRowLogic
                  key={i + 'cell'}
                  rowIndex={rowIndex}
                  val={val}
                  i={i}
                  Celldata={data}
                  switchList={switchList}
                  handleSwitch={handleSwitch}
                  checkboxHandleChange={checkboxHandleChange}
                  selectedCheckbox={selectedCheckbox}
                  cellOptions={cellOptions}
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

EnhancedTableBody.defaultProps = {
  Body: [],
  TableData: [],
  selectedCheckbox: [],
  switchList: [],
  handleSwitch: () => {},
  checkboxHandleChange: () => {},
  densePadding: false,
  densePaddingValue: 0,
};
