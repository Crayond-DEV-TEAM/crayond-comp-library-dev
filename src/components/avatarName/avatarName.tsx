import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Cusmstyle } from '../table/style';
import Tooltip from '@mui/material/Tooltip';

interface AvatarNameProps {
  profiles: {
    name: string;
    label: string;
    color: string;
  }[];
}
export default function AvatarName(props: AvatarNameProps) {
  const { profiles } = props;
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={'8px'}
    >
      {profiles?.map((avatar: any, index: number) => (
        <Tooltip
          key={'AvatarNameList' + index}
          title={avatar?.label ?? avatar?.name}
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
              backgroundColor: avatar?.color,
            }}
          >
            <Typography component={'h6'}>{avatar?.name?.[0]}</Typography>
          </Avatar>
        </Tooltip>
      ))}
    </Box>
  );
}

AvatarName.defaultProps = {
  profiles: [
    {
      name: '',
      label: '',
      color: '',
    },
  ],
};
