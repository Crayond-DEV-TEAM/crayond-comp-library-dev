import Box from '@mui/material/Box';
import { style } from './style';
import Divider from '@mui/material/Divider';
import Stack  from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
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
          onChange={(e) => HeaderComponent?.setHederSearch(e.target.value, e)}
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
            onClick={(e) => HeaderComponent?.fillerMethod(e)}
          >
            {HeaderComponent?.funnelIcon}
          </Box>
          <Box>
            <Button
            onClick={(e)=>HeaderComponent?.secondaryBtnMethod(e)}
              startIcon={HeaderComponent?.secondaryBtnIcon}
              variant="outlined"
              sx={style.outlineBtn}
            >
              {HeaderComponent?.secondaryBtnText}
            </Button>
          </Box>
        </Stack>
        <Button onClick={(e)=>HeaderComponent?.primaryBtnMethod(e)} variant="contained" sx={style.containedBtn}>
          {HeaderComponent?.primaryBtnText}
        </Button>
      </Box>
    </>
  );
}
