import * as React from 'react';
import { CustomCheckbox } from '../checkbox';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import TableCell from '@mui/material/TableCell';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import { Cusmstyle } from './style';
import TableHead from '@mui/material/TableHead';

interface TableHeaderProps {
  Header: any,
  selectAllCheckbox:Function,
  isSelectedAll: Boolean,
  cellOptions: object,
  headerOptions?: {
    fontSize?: string,
    fontWeight?: string,
    color?: string,
    bgColor?:  string,
    borderBottom?: string,
    padding?: string,
  };
  orderBy:string|undefined,
  order:"asc" | "desc" | undefined,
  createSortHandler:Function,
  stickyOptions?:{
    stickyRight?:Array<string> | undefined;
    stickyLeft?:Array<string> | undefined;
  },
}
export const TableHeader = ({
  Header,
  selectAllCheckbox,
  isSelectedAll,
  headerOptions,
  orderBy,
  order,
  createSortHandler,
  stickyOptions,
}: TableHeaderProps) => {
  const [stickyStyle, setStickyStyle] = React.useState<any>([]);
  const getClassName = (id: any) => {
    if (stickyOptions?.stickyLeft?.includes(id)) {
      return 'stickyLeft';
    }
    if (stickyOptions?.stickyRight?.includes(id)) {
      return 'stickyRight';
    }
    return "";
  };



  React.useEffect(() => {
    //sticky Left CSS Generator
    const stickyLeftList: any = document.getElementsByClassName('stickyLeft');
    let leftWidth = 0;
    let leftWidthList: any[] = [];

    const leftGenerateStyle = [...stickyLeftList]?.map(
      ({ clientWidth }: any, i: number) => {
        leftWidthList = [...leftWidthList, clientWidth];
        if (i !== 0) {
          leftWidth = leftWidth + leftWidthList[i - 1];
        }
        let hr = leftWidth * 5 /100;
        return {
          ['& .stickyLeft:nth-of-type(' + (i + 1) + 'n)']: {
            position: 'sticky',
            left: i === 0 ? 0 : leftWidth-hr,
            zIndex: '5',
          },
        };
      }
    );
   //sticky Right CSS Generator
    const stickyRightList: any = document.getElementsByClassName('stickyRight');
    const RightGenerateStyleDummy =[...stickyRightList];
    const RightGenerateStyleDummy2 =RightGenerateStyleDummy.reverse();
    let rightWidth = 0;
    let rightWidthList: any[] = [];
    const RightGenerateStyle = RightGenerateStyleDummy2?.map(
      ({ clientWidth }: any, i: number) => {
        rightWidthList = [...rightWidthList, clientWidth];
        if (i !== 0) {
          rightWidth = rightWidth + rightWidthList[i-1];
        }
        let hr = rightWidth * 5 /100;
        return {
          ['& .stickyRight:nth-last-of-type(' + (i + 1) + 'n)']: {
            position: 'sticky',
            right: i === 0 ? 0 : rightWidth-hr,
            zIndex: '5',
          },
        };
      }
    );
    setStickyStyle([
      ...leftGenerateStyle,
      ...RightGenerateStyle,
    ]);
  }, []);

  return (
    <TableHead>
      <TableRow sx={stickyStyle}>
        {Header?.map((val: any, i: number) => {
          return (
            <TableCell
              className={getClassName(val?.id) + " "+ val?.id}
              key={'Header' + i}
              align={val?.align}
              padding={val.disablePadding ? 'none' : 'normal'}
              sx={{
                fontSize: headerOptions?.fontSize,
                color: headerOptions?.color,
                fontWeight: headerOptions?.fontWeight,
                backgroundColor: headerOptions?.bgColor,
                borderBottom: headerOptions?.borderBottom,
                padding: headerOptions?.padding,
              }}
              sortDirection={false}
            >
              {val?.variant === 'CHECKBOX' ? (
                <FormControlLabel
                  style={{ marginLeft: '0px' }}
                  control={
                    <CustomCheckbox
                      name="selectAll"
                      value={isSelectedAll}
                      onChange={selectAllCheckbox}
                    />
                  }
                  label={
                    <Typography sx={Cusmstyle.tableHeader}>
                      {val?.label}
                    </Typography>
                  }
                />
              ) : val?.isSortable ? (
                <TableSortLabel
                  active={orderBy === val?.id}
                  direction={orderBy === val?.id ? order : 'asc'}
                  onClick={(e) => createSortHandler(val?.id, e)}
                >
                  <Typography sx={Cusmstyle.tableHeader}>
                    {val?.label}
                  </Typography>
                </TableSortLabel>
              ) : (
                <Typography sx={Cusmstyle.tableHeader}>{val?.label}</Typography>
              )}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;

TableHeader.defaultProps = {
  Header: [],
  selectAllCheckbox: () => {},
  isSelectedAll: false,
  cellOptions: {},
  headerOptions: {},
  orderBy:"",
  order:"",
  createSortHandler:()=>{},
  stickyOptions:{
    stickyRight:[],
    stickyLeft:[],
  },
};
