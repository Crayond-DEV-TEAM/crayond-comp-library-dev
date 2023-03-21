import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { style } from './style';
import {
  Divider,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  FormControlLabel,
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { CustomCheckbox } from '../checkbox';

export default function HeaderTwo(props: any) {
  const { HeaderComponent } = props;
  return (
    <>
      <Box sx={style.container}>
        <FormControlLabel control={<CustomCheckbox name={"HeaderCheckbox"} value={HeaderComponent?.headerCheckbox} onChange={(data:any, e:any)=>HeaderComponent?.setHederCheckbox(e.target.checked)}/>} label={HeaderComponent?.checkboxLabel} />
        <TextField
          sx={style.input}
          InputProps={{ startAdornment: HeaderComponent?.searchIcon }}
          placeholder={HeaderComponent?.searchPlaceholder}
          // value={HeaderComponent?.headerSearch}
          onChange={(e) => HeaderComponent?.setHederSearch(e.target.value)}
        />
        <Stack
          direction={'row'}
          spacing={1.5}
          divider={
            <Divider
              sx={{ borderColor: '#CACACA',   height: '26px',
              marginTop: 'auto !important', marginBottom: 'auto !important',}}
              flexItem
              orientation="vertical"
              variant="middle"
            />
          }
        >
          <Box
            sx={style.iconContainer}
            onClick={() => HeaderComponent?.fillerMethod()}
          >
            {HeaderComponent?.funnelIcon}
          </Box>
          <Box>
            <Button
            onClick={()=>HeaderComponent?.secondaryBtnMethod()}
              startIcon={HeaderComponent?.secondaryBtnIcon}
              variant="outlined"
              sx={style.outlineBtn}
            >
              {HeaderComponent?.secondaryBtnText}
            </Button>
          </Box>
        </Stack>
        <Button onClick={()=>HeaderComponent?.primaryBtnMethod()} variant="contained" sx={style.containedBtn}>
          {HeaderComponent?.primaryBtnText}
        </Button>
      </Box>
    </>
  );
}
