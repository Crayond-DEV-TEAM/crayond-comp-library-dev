import * as React from 'react';
import { SxProps } from '@mui/system';
import { InputFieldProps } from '../inputField/props';

export interface DropDownProps {
  autoWidth?: boolean;
  children?: React.ReactNode;
  classes?: string | any;
  defaultOpen?: boolean;
  defaultValue?: any;
  displayEmpty?: boolean;
  IconComponent?: React.ElementType;
  id?: string;
  input?: React.ReactElement<any, any>;
  inputProps?: InputFieldProps['inputProps'];
  label?: React.ReactNode;
  labelId?: string;
  MenuProps?: Partial<any>;
  multiple?: boolean;
  native?: boolean;
  onChange?: (event: any, child: React.ReactNode) => void;
  onClose?: (event: React.SyntheticEvent) => void;
  onOpen?: (event: React.SyntheticEvent) => void;
  open?: boolean;
  renderValue?: (value: any) => React.ReactNode;
  SelectDisplayProps?: React.HTMLAttributes<HTMLDivElement>;
  sx?: SxProps;
  value?: any;
  variant?: 'standard' | 'outlined' | 'filled';
  labelVariant?: 'standard' | 'float';
  //   selectOption?: { label: string | number; value: string | number, [key]:string | number}[];
  selectOption?: Array<any>;
  required?: boolean;
  error?: boolean;
  placeholder?: string;
  labelStyle: SxProps;
  inputStyle: SxProps;
  optionListStyle?: object;
  className?: string;
  helperText?: string;
  errorMessage?: string;
}

export default DropDownProps;
