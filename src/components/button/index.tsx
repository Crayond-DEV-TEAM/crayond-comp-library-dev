interface ButtonProps {
  primary?: boolean;
  label: string;
  onClick?: () => void;
}

export const Button = ({ primary = false, label, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      style={{
        fontWeight: 500,
        border: '0',
        borderRadius: '10px',
        padding: '8px 16px',
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
