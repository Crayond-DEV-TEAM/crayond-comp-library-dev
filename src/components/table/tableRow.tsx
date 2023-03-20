import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import CustomizedSwitches from '../switch/switch';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Cusmstyle } from './style';
import { Progress } from '../progress';
import { CustomCheckbox } from '../checkbox';
import Avatar from '@mui/material/Avatar';
import Performance from '../../assets/performance';
import  Tooltip from '@mui/material/Tooltip';
import  Rating from '@mui/material/Rating';
import StartFill from '../../assets/startFill';
import StarOutline from '../../assets/startOutline';
import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';
const BodyRowLogic = ({
  val,
  i,
  Celldata,
  selectedCheckbox,
  switchList,
  checkboxHandleChange,
  handleSwitch,
}: any) => {
  switch (val?.type?.[0]) {
    case 'INCREMENT':
      return (
        <TableCell key={i}>
          <Typography> {Celldata?.id}</Typography>{' '}
        </TableCell>
      );

    case 'CHECKBOX':
      return (
        <TableCell key={i}>
          <CustomCheckbox
            value={selectedCheckbox?.includes(Celldata?.id)}
            name={Celldata?.id}
            onChange={checkboxHandleChange}
          />
        </TableCell>
      );

    case 'TEXT':
      return (
        <TableCell key={i}>
          <Typography> {Celldata[val.name]}</Typography>
        </TableCell>
      );

    case 'SWITCH':
      return (
        <TableCell key={i}>
          <CustomizedSwitches
            onChange={handleSwitch}
            id={Celldata?.id}
            value={switchList?.includes(Celldata?.id)}
            label={
              switchList?.includes(Celldata?.id)
                ? val?.switchText?.[0]?.lable_2
                : val?.switchText?.[0]?.lable_1
            }
          />
        </TableCell>
      );

    case 'LABLE':
      return (
        <TableCell key={i}>
          <Box
            sx={{
              ...Cusmstyle.labelBackground,
              backgroundColor: Celldata[val.name]?.bgColor
                ? Celldata[val.name]?.bgColor
                : '#e2eafa',
            }}
          >
            <Typography
              sx={{
                ...Cusmstyle.labelText,
                color: Celldata[val.name]?.color
                  ? Celldata[val.name]?.color
                  : '#7692cc',
              }}
            >
              {Celldata[val.name]?.label}
            </Typography>
          </Box>
        </TableCell>
      );

    case 'PROGRESS':
      return (
        <TableCell key={i}>
          <Progress value={Celldata[val.name]} />
        </TableCell>
      );
    case 'IMAGE_WITH_LABLE':
      return (
        <TableCell key={i}>
          <Box display={'flex'} alignItems={'center'} gap={'10px'}>
            <Avatar
              variant={val?.variant}
              sx={Cusmstyle.labelImage}
              alt=""
              src={Celldata[val.name]?.image}
            />
            <Typography>{Celldata[val.name]?.label}</Typography>
          </Box>
        </TableCell>
      );
    case 'IMAGE_WITH_PROFILES':
      return (
        <TableCell key={i}>
          <Box display={'flex'} alignItems={'center'} gap={'8px'}>
            <Avatar
              variant={val?.variant}
              sx={Cusmstyle.labelImage}
              alt=""
              src={Celldata[val.name]?.[0]?.image}
            />
            <Box sx={Cusmstyle.imageAndProfiles}>
              <Typography>{Celldata[val.name]?.[0]?.label}</Typography>
              {Celldata[val.name]?.length > 1 && (
                <Tooltip
                  title={
                    <Box sx={Cusmstyle.popoverProfile}>
                      {Celldata[val.name]?.map(
                        (profile: any, index: number) => (
                          <>
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
                          </>
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
        </TableCell>
      );
    case 'PERFORMANCE':
      return (
        <TableCell key={i}>
          <Tooltip
            title={Celldata[val.name]}
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
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Performance variant={Celldata[val.name]} />
            </Box>
          </Tooltip>
        </TableCell>
      );
    case 'AVATER_TEXT':
      return (
        <TableCell key={i}>
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={'8px'}
          >
            {Celldata[val.name]?.map((avater: any, index: number) => (
              <Tooltip
                key={index}
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
                    ...Cusmstyle.avaterText,
                    backgroundColor: avater?.color,
                  }}
                >
                  <Typography component={'h6'}>{avater?.name?.[0]}</Typography>
                </Avatar>
              </Tooltip>
            ))}
          </Box>
        </TableCell>
      );
    case 'STAR_RATING':
      return (
        <TableCell key={i}>
          <Tooltip
            title={Celldata[val.name]}
            placement={'top'}
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: '#ffc43b',
                  '& .MuiTooltip-arrow': {
                    color: '#ffc43b',
                  },
                },
              },
            }}
            arrow
          >
            <Box>
            <Rating
              defaultValue={Celldata[val.name]}
              readOnly
              precision={0.5}
              // icon={<StartFill />}
              // emptyIcon={<StarOutline />}
            />
          </Box>
          </Tooltip>
        </TableCell>
      );
      case 'GROWTH':
        return (
          <TableCell key={i}>
            {Celldata[val.name]?.variant === "NEGATIVE" && 
            <Box display={'flex'} alignItems={'center'} justifyContent="center" gap={'3px'}>
            <Typography sx={Cusmstyle.negativeGrowth}>{Celldata[val.name]?.value ?? 0} % </Typography> <SouthIcon fontSize='inherit'  sx={{color:"#F44F5A"}} />
          </Box>
            }
             {Celldata[val.name]?.variant === "POSITIVE" && 
             <Box display={'flex'} alignItems={'center'} justifyContent="center" gap={'3px'}>
             <Typography sx={Cusmstyle.positiveGrowth}>{Celldata[val.name]?.value ?? 0} % <NorthIcon fontSize='inherit' sx={{color:"#25C460"}} /> </Typography>
             </Box>
          }
          </TableCell>
        );
    default:
      return (
        <TableCell key={i}>
          <Typography> {Celldata?.[val.name]} </Typography>
        </TableCell>
      );
  }
};

export const EnhancedTableBody = ({
  Body,
  TableData,
  selectedCheckbox,
  switchList,
  handleSwitch,
  checkboxHandleChange,
}: any) => {
  return (
    <TableBody>
      {Body?.map((data: any, rowIndex: number) => {
        return (
          <TableRow>
            {TableData.map((val: any, i: number) => {
              return (
                <BodyRowLogic
                  rowIndex={rowIndex}
                  val={val}
                  i={i}
                  Celldata={data}
                  switchList={switchList}
                  handleSwitch={handleSwitch}
                  checkboxHandleChange={checkboxHandleChange}
                  selectedCheckbox={selectedCheckbox}
                />
              );
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default EnhancedTableBody;
