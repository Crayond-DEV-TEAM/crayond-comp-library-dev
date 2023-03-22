import Checkbox from '@mui/material/Checkbox';
import { Cusmstyle } from '../table/style';

export default function CustomCheckbox(props: any) {
  return (
    <Checkbox
      sx={Cusmstyle.customCheckbox}
      name={(props?.name).toString()}
      onChange={() => props?.onChange(props?.name, event)}
      checked={props?.value}
    />
  );
}

CustomCheckbox.defaultProps = {
  name: '',
  onChange: () => {},
  value: false,
};
