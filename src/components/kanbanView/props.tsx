export interface DragProps {
  cardRootStyle: object;
  childCardStyle: object;
  cardContainerStyle: object;
  bottomButtonStyle: object;
  containerTitleStyle: object;
  childCardComponentStyle: object;
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
  onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragStart: (
    e: React.DragEvent<HTMLDivElement>,
    id: number | string
  ) => void;
  onDragEnter: (
    e: React.DragEvent<HTMLDivElement>,
    id: number | string
  ) => void;
  onDragLeave: (
    e: React.DragEvent<HTMLDivElement>,
    id: number | string
  ) => void;
  cardContainerStyle: object;
  childCardStyle: object;
  childCardComponentStyle: object;
  containerTitleStyle: object;
  bottomButtonStyle: object;
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
    id: number | string
  ) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>, id: number | string) => void;
  onDragLeave: (
    e: React.DragEvent<HTMLDivElement>,
    id: number | string
  ) => void;
  onDragEnter: (
    e: React.DragEvent<HTMLDivElement>,
    id: number | string
  ) => void;
  onDrag: (e: React.DragEvent<HTMLDivElement>, id: number | string) => void;
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
  childCardStyle: object;
  childCardComponentStyle: object;
  isDragging: boolean;
  isDropped: { x: number; y: number };
  handleClickNotifyIcon: () => void;
  handleClickMoreIcon: () => void;
}
