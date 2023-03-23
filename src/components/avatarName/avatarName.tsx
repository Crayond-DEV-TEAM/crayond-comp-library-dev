import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Cusmstyle } from '../table/style';
import  Tooltip from '@mui/material/Tooltip';

export default function AvatarName(props: any) {
  const { Celldata, val } = props;
  return (
    <Box
    display={'flex'}
    alignItems={'center'}
    justifyContent={'center'}
    gap={'8px'}
  >
    {Celldata[val.name]?.map((avater: any, index: number) => (
      <Tooltip
        key={"AvatarNameList"+index}
        title={avater?.label ?? avater?.name}
        placement={'bottom'}
        componentsProps={{
          tooltip: {
            sx: {
              bgcolor: 'primary.main',
              '& .MuiTooltip-arrow': {
                color: 'primary.main',
              },
            },
          },
        }}
        arrow
      >
        <Avatar
          sx={{
            ...Cusmstyle.avatarText,
            backgroundColor: avater?.color,
          }}
        >
          <Typography component={'h6'}>{avater?.name?.[0]}</Typography>
        </Avatar>
      </Tooltip>
    ))}
  </Box>
  );
}

AvatarName.defaultProps = {
  Celldata: {},
  val: {},
};