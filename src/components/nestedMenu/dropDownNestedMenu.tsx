import Box from '@mui/material/Box';
import NestedMenu, { NestedMenuProps } from './nestedMenu';
import { NestedMenuContextProvider } from './nestedMenuContext';

const DropDownNestedMenu = (props: NestedMenuProps) => {
  return (
    <NestedMenuContextProvider {...props}>
      <Box className='nestedMenuRoot'>
      <NestedMenu  {...props} />
      </Box>
    </NestedMenuContextProvider>
  );
};

export default DropDownNestedMenu;
