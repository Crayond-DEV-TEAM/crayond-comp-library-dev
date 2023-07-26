import { SxProps } from '@mui/system';

export interface CardPageProps {
  cardImage: string;
  buttons?: ButtonItem[];
  title: string;
  mailId: string;
  mobile: string;
  divider?: true | false;
  desc?: string;
  variant: 'imageOriented' | 'contentOriented';
  cardStyle?: SxProps;
  cardWrapperStyle?: SxProps;
  cardMediastyle?: SxProps;
  cardContentStyle?: SxProps;
  titleStyle?: SxProps;
  subTitleWrapStyle?: SxProps;
  mailIdStyle?: SxProps;
  dotStyle?: SxProps;
  mobileNumberStyle?: SxProps;
  dividerStyle?: SxProps;
  descStyle?: SxProps;
  buttonWrapStyle?: SxProps;
}

export interface ButtonItem {
  text: string;
  onClick: () => void;
  style?: React.CSSProperties;
  disabled?: true | false;
}
