import Box from '@mui/material/Box';
import React from 'react';

interface ActionProps {
  variant: 'EDIT_WITH_DELETE' | 'EDIT' | 'DELETE' | undefined;
  editHandel: Function;
  deleteHandel: Function;
  editIcon: React.ReactNode;
  deleteIcon: React.ReactNode;
  id: string | number;
  rowData: object;
}
export default function Action(props: ActionProps) {
  const {
    variant,
    editHandel,
    deleteHandel,
    editIcon,
    deleteIcon,
    id,
    rowData,
  } = props;

  const actions = (key: 'EDIT_WITH_DELETE' | 'EDIT' | 'DELETE' | undefined) => {
    switch (key) { 
      case 'EDIT_WITH_DELETE':
        return (
          <>
            <Box
              sx={{ cursor: 'pointer' }}
              onClick={(e) => editHandel(id, rowData, e)}
            >
              {editIcon}
            </Box>
            <Box
              sx={{ cursor: 'pointer' }}
              onClick={(e) => deleteHandel(id, rowData, e)}
            >
              {deleteIcon}
            </Box>
          </>
        );

      case 'EDIT':
        return (
          <Box
            sx={{ cursor: 'pointer' }}
            onClick={(e) => editHandel(id, rowData, e)}
          >
            {editIcon}
          </Box>
        );
      case 'DELETE':
        return (
          <Box
            sx={{ cursor: 'pointer' }}
            onClick={(e) => deleteHandel(id, rowData, e)}
          >
            {deleteIcon}
          </Box>
        );

      default:
        break;
    }
  };
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={'14px'}
    >
      {actions(variant)}
    </Box>
  );
}

Action.defaultProps = {
  variant: 'EDIT_WITH_DELETE',
  editHandel: () => {},
  deleteHandel: () => {},
  editIcon: <></>,
  deleteIcon: <></>,
  id: '',
  rowData:{}
};
