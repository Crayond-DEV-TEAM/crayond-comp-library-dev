
export interface ButtonProps {
  id?: any,
  type?: "button" | "submit" | "reset",
  name?: string | "button",
  onClick?: (e: any) => any,
  inLineStyles?: object,
  size: 'small' | 'medium' | 'large' | undefined,
  variant?: 'text' | 'outlined' | 'contained',
  color: 'inherit'| 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined,
  children: React.ReactNode | undefined,
  className?: string,
  disabled?: boolean,
  bgColor?:string,
  href: string
  startIcon?:React.ReactNode;
  endIcon?:React.ReactNode;
};