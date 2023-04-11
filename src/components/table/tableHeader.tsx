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
  stickyColumns:{
    stickyRight:Array<string>;
    stickyLeft:Array<string>;
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
  stickyColumns,
}: TableHeaderProps) => {
  const [stickyStyle, setStickyStyle] = React.useState<any>([]);
  const getClassName = (id: any) => {
    if (stickyColumns?.stickyLeft.includes(id)) {
      return 'stickyLeft';
    }
    if (stickyColumns?.stickyRight.includes(id)) {
      return 'stickyRight';
    }
  };
  React.useEffect(() => {
    const stickyLeftList: any = document.getElementsByClassName('stickyLeft');
    let leftWidth = 0;
    let leftWidthList: any[] = [];
    const leftGenerateStyle = [...stickyLeftList]?.map(
      ({ scrollWidth }: any, i: number) => {
        leftWidthList = [...leftWidthList, scrollWidth];
        if (i !== 0) {
          leftWidth = leftWidth + leftWidthList[i - 1];
        }

        return {
          ['& .stickyLeft:nth-child(' + (i + 1) + ')']: {
            position: 'sticky',
            left: i === 0 ? 0 : leftWidth,
            zIndex: '5',
          },
        };
      }
    );
    // setStickyStyle((pre: any)=>[...pre, ...leftGenerateStyle]);
    //right
    const stickyRightList: any = document.getElementsByClassName('stickyRight');
    let RightWidth = 0;
    let RightWidthList: any[] = [];
    const RightGenerateStyle = [...stickyRightList]?.map(
      ({ scrollWidth }: any, i: number) => {
        RightWidthList = [...RightWidthList, scrollWidth];
        if (i !== 0) {
          RightWidth = RightWidth + RightWidthList[i - 1];
        }

        return {
          ['& .stickyRight:nth-last-of-type(' + (i + 1) + 'n)']: {
            position: 'sticky',
            right: i === 0 ? 0 : RightWidth,
            zIndex: '5',
            borderLeft: '1px solid' + headerOptions?.bgColor,
          },
        };
      }
    );
    setStickyStyle((pre: any) => [
      ...pre,
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
              className={getClassName(val?.id)}
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
  stickyColumns:{
    stickyRight:[],
    stickyLeft:[],
  },
};
