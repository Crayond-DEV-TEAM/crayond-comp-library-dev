import { SxProps, Theme } from '@mui/material';
import React from 'react';

export interface SocialMediaButtonProps {
  sx?: SxProps<Theme>;
  startIcon: any;
  icon?: any;
  buttonText: string;
  id?: any;
  type?: 'button' | 'submit' | 'reset';
  name?: string | 'button';
  onClick?: (e: any) => any;
  inLineStyles?: object;
  size: 'small' | 'medium' | 'large' | undefined;
  variant?: 'text' | 'outlined' | 'contained';
  children: React.ReactNode | undefined;
  className?: string;
  disabled?: boolean;
  bgColor?: string | undefined;
  padding?: number;
  fontSize: string | any | undefined;
  textAlign: string | any | undefined;
  width: string | any | undefined;
  color: string | any | undefined;
  fontWeight: string | any | undefined;
  rootStyle?: object;
  borderRadius?: string;
  display?: string;
  alignItems?: string;
  cursor?: string;
  href: string;
  socialmediaTextStyle:object;
}
