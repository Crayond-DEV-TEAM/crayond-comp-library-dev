import { linearProgressClasses } from '@mui/material/LinearProgress';
export const styles = {
  linearContainer: {
    borderRadius: '3px',
    height: '6px',
  },

  linearBarStyle: {
    height: 8,
    borderRadius: 5,
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
    },
  },
};
