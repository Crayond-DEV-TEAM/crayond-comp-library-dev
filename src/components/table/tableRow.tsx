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
  stickyOptions,
}: any) => {
  const cellStyle = {
    fontSize: cellOptions?.fontSize,
    color: cellOptions?.color,
    fontWeight: cellOptions?.fontWeight,
    backgroundColor: cellOptions?.bgColor,
    borderBottom: cellOptions?.borderBottom,
    padding: cellOptions?.padding,
  };
  //get ID based class name
  const getClassName = (id: any) => {
    if (stickyOptions?.stickyLeft.includes(id)) {
      return 'stickyLeftTd';
    }
    if (stickyOptions?.stickyRight.includes(id)) {
      return 'stickyRightTd';
    }
    return '';
  };

  //Return cell type component
  switch (val?.type?.[0]) {
    case 'INCREMENT':
      return (
        <TableCell
          sx={cellStyle}
          key={i + 'INCREMENT'}
          className={'INCREMENT ' + getClassName(val.name) + ' ' + val.name}
        >
          <Typography> {Celldata?.id}</Typography>
        </TableCell>
      );

    case 'CHECKBOX':
      return (
        <TableCell
          sx={cellStyle}
          key={i + 'CHECKBOX'}
          className={'CHECKBOX ' + getClassName(val.name) + ' ' + val.name}
        >
          <CustomCheckbox
            value={selectedCheckbox?.includes(Celldata?.id)}
            name={Celldata?.id}
            onChange={checkboxHandleChange}
          />
        </TableCell>
      );

    case 'TEXT':
      return (
        <TableCell
          sx={cellStyle}
          key={i + 'TEXT'}
          className={'TEXT ' + getClassName(val.name) + ' ' + val.name}
        >
          <Text value={Celldata?.[val.name]} />
        </TableCell>
      );

    case 'SWITCH':
      return (
        <TableCell
          sx={cellStyle}
          key={i + 'SWITCH'}
          className={'SWITCH ' + getClassName(val.name) + ' ' + val.name}
        >
          <Switch
            onChange={handleSwitch}
            id={Celldata?.id}
            value={switchList?.includes(Celldata?.id)}
            label={
              switchList?.includes(Celldata?.id)
                ? val?.switchText?.[0]?.label_2
                : val?.switchText?.[0]?.label_1
            }
            rowData={Celldata}
          />
        </TableCell>
      );

    case 'LABEL':
      return (
        <TableCell
          sx={cellStyle}
          key={i + 'LABEL'}
          className={'LABEL ' + getClassName(val.name) + ' ' + val.name}
        >
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
          className={
            'ICON_WITH_LABEL ' + getClassName(val.name) + ' ' + val.name
          }
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
          className={
            'ICON_WITH_LABEL ' + getClassName(val.name) + ' ' + val.name
          }
        >
          <IconWithText
            label={Celldata[val.name]?.label}
            icon={Celldata[val.name]?.icon}
          />
        </TableCell>
      );
    case 'PROGRESS':
      return (
        <TableCell
          sx={cellStyle}
          key={i + 'PROGRESS'}
          className={'PROGRESS ' + getClassName(val.name) + ' ' + val.name}
        >
          <Progress value={Celldata[val.name]} />
        </TableCell>
      );
    case 'IMAGE_WITH_LABEL':
      return (
        <TableCell
          sx={cellStyle}
          key={i + 'IMAGE_WITH_LABEL'}
          className={
            'IMAGE_WITH_LABEL ' + getClassName(val.name) + ' ' + val.name
          }
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
          className={
            'IMAGE_WITH_PROFILES ' + getClassName(val.name) + ' ' + val.name
          }
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
          className={'PERFORMANCE ' + getClassName(val.name) + ' ' + val.name}
        >
          <Performance value={Celldata[val.name]} />
        </TableCell>
      );
    case 'AVATAR_NAME':
      return (
        <TableCell
          sx={cellStyle}
          key={i + 'AVATAR_NAME'}
          className={'AVATAR_NAME ' + getClassName(val.name) + ' ' + val.name}
        >
          <AvatarName profiles={Celldata[val.name]} />
        </TableCell>
      );
    case 'STAR_RATING':
      return (
        <TableCell
          sx={cellStyle}
          key={i + 'STAR_RATING'}
          className={'STAR_RATING ' + getClassName(val.name) + ' ' + val.name}
        >
          <StarRating value={Celldata[val.name]} />
        </TableCell>
      );
    case 'GROWTH':
      return (
        <TableCell
          sx={cellStyle}
          key={i + 'GROWTH'}
          className={'GROWTH ' + getClassName(val.name) + ' ' + val.name}
        >
          <Growth
            variant={Celldata[val.name]?.variant}
            value={Celldata[val.name]?.value}
          />
        </TableCell>
      );
    case 'DATE':
      return (
        <TableCell
          sx={cellStyle}
          key={i + 'DATE'}
          className={'DATE ' + getClassName(val.name) + ' ' + val.name}
        >
          <Date format={val.format} value={Celldata[val.name]} />
        </TableCell>
      );
    case 'ACTION':
      return (
        <TableCell
          sx={cellStyle}
          key={i + 'ACTION'}
          className={'ACTION ' + getClassName(val.name) + ' ' + val.name}
        >
          <Action
            rowData={Celldata}
            id={Celldata?.id}
            actionList={val.variant}
          />
        </TableCell>
      );
    case 'LINK':
      return (
        <TableCell
          sx={cellStyle}
          key={i + 'LINK'}
          className={'LINK ' + getClassName(val.name) + ' ' + val.name}
        >
          <Link
            id={Celldata?.id}
            label={val?.label}
            viewHandel={val?.viewHandel}
            rowData={Celldata}
          />
        </TableCell>
      );
    case 'CUSTOM':
      return (
        <TableCell
          sx={cellStyle}
          key={i + 'CUSTOM'}
          className={'CUSTOM ' + getClassName(val.name) + ' ' + val.name}
        >
          {Celldata[val?.name]}
        </TableCell>
      );
    default:
      return (
        <TableCell
          sx={cellStyle}
          key={i + 'TEXT'}
          className={'TEXT ' + getClassName(val.name) + ' ' + val.name}
        >
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
  stickyOptions,
}: any) => {
  const [stickyStyle, setStickyStyle] = React.useState<any>([]);

  React.useEffect(() => {
    //sticky Left CSS Generator
    const stickyLeftList: any = document.getElementsByClassName('stickyLeftTd');
    let leftWidth = 0;
    let leftWidthList: any[] = [];
    const leftGenerateStyle = [...stickyLeftList]?.map(
      ({ offsetWidth }: any, i: number) => {
        leftWidthList = [...leftWidthList, offsetWidth];
        if (i !== 0) {
          leftWidth = leftWidth + leftWidthList[i - 1];
        }
        let hr = (leftWidth * 5) / 100;
        return {
          ['& .stickyLeftTd:nth-of-type(' + (i + 1) + 'n)']: {
            position: 'sticky',
            left: i === 0 ? 0 : leftWidth - hr,
            zIndex: '2',
          },
        };
      }
    );
    //sticky Right CSS Generator
    const stickyRightList: any = document.getElementsByClassName('stickyRight');
    const RightGenerateStyleDummy = [...stickyRightList];
    const RightGenerateStyleDummy2 = RightGenerateStyleDummy.reverse();
    let rightWidth = 0;
    let rightWidthList: any[] = [];
    const RightGenerateStyle = RightGenerateStyleDummy2?.map(
      ({ offsetWidth }: any, i: number) => {
        rightWidthList = [...rightWidthList, offsetWidth];
        if (i !== 0) {
          rightWidth = rightWidth + rightWidthList[i - 1];
        }
        let hr = (rightWidth * 5) / 100;
        return {
          ['& .stickyRightTd:nth-last-of-type(' + (i + 1) + 'n)']: {
            position: 'sticky',
            right: i === 0 ? 0 : rightWidth - hr,
            zIndex: '2',
          },
        };
      }
    );
    //style push state
    setStickyStyle([...leftGenerateStyle, ...RightGenerateStyle]);
  }, []);

  return (
    <TableBody>
      {Body?.map((data: any, rowIndex: number) => {
        return (
          <TableRow
            key={'Row' + rowIndex}
            sx={[
              ...stickyStyle,
              {
                '&:nth-of-type(odd):nth-of-type(odd) td': {
                  background: rowOptions?.rowOddBgColor + ' !important',
                },
                '&:nth-of-type(odd) td': {
                  background: rowOptions?.rowOddBgColor + ' !important',
                },
                '&:nth-of-type(even)': {
                  background: rowOptions?.rowEvenBgColor + ' !important',
                },
                '&:nth-of-type(even) td': {
                  background: rowOptions?.rowEvenBgColor + ' !important',
                },
                // hide last border
                '&:last-child td, &:last-child th': {
                  border: 0,
                },
                '& .stickyLeftTd:nth-last-of-type(1)': {
                  borderRight: '1px solid red !important',
                  boxShadow: '1px 3px 40px #000',
                },
                '& .stickyRightTd:nth-of-type(1)': {
                  borderLeft: '1px solid red !important',
                },
              },
            ]}
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
                  stickyOptions={stickyOptions}
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
