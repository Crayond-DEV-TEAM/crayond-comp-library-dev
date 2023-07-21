import { SxProps } from "@mui/material";

export interface DragProps {
  cardRootStyle: SxProps;
  childCardStyle: SxProps;
  cardContainerStyle: SxProps;
  bottomButtonStyle: SxProps;
  containerTitleStyle: SxProps;
  childCardComponentStyle: SxProps;
  handleClickNotifyIcon: () => void;
  handleClickMoreIcon: () => void;
  handleAddNewButton: () => void;
  cardContainerData: { title: string }[];
  cardData: {
    id: number;
    title: string;
    status: string;
    cardTitle: string;
    component?: React.ReactNode;
    isActive?: boolean;
    notifyIcon: React.ReactNode;
    moreIcon: React.ReactNode;
    subTitles: {
      label: string;
      bgColor: string;
      borderColor: string;
      textColor: string;
    }[];
    images: { img: string; height: string | number; width: string | number }[];
    created_at: string;
    done?: boolean;
  }[];
}

export interface cardDataProp {
  id: number;
  title: string;
  status: string;
  cardTitle: string;
  component?: React.ReactNode;
  isActive?: boolean;
  notifyIcon: React.ReactNode;
  moreIcon: React.ReactNode;
  subTitles: {
    label: string;
    bgColor: string;
    borderColor: string;
    textColor: string;
  }[];
  images: { img: string; height: string | number; width: string | number }[];
  created_at: string;
  done?: boolean;
}
[];

export interface ContainerProps {
  onDragOver: (
    e: React.DragEvent<HTMLDivElement>,
    status: boolean,
    title: any
  ) => void;
  onDrop: (
    e: React.DragEvent<HTMLDivElement>,
    status: boolean,
    title: string
  ) => void;
  onDrag: (e: React.DragEvent<HTMLDivElement>, id: string | number) => void;
  onDragEnd: (
    e: React.DragEvent<HTMLDivElement>,
    // id: number,
    items: object,
    getIndex: number
  ) => void;
  onDragStart: (
    e: React.DragEvent<HTMLDivElement>,
    id: number | string,
    getIndex: number
  ) => void;
  onDragEnter: (
    e: React.DragEvent<HTMLDivElement>,
    id: number | string,
    getIndex: number
  ) => void;
  onDragLeave: (
    e: React.DragEvent<HTMLDivElement>,
    id: number | string,
    getIndex: number
  ) => void;
  onDragHoverChildCard: (
    e: React.DragEvent<HTMLDivElement>,
    items: cardDataProp,
    getIndex: number
  ) => void;

  hoverId:number|null;
  cardContainerStyle: SxProps;
  childCardStyle: SxProps;
  childCardComponentStyle: SxProps;
  containerTitleStyle: SxProps;
  bottomButtonStyle: SxProps;
  childItems: any;
  isDropped: any;
  isDragging: boolean;
  containerData: { title: string };
  handleClickNotifyIcon: () => void;
  handleClickMoreIcon: () => void;
  handleAddNewButton: () => void;
  buttonName: string;
}

export interface CardItemProps {
  onDragStart: (
    e: React.DragEvent<HTMLDivElement>,
    id: number | string,
    getIndex: number
  ) => void;
  onDragEnd: (
    e: React.DragEvent<HTMLDivElement>,
    item: object,
    // id: number | string,
    getIndex: number
  ) => void|undefined;
  onDragLeave: (
    e: React.DragEvent<HTMLDivElement>,
    id: number | string,
    getIndex: number
  ) => void;
  onDragEnter: (
    e: React.DragEvent<HTMLDivElement>,
    id: number | string,
    getIndex: number
  ) => void;

  onDrag: (
    e: React.DragEvent<HTMLDivElement>,
    id: number | string,
    getIndex: number
  ) => void;
  onDragHoverChildCard: (
    e: React.DragEvent<HTMLDivElement>,
    items: cardDataProp,
    getIndex: number
  ) => void;

  childItems: {
    id: number;
    title: string;
    status: string;
    cardTitle: string;
    component: React.ReactNode;
    isActive: boolean;
    notifyIcon: React.ReactNode;
    moreIcon: React.ReactNode;
    subTitles: [
      {
        label: string;
        bgColor: string;
        borderColor: string;
        textColor: string;
      }
    ];
    images: [{ img: string; height: string | number; width: string | number }];
    created_at: string;
    done?: boolean;
  };
  getIndex: number;
  childCardStyle: SxProps;
  childCardComponentStyle: SxProps;
  isDragging: boolean;
  isDropped: { x: number; y: number };
  handleClickNotifyIcon: () => void;
  handleClickMoreIcon: () => void;
}
