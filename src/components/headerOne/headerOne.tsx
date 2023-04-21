import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { style } from './style';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

export default function HeaderOne(props: any) {
  const { HeaderComponent } = props;

  return (
    <>
      <Box sx={style.container}>
        <Box sx={style.actionBlock}>
          <Stack direction={'row'} spacing={1} alignItems={'center'}>
            {props?.selectedCheckbox?.length !== 0 && (
              <Stack
                direction={'row'}
                spacing={1}
                divider={
                  <Divider
                    sx={{ borderColor: '#818181', borderWidth: '0.07em' }}
                    flexItem
                    orientation="vertical"
                    variant="middle"
                  />
                }
              >
                <Typography sx={style.selectedText}>
                  {props?.selectedCheckbox?.length > 9
                    ? props?.selectedCheckbox?.length
                    : '0' + props?.selectedCheckbox?.length}{' '}
                  Selected
                </Typography>
                <Typography
                  sx={style.clear}
                  onClick={() => props?.SelectAll([], true)}
                >
                  Clear
                </Typography>
              </Stack>
            )}
            <Box sx={style.statusBlock}>
              <Stack
                direction={'row'}
                spacing={1.2}
                alignItems={'center'}
                divider={
                  <Divider
                    sx={{
                      borderColor: '#818181',
                      height: '16px',
                      margin: 'auto 0 !important',
                      borderWidth: '0.07em',
                    }}
                    variant="middle"
                    flexItem
                    orientation="vertical"
                  />
                }
              >
                <Select
                  sx={style.select}
                  displayEmpty
                  value={HeaderComponent?.headerSelect}
                  onChange={(e) =>
                    HeaderComponent?.setHederSelect(e.target.value)
                  }
                  input={<OutlinedInput />}
                >
                  {HeaderComponent?.selectOption?.map((option: any) => (
                    <MenuItem key={option?.value} value={option?.value}>
                      {option?.label}
                    </MenuItem>
                  ))}
                </Select>
                <Box onClick={() => HeaderComponent?.setHederSelect('')}>
                  {HeaderComponent?.deleteIcon}
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Box sx={style.lastContainer}>
          <TextField
            sx={style.input}
            InputProps={{ startAdornment: HeaderComponent?.searchIcon }}
            placeholder={HeaderComponent?.searchPlaceholder}
            // value={HeaderComponent?.headerSearch}
            onChange={(e) => HeaderComponent?.setHederSearch(e.target.value, e)}
          />
          <Box
            sx={style.iconContainer}
            onClick={(e) => HeaderComponent?.fillerMethod(e)}
          >
            {HeaderComponent?.funnelIcon}
          </Box>
          <Box
            sx={style.iconContainer}
            id="basic-button"
            aria-controls={props?.openDownloadModal ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={props?.openDownloadModal ? 'true' : undefined}
            onClick={(e) => {
              HeaderComponent?.downloadMethod(e);
              props?.handelDownload(e);
            }}
          >
            {HeaderComponent?.downloadIcon}
          </Box>
        </Box>
      </Box>
    </>
  );
}
