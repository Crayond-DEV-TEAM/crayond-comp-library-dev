import { SxProps } from '@mui/material';
import { ReactElement } from 'react';
export interface FabButtonProps {
  direction?: 'left' | 'right' | 'up' | 'down';
  radius?: number;
  semicircle?: boolean;
  actionsData?: ActionData[];
  buttonStyle?: React.CSSProperties;
  actionButtonStyle?: React.CSSProperties;
  directionStyle?: React.CSSProperties;
  buttonConStyle?: React.CSSProperties;
  closeIcon?: React.ReactNode;
  isOpen?: boolean;
  openIcon?: React.ReactNode;
  onToggle?: () => void;
  onMainButtonClick?: () => void;
}
interface ActionData {
  name: string;
  icon: React.ReactNode;
  tooltipTitle?: string;
  tooltipOpen?: true | false;
  onClick: (position: { x: number; y: number }) => void;
}
