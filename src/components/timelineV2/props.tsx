import { SxProps } from '@mui/material';
import React, { CSSProperties, ReactComponentElement } from 'react';
import { OverridableStringUnion } from '@mui/types';
import { DateAndTimePickerProps } from '../dateAndTimePicker/props';

export interface timelineItemsProps {
  time?: Date;
  content1?: string;
  content2?: string;
  image?: string | object | React.ReactNode | React.ReactElement;
}

export interface timelineV2props {
  //timeline items array
  timelineItems?: timelineItemsProps[];
  timelineItemImageStyle?: React.CSSProperties;

  //timeline general props
  variation2?: boolean;
  timelineContainerStyle?: object;
  timelinePosition?: 'alternate' | 'left' | 'right';
  // timelineAlignment? : 'left' | 'right' | 'center';
  timelineStyle?: SxProps;

  //timeline dot props
  timelineDotStyle?: SxProps;
  timelineDotVariant?: 'filled' | 'outlined';
  timelineDotSize?:  string;
  timelineDotColor?: string;
  timelineDotBorderColor? : string;
  timelineDotGapRadius? : string;
  timelineDotChildrenStyle?: React.CSSProperties;

  //timeline connector props
  timelineConnectorColor? : string;
  timelineConnectorStyle?: SxProps;

  //timeline seperator props
  timelineSeperatorStyle?: SxProps;

  //timeline content props
  timelineContentStyle?: SxProps;

  //timeline content box props
  timelineContentBoxStyle?: SxProps;

  handleMouseEnter?: (index: number) => any;
  handleMouseLeave?: (index: number) => any;
  handleClick?: (index: number) => any;

}
