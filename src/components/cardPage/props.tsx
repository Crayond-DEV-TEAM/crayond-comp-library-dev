export interface CardPageProps {
    cardImage: string;
    buttons?: ButtonItem[];
  }
  
  export interface ButtonItem {
    text: string;
    onClick: () => void;
    style?: React.CSSProperties;
  }
  