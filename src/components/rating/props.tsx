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
  remarkStyle?: object;
  selectedLabelStyle?: object;
  emojiContainerStyle?: object;
  onMouseEnter?: (index: number) => void;
  onMouseLeave?: (index: number) => void;
  onClick?: (index: number) => void;
  isReadOnly?: true | false;
  isLableVisible?: true | false;
  children?:any;
  childrenStyle?:object;
}
