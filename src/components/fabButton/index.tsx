import React, { ReactNode } from 'react';
import { Fab, FabProps } from '@mui/material';

interface CustomFabProps extends FabProps {
  children: ReactNode;
}

const CustomFab: React.FC<CustomFabProps> = ({ children, ...rest }) => {
  return (
    <Fab
      color="primary"
      sx={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
      }}
      {...rest}
    >
      {children}
    </Fab>
  );
};

export default CustomFab;
