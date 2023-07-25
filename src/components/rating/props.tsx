import { SxProps } from "@mui/material";

export interface RadioGroupRatingProps {
  customIcons?: {
    SelectIcon: React.ReactElement;
    unSelectIcon: React.ReactElement;
    label: string;
    value: number;
  }[];
  styledRating?: {
    filled: React.ReactElement;
    unFilled: React.ReactElement;
    starValue: number;
    remark?: string;
    maximumIcon?: number;
  }[];
  variant: 'star' | 'emoji';
  remarkStyle?: SxProps;
  selectedLabelStyle?: SxProps;
  emojiContainerStyle?: SxProps;
  onMouseEnter?: (index: number) => void;
  onMouseLeave?: (index: number) => void;
  onClick?: (index: object) => void;
  isReadOnly?: true | false;
  isLabelVisible?: true | false;
  children?: React.ReactNode;
  childrenStyle?: SxProps;
  precision?: number;
}
