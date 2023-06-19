import { SxProps } from '@mui/material';

export interface CardProps {
  data: {
    text1: string;
    text2: string;
    text3: string;
    profileComponent: React.ReactNode;
    profileUrl: string;
  };
  cardWidth: number;
  cardMinWidth: number;
  cardMaxWidth: number;
  cardMaxHeight: number;
  cardMinHeight: number;
  cardHeight: number|undefined;
  CardBackground: string;
  CardHoverStyle: SxProps;
  CardStyle: SxProps;
  hoverBorderStyle: string;
  hoverBgColor: string;
  text1Size: number;
  text1Color: string;
  text2Size: number;
  text2Color: string;
  text3Size: number;
  text3Color: string;
  profileUrlHeight: number;
  profileUrlWidth: number;
  handleClick: () => void;
}

export interface TimelineProps {
  variation2: boolean;
  rootStyle:object;
  timeLinePosition: 'right' | 'left';
  TimelineConnectorColor: string;
  TimelineConnectorWidth: number;

  TimelineDotVariant: 'outlined' | 'filled';
  TimelineDotHeight: number;
  TimelineDotWidth: number;
  TimelineDotColor: string;
  TimelineDotBorder: string;
  profileUrlHeight: number;
  profileUrlWidth: number;

  cardWidth: number;
  cardMinWidth: number;
  cardMaxWidth: number;
  cardMaxHeight: number;
  cardMinHeight: number;
  cardHeight: number;
  CardBackground: string;
  CardHoverStyle: SxProps;
  CardStyle: SxProps;
  hoverBorderStyle: string;
  hoverBgColor: string;
  text1Size: number;
  text1Color: string;
  text2Size: number;
  text2Color: string;
  text3Size: number;
  text3Color: string;
  handleClick: () => void;
}
