interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      style={{
        fontFamily:
          "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontWeight: 700,
        border: '0',
        borderRadius: '3em',
        cursor: 'pointer',
        display: 'inline-block',
        lineHeight: 1,
        ...(primary
          ? { color: 'white', backgroundColor: '#1ea7fd' }
          : {
              color: '#333',
              backgroundColor: 'transparent',
              boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
            }),
      }}
      {...props}
    >
      {label}
    </button>
  );
};
