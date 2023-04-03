import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
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
import { Switch } from '../switch';

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
    padding: cellOptions?.padding,
  };
  switch (val?.type?.[0]) {
    case 'INCREMENT':
      return (
        <TableCell sx={cellStyle} key={i + 'INCREMENT'} className={'INCREMENT'}>
          <Typography> {Celldata?.id}</Typography>
        </TableCell>
      );

    case 'CHECKBOX':
      return (
        <TableCell sx={cellStyle} key={i + 'CHECKBOX'} className={'CHECKBOX'}>
          <CustomCheckbox
            value={selectedCheckbox?.includes(Celldata?.id)}
            name={Celldata?.id}
            onChange={checkboxHandleChange}
          />
        </TableCell>
      );

    case 'TEXT':
      return (
        <TableCell sx={cellStyle} key={i + 'TEXT'} className={'TEXT'}>
          <Text value={Celldata?.[val.name]} />
        </TableCell>
      );

    case 'SWITCH':
      return (
        <TableCell sx={cellStyle} key={i + 'SWITCH'} className={'SWITCH'}>
          <Switch
            onChange={handleSwitch}
            id={Celldata?.id}
            value={switchList?.includes(Celldata?.id)}
            label={
              switchList?.includes(Celldata?.id)
                ? val?.switchText?.[0]?.label_2
                : val?.switchText?.[0]?.label_1
            }
          />
        </TableCell>
      );

    case 'LABEL':
      return (
        <TableCell sx={cellStyle} key={i + 'LABEL'} className={'LABEL'}>
          <Label
            bgColor={Celldata[val.name]?.bgColor}
            color={Celldata[val.name]?.color}
            label={Celldata[val.name]?.label}
          />
        </TableCell>
      );
    case 'ICON_WITH_LABEL':
      return (
        <TableCell
          sx={cellStyle}
          key={i + 'ICON_WITH_LABEL'}
          className={'ICON_WITH_LABEL'}
        >
          <IconWithLabel
            cellStyle={cellStyle}
            bgColor={Celldata[val.name]?.bgColor}
            color={Celldata[val.name]?.color}
            label={Celldata[val.name]?.label}
            icon={Celldata[val.name]?.icon}
          />
        </TableCell>
      );
    case 'ICON_WITH_TEXT':
      return (
        <TableCell
          sx={cellStyle}
          key={i + 'ICON_WITH_TEXT'}
          className={'ICON_WITH_LABEL'}
        >
          <IconWithText
            label={Celldata[val.name]?.label}
            icon={Celldata[val.name]?.icon}
          />
        </TableCell>
      );
    case 'PROGRESS':
      return (
        <TableCell sx={cellStyle} key={i + 'PROGRESS'} className={'PROGRESS'}>
          <Progress value={Celldata[val.name]} />
        </TableCell>
      );
    case 'IMAGE_WITH_LABEL':
      return (
        <TableCell
          sx={cellStyle}
          key={i + 'IMAGE_WITH_LABEL'}
          className={'IMAGE_WITH_LABEL'}
        >
          <ImageWithLabel
            image={Celldata[val.name]?.image}
            label={Celldata[val.name]?.label}
            variant={val?.variant}
          />
        </TableCell>
      );
    case 'IMAGE_WITH_PROFILES':
      return (
        <TableCell
          sx={cellStyle}
          key={i + 'IMAGE_WITH_PROFILES'}
          className={'IMAGE_WITH_PROFILES'}
        >
          <ImageWithProfiles
            variant={val?.variant}
            profiles={Celldata[val.name]}
          />
        </TableCell>
      );
    case 'PERFORMANCE':
      return (
        <TableCell
          sx={cellStyle}
          key={i + 'PERFORMANCE'}
          className={'PERFORMANCE'}
        >
          <Performance value={Celldata[val.name]} />
        </TableCell>
      );
    case 'AVATAR_NAME':
      return (
        <TableCell
          sx={cellStyle}
          key={i + 'AVATAR_NAME'}
          className={'AVATAR_NAME'}
        >
          <AvatarName profiles={Celldata[val.name]} />
        </TableCell>
      );
    case 'STAR_RATING':
      return (
        <TableCell
          sx={cellStyle}
          key={i + 'STAR_RATING'}
          className={'STAR_RATING'}
        >
          <StarRating value={Celldata[val.name]} />
        </TableCell>
      );
    case 'GROWTH':
      return (
        <TableCell sx={cellStyle} key={i + 'GROWTH'} className={'GROWTH'}>
          <Growth variant={Celldata[val.name]?.variant} value={Celldata[val.name]?.value}/>
        </TableCell>
      );
    case 'DATE':
      return (
        <TableCell sx={cellStyle} key={i + 'DATE'} className={'DATE'}>
          <Date format={Celldata[val.name]} value={val.format}  />
        </TableCell>
      );
    case 'ACTION':
      return (
        <TableCell sx={cellStyle} key={i + 'ACTION'} className={'ACTION'}>
          <Action Celldata={Celldata} val={val} id={Celldata?.id} editIcon={val?.deleteIcon} deleteIcon={val?.deleteIcon} editHandel={val?.editHandel} deleteHandel={val?.deleteHandel}/>
        </TableCell>
      );
    case 'LINK':
      return (
        <TableCell sx={cellStyle} key={i + 'LINK'} className={'LINK'}>
          <Link id={Celldata?.id} label={val?.label} viewHandel={val?.viewHandel}/>
        </TableCell>
      );
    case 'CUSTOM':
      return (
        <TableCell sx={cellStyle} key={i + 'CUSTOM'} className={'CUSTOM'}>
          {Celldata[val?.name]}
        </TableCell>
      );
    default:
      return (
        <TableCell sx={cellStyle} key={i + 'TEXT'} className={'TEXT'}>
          <Text value={Celldata?.[val.name]} />
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
          <TableRow
            key={'Row' + rowIndex}
            sx={{
              '&:nth-of-type(odd)': {
                background: rowOptions?.rowOddBgColor,
              },
              '&:nth-of-type(even)': {
                background: rowOptions?.rowEvenBgColor,
              },
              // hide last border
              '&:last-child td, &:last-child th': {
                border: 0,
              },
            }}
          >
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
