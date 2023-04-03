import Box from '@mui/material/Box';
import React from 'react';

interface ActionProps {
  variant: 'EDIT_WITH_DELETE' | 'EDIT' | 'DELETE' | undefined;
  editHandel: Function;
  deleteHandel: Function;
  editIcon: React.ReactNode;
  deleteIcon: React.ReactNode;
  id: string | number;
}
export default function Action(props: any) {
  const { variant, editHandel, deleteHandel, editIcon, deleteIcon, id } = props;

  const actions = (key: string) => {
    switch (key) {
      case 'EDIT_WITH_DELETE':
        return (
          <>
            <Box sx={{ cursor: 'pointer' }} onClick={() => editHandel(id)}>
              {editIcon}
            </Box>
            <Box sx={{ cursor: 'pointer' }} onClick={() => deleteHandel(id)}>
              {deleteIcon}
            </Box>
          </>
        );

      case 'EDIT':
        return (
          <Box sx={{ cursor: 'pointer' }} onClick={() => editHandel(id)}>
            {editIcon}
          </Box>
        );
      case 'DELETE':
        return (
          <Box sx={{ cursor: 'pointer' }} onClick={() => deleteHandel(id)}>
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
};
