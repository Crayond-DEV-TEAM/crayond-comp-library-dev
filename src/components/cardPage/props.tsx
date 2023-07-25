export interface CardPageProps {
  cardImage: string;
  buttons?: ButtonItem[];
  title: string;
  mailId: string;
  mobile: string;
  divider?: true | false;
}

export interface ButtonItem {
  text: string;
  onClick: () => void;
  style?: React.CSSProperties;
}
