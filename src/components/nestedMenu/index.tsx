import DropDownNestedMenu from './dropDownNestedMenu';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface NestedMenuProps {
  menuButtonProps: any;
  dropDownProps?: any;
  menuPaperStyle?: object;
  menuItemStyle?: object;
}
const NestedMenu = (props: NestedMenuProps) => {
  const { menuButtonProps, dropDownProps } =
    props;
  return (
    <>
      <Button
        href=""
        sx={{
          outline: 'none !important',
          padding: '0',
          textTransform: 'capitalize !important',
        }}
        variant="text"
        color="primary"
        {...menuButtonProps}
      >
        {menuButtonProps?.menuName}{' '}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: dropDownProps?.open ? 'rotate(180deg)' : '',
          }}
        >
          <KeyboardArrowDownIcon fontSize="small" />
        </Box>
      </Button>
      <DropDownNestedMenu {...dropDownProps} />
    </>
  );
};

export default NestedMenu;
