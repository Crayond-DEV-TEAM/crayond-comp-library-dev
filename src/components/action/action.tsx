import Box from '@mui/material/Box';
import React from 'react';

interface ActionProps {
  actionList: {
    icon: React.ReactNode;
    method: Function;
  }[];
  id: string | number;
  rowData: object;
}
export default function Action(props: ActionProps) {
  const {
    actionList,
    id,
    rowData,
  } = props;

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={'14px'}
    >
      {actionList?.map(
        (action: { icon: React.ReactNode; method: Function }, i:number) => {
          return (
            <Box
            key={"actionList"+ i}
              sx={{ cursor: 'pointer' }}
              onClick={(e) => action?.method(id, rowData, e)}
            >
              {action?.icon}
            </Box>
          );
        }
      )}
    </Box>
  );
}

Action.defaultProps = {
  actionList: [],
  variant: 'EDIT_WITH_DELETE',
  editHandel: () => {},
  deleteHandel: () => {},
  editIcon: <></>,
  deleteIcon: <></>,
  id: '',
  rowData: {},
};