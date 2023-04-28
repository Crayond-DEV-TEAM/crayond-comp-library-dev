import { CardProps as MuiCardProps } from '@mui/material';
export interface CardProps extends MuiCardProps {
  title: string;
  subtitle?: string;
  logo?: any;
  alt?: string;
  description: string;
  inlinestyle?: object;
  cardStyle?: object;
  buttonText?: string;
  btnClick?: any;
  bottomText?: string;
  actionText?: string;
  actions?:object;
  onActionClick?:any;
  actionstyle?:object;
  children?:any;
  titleStyle?:object,
  btnStyle?:object,
  bottomTextStyle?:object,
}
