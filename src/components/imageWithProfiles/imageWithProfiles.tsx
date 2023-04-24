import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Cusmstyle } from '../table/style';
import Tooltip from '@mui/material/Tooltip';

interface ImageWithProfilesProps {
  variant: 'circular' | 'rounded' | 'square' | undefined;
  profiles: {
    label: string;
    image: string | undefined;
  }[];
}
export default function ImageWithProfiles(props: ImageWithProfilesProps) {
  const { variant, profiles } = props;
  return (
    <Box display={'flex'} alignItems={'center'} gap={'8px'}>
      <Avatar
        variant={variant}
        sx={Cusmstyle.labelImage}
        alt=""
        src={profiles?.[0]?.image}
      />
      <Box sx={Cusmstyle.imageAndProfiles}>
        <Typography sx={Cusmstyle.fontStyle}>{profiles?.[0]?.label}</Typography>
        {profiles?.length > 1 && (
          <Tooltip
            title={
              <Box sx={Cusmstyle.popoverProfile}>
                {profiles?.map((profile: any, index: number) => (
                  <Box key={'ImageWithProfileList' + index}>
                    {index !== 0 && (
                      <Box
                        display={'flex'}
                        alignItems={'center'}
                        gap={'10px'}
                        mb={profiles?.length - 1 === index ? 0 : 1.5}
                      >
                        <Avatar
                          variant={variant}
                          sx={Cusmstyle.profileImage}
                          alt=""
                          src={profile?.image}
                        >
                            <Typography>{profile?.label[0]}</Typography>
                          </Avatar>
                        <Typography>{profile?.label}</Typography>
                      </Box>
                    )}
                  </Box>
                ))}
              </Box>
            }
            placement={'bottom'}
            componentsProps={{
              tooltip: {
                sx: { ...Cusmstyle.imageAndProfilesTooltip },
              },
            }}
          >
            <Typography sx={Cusmstyle.moreProfile}>
              +{profiles?.length - 1} More
            </Typography>
          </Tooltip>
        )}
      </Box>
    </Box>
  );
}

ImageWithProfiles.defaultProps = {
  variant: 'circular',
  profiles: [
    {
      label: '',
      image: '',
    },
  ],
};
