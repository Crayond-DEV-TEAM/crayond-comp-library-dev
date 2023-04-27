import { CardProps as MuiCardProps } from '@mui/material';
export interface CardProps extends MuiCardProps {
  title: string;
  subtitle?: string;
  logo?: string;
  alt?: string;
  description: string;
  inlinestyle?: object;
  cardStyle?: object;
  imgStyle?: object;
  logoWidth?: 'string' | number | undefined;
  logoHeight?: 'string' | number | undefined;
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
