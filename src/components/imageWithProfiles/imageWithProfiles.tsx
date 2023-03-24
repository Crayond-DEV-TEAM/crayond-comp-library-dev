import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Cusmstyle } from '../table/style';
import  Tooltip from '@mui/material/Tooltip';

export default function ImageWithProfile(props: any) {
  const { Celldata, val } = props;
  return (
    <Box display={'flex'} alignItems={'center'} gap={'8px'}>
    <Avatar
      variant={val?.variant}
      sx={Cusmstyle.labelImage}
      alt=""
      src={Celldata[val.name]?.[0]?.image}
    />
    <Box sx={Cusmstyle.imageAndProfiles}>
      <Typography  sx={Cusmstyle.fontStyle}>{Celldata[val.name]?.[0]?.label}</Typography>
      {Celldata[val.name]?.length > 1 && (
        <Tooltip
          title={
            <Box sx={Cusmstyle.popoverProfile}>
              {Celldata[val.name]?.map(
                (profile: any, index: number) => (
                  <Box key={"ImageWithProfileList"+index}>
                    {index !== 0 && (
                      <Box
                        display={'flex'}
                        alignItems={'center'}
                        gap={'10px'}
                        mb={
                          Celldata[val.name]?.length - 1 === index
                            ? 0
                            : 1.5
                        }
                      >
                        <Avatar
                          variant={val?.variant}
                          sx={Cusmstyle.profileImage}
                          alt=""
                          src={profile?.image}
                        />
                        <Typography>{profile?.label}</Typography>
                      </Box>
                    )}
                  </Box>
                )
              )}
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
            +{Celldata[val.name]?.length - 1} More
          </Typography>
        </Tooltip>
      )}
    </Box>
  </Box>
  );
}

ImageWithProfile.defaultProps = {
  Celldata: {},
  val: {},
};