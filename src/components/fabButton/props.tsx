import { SxProps } from '@mui/material';
import { ReactElement } from 'react';
export interface FabButtonProps {
  direction: 'up' | 'down' | 'left' | 'right';
  radius?: number;
  semicircle?: boolean;
  actionsData: {
    name: string;
    icon: JSX.Element;
    onClick: (position: { x: number; y: number }) => void;
    tooltipOpen?: true | false;
    tooltip?: true | false;
    tooltipTitle?: string;
  }[];
  actionButtonStyle?: SxProps;
  buttonStyle?: SxProps;
  downDirection?: object;
  upDirection?: object;
  leftDirection?: object;
  rightDirection?: object;
  FabIcon: ReactElement;
}
