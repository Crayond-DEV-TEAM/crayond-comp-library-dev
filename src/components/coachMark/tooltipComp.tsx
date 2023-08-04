import { Box, Button, Stack, TooltipProps, Typography } from '@mui/material';

export const Tooltip = (props: any): JSX.Element => {
  const {
    continuous = false,
    index = 0,
    step = {},
    backProps = {},
    closeProps = {},
    primaryProps = {},
    skipProps = {},
    tooltipProps = {},
  } = props;

  console.log(step, 'step ');

  return (
    <Box
      {...tooltipProps}
      //   sx={
      //     index === 0 ?
      //       homeStyle.boxFirstStepCard :
      //       index === 1 ?
      //         homeStyle.boxSecondStepCard :
      //         index === 2 ?
      //           homeStyle.boxThirdStepCard :
      //           index === 3 ?
      //             homeStyle.boxFourthStepCard :
      //             index === 4 ?
      //               homeStyle.boxFifthStepCard :
      //               homeStyle.boxtoolTipSx
      //   }
    >
      <Box>{step?.title}</Box>
      <Box>
        {continuous && (
          <>
            {index === 0 ? (
              <Typography
                id="next"
                {...primaryProps}
                variant="subtitle2"
                fontWeight={700}
                sx={{
                  color: 'primary.main',
                  bgcolor: '#fff',
                  fontSize: '14px',
                  textAlign: 'end',
                  cursor: 'pointer',
                }}
              >
                Get Started
              </Typography>
            ) : index === 5 ? (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'end',
                  pt: 1.5,
                }}
              >
                <Button
                //    sx={homeStyle.buttonAddProdktSx}
                // onClick={() => onAddProductClick()}
                >
                  <Typography variant="subtitle1" fontWeight={600}>
                    Add Product
                  </Typography>
                </Button>
              </Box>
            ) : (
              <Typography
                id="next"
                {...primaryProps}
                variant="subtitle2"
                fontWeight={700}
                sx={{
                  color: 'primary.main',
                  bgcolor: '#fff',
                  fontSize: '14px',
                  textAlign: 'end',
                  cursor: 'pointer',
                  pt: 1.5,
                }}
              >
                Next
              </Typography>
            )}
          </>
        )}
        {skipProps && (
          <>
            {index === 0 ? (
              <Box></Box>
            ) : index === 1 ? (
              <Box>
                <Stack flexDirection={'row'} gap={'4px'} marginTop={'-14px'}>
                  {/* <Box sx={homeStyle.dashSx} />
                          <Box sx={homeStyle.dotSx} />
                          <Box sx={homeStyle.dotSx} />
                          <Box sx={homeStyle.dotSx} />
                          <Box sx={homeStyle.dotSx} /> */}
                </Stack>
              </Box>
            ) : index === 2 ? (
              <Box>
                <Stack flexDirection={'row'} gap={'4px'} marginTop={'-14px'}>
                  {/* <Box sx={homeStyle.dotSx} />
                            <Box sx={homeStyle.dashSx} />
                            <Box sx={homeStyle.dotSx} />
                            <Box sx={homeStyle.dotSx} />
                            <Box sx={homeStyle.dotSx} /> */}
                </Stack>
              </Box>
            ) : index === 3 ? (
              <Box>
                <Stack flexDirection={'row'} gap={'4px'} marginTop={'-14px'}>
                  {/* <Box sx={homeStyle.dotSx} />
                              <Box sx={homeStyle.dotSx} />
                              <Box sx={homeStyle.dashSx} />
                              <Box sx={homeStyle.dotSx} />
                              <Box sx={homeStyle.dotSx} /> */}
                </Stack>
              </Box>
            ) : index === 5 ? (
              <Box></Box>
            ) : (
              <Box>
                <Stack flexDirection={'row'} gap={'4px'} marginTop={'-14px'}>
                  {/* <Box sx={homeStyle.dotSx} />
                                <Box sx={homeStyle.dotSx} />
                                <Box sx={homeStyle.dotSx} />
                                <Box sx={homeStyle.dashSx} />
                                <Box sx={homeStyle.dotSx} /> */}
                </Stack>
              </Box>
            )}
          </>
        )}
        {closeProps &&
          (index === 5 ? (
            <Box>
              <Typography
                {...closeProps}
                id="back"
                variant="subtitle1"
                fontWeight={600}
                color="GrayText"
                marginTop={'-34px'}
                sx={{ cursor: 'pointer' }}
              >
                Do It Later
              </Typography>
            </Box>
          ) : (
            ''
          ))}
        {!continuous && (
          <Button {...closeProps}>
            <Typography id="close">Close</Typography>
          </Button>
        )}
      </Box>
    </Box>
  );
};
