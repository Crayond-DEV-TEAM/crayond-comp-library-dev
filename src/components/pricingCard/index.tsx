/* eslint-disable react/prop-types */
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  IconButton,
  Grid,
} from '@mui/material';
import { pricingcardstyle } from './style';
import AcceptIcon from '../../assets/accept';
import CancelIcon from '../../assets/cancel';
import { useState } from 'react';
export function PricingCard(props: any) {
  const { variation1 = false, variation2 = true } = props;
  const [active, setActive] = useState(0);

  const onGetStartFunc = () => {
    alert('Subscription has done');
  };
  const pricingCard = [
    {
      title: 'Free Trial',
      headerName: ' Scale up at anytime to support your business growth.',
      pricingList: [
        {
          icon: <AcceptIcon />,
          isCancel: false,
          listPoints: 'Import data from multiple sources.',
        },
        {
          icon: <AcceptIcon />,
          isCancel: false,
          listPoints:
            'Secure hosted data warehouse & Automatic DataDecoder ETL.',
        },
        {
          icon: <AcceptIcon />,
          isCancel: false,
          listPoints: 'Export charts and datasets & uploads up to 2 MB each.',
        },
        {
          icon: <CancelIcon />,
          isCancel: true,
          listPoints: 'Embed charts on 3rd party sites.',
        },
      ],

      subcriptionTitle: 'Free',
      subscriptionDue: 'months',
      getStartedbtn: 'Get Started',
      onGetStartFunc: onGetStartFunc,
    },
    {
      title: 'Free Trial',
      headerName: ' Scale up at anytime to support your business growth.',
      pricingList: [
        {
          icon: <AcceptIcon />,
          isCancel: false,
          listPoints: 'Import data from multiple sources.',
        },
        {
          icon: <AcceptIcon />,
          isCancel: false,
          listPoints:
            'Secure hosted data warehouse & Automatic DataDecoder ETL.',
        },
        {
          icon: <AcceptIcon />,
          isCancel: false,
          listPoints: 'Export charts and datasets & uploads up to 2 MB each.',
        },
        {
          icon: <CancelIcon />,
          isCancel: true,
          listPoints: 'Embed charts on 3rd party sites.',
        },
      ],

      subcriptionTitle: '$6',
      subscriptionDue: 'months',
      getStartedbtn: 'Get Started',
      onGetStartFunc: onGetStartFunc,
    },
    {
      title: 'Free Trial',
      headerName: ' Scale up at anytime to support your business growth.',
      pricingList: [
        {
          icon: <AcceptIcon />,
          isCancel: false,
          listPoints: 'Import data from multiple sources.',
        },
        {
          icon: <AcceptIcon />,
          isCancel: false,
          listPoints:
            'Secure hosted data warehouse & Automatic DataDecoder ETL.',
        },
        {
          icon: <AcceptIcon />,
          isCancel: false,
          listPoints: 'Export charts and datasets & uploads up to 2 MB each.',
        },
        {
          icon: <CancelIcon />,
          isCancel: true,
          listPoints: 'Embed charts on 3rd party sites.',
        },
      ],

      subcriptionTitle: '$15',
      subscriptionDue: 'months',
      getStartedbtn: 'Get Started',
      onGetStartFunc: onGetStartFunc,
    },
  ];

  const pricingCardVariationTwo = [
    {
      title: 'Free Trial',
      headerName: ' More advanced AI.',
      pricingList: [
        {
          icon: <AcceptIcon />,
          isCancel: false,
          listPoints: 'Email Support',
        },
        {
          icon: <AcceptIcon />,
          isCancel: false,
          listPoints: 'Unlimited messages',
        },
        {
          icon: <AcceptIcon />,
          isCancel: false,
          listPoints: 'Access to AI',
        },
      ],

      subcriptionTitle: 'Free',
      subscriptionDue: 'months',
      getStartedbtn: 'Get Started',
      onGetStartFunc: onGetStartFunc,
    },
    {
      title: 'Free Trial',
      headerName: 'More advanced AI',
      pricingList: [
        {
          icon: <AcceptIcon />,
          isCancel: false,
          listPoints: 'Email Support',
        },
        {
          icon: <AcceptIcon />,
          isCancel: false,
          listPoints: 'Unlimited messages',
        },
        {
          icon: <AcceptIcon />,
          isCancel: false,
          listPoints: 'Access to AI',
        },
      ],

      subcriptionTitle: '$6',
      subscriptionDue: 'months',
      getStartedbtn: 'Get Started',
      onGetStartFunc: onGetStartFunc,
    },
  ];

  const onPricingChange = (val: any, index: any) => {
    setActive(index);
  };

  return (
    <Box sx={{ ...pricingcardstyle.rootSx }}>
      {variation1 && (
        <Box sx={{ ...pricingcardstyle.totalPricingBoxSx }}>
          {pricingCard &&
            pricingCard?.map((val, index) => {
              return (
                <Box key={index} sx={{ ...pricingcardstyle.totalBodySx }}>
                  <Card sx={{ ...pricingcardstyle.cardSx }}>
                    <CardContent sx={{ p: '0px' }}>
                      <Box>
                        <Typography sx={{ ...pricingcardstyle.pricingHeadSx }}>
                          {val?.title}
                        </Typography>
                        <Typography sx={{ ...pricingcardstyle.pricingSubSx }}>
                          {val?.headerName}
                        </Typography>
                      </Box>
                      {val?.pricingList &&
                        val?.pricingList?.map((val, index) => {
                          return (
                            <Box
                              key={index}
                              sx={{ ...pricingcardstyle.pricingListSx }}
                            >
                              <Box sx={{ ...pricingcardstyle.totalList }}>
                                <IconButton
                                  sx={{ padding: '0px' }}
                                  disableRipple
                                >
                                  {val?.icon}
                                </IconButton>
                                <Typography
                                  sx={{
                                    ...pricingcardstyle.pricingListRow,
                                    textDecoration: val?.isCancel
                                      ? 'line-through'
                                      : 'none',
                                  }}
                                >
                                  {val?.listPoints}
                                </Typography>
                              </Box>
                            </Box>
                          );
                        })}
                    </CardContent>
                    <Box>
                      <Typography
                        sx={{ ...pricingcardstyle.pricingHeadSx, pt: '27px' }}
                      >
                        {val?.subcriptionTitle}
                        {val?.subcriptionTitle === 'Free' ? (
                          ''
                        ) : (
                          <>
                            /
                            <Box
                              component={'span'}
                              sx={{ ...pricingcardstyle.subscriptionDueSx }}
                            >
                              {val?.subscriptionDue}
                            </Box>
                          </>
                        )}
                      </Typography>
                      <CardActions sx={{ justifyContent: 'center' }}>
                        <Button
                          sx={{ ...pricingcardstyle.getBtnSx }}
                          onClick={() => onGetStartFunc()}
                        >
                          {val?.getStartedbtn}
                        </Button>
                      </CardActions>
                    </Box>
                  </Card>
                </Box>
              );
            })}
        </Box>
      )}
      {variation2 && (
        <Box sx={{ ...pricingcardstyle.totalPricingBoxvarSx }}>
          {pricingCardVariationTwo &&
            pricingCardVariationTwo?.map((val, index) => {
              return (
                <Grid
                  container
                  key={index}
                  spacing={3}
                  sx={{ p: '18px 0px !important', justifyContent: 'center' }}
                >
                  <Grid item xs={12} sm={4} md={4} paddingTop={'16px'}>
                    <Box key={index}>
                      <Box sx={{ ...pricingcardstyle.totalBodySubSx }}>
                        <Card
                          sx={{
                            ...pricingcardstyle.cardTwoSx,
                            pt: variation2 ? '18px' : '24px',
                            border:
                              active === index ? '2px solid #665CD7' : 'none',
                          }}
                          onClick={() => onPricingChange(val, index)}
                        >
                          {active === index ? (
                            <Box sx={{ ...pricingcardstyle.selectIconSx }}>
                              <IconButton
                                sx={{
                                  ...pricingcardstyle.selctbtn,
                                  p: 0,
                                  justifyContent: 'end',
                                }}
                              >
                                <AcceptIcon />
                              </IconButton>
                            </Box>
                          ) : (
                            ''
                          )}
                          <CardContent sx={{ p: '0px' }}>
                            <Box>
                              <Typography
                                sx={{ ...pricingcardstyle.pricingHeadVarSx }}
                              >
                                {val?.title}
                              </Typography>
                              <Typography
                                sx={{ ...pricingcardstyle.pricingSubVarSx }}
                              >
                                {val?.headerName}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography
                                sx={{
                                  ...pricingcardstyle.pricingsubSx,
                                  pt: '24px',
                                  pb: '20px',
                                }}
                              >
                                {val?.subcriptionTitle}
                                {val?.subcriptionTitle === 'Free' ? (
                                  ''
                                ) : (
                                  <>
                                    /
                                    <Box
                                      component={'span'}
                                      sx={{
                                        ...pricingcardstyle.subscriptionDueSx,
                                      }}
                                    >
                                      {val?.subscriptionDue}
                                    </Box>
                                  </>
                                )}
                              </Typography>
                            </Box>

                            {val?.pricingList &&
                              val?.pricingList?.map((val, index) => {
                                return (
                                  <Box
                                    key={index}
                                    sx={{
                                      ...pricingcardstyle.pricingListSubSx,
                                    }}
                                  >
                                    <Box sx={{ ...pricingcardstyle.totalList }}>
                                      <IconButton
                                        sx={{ padding: '0px' }}
                                        disableRipple
                                      >
                                        {val?.icon}
                                      </IconButton>
                                      <Typography
                                        sx={{
                                          ...pricingcardstyle.pricingListRow,
                                          textDecoration: val?.isCancel
                                            ? 'line-through'
                                            : 'none',
                                        }}
                                      >
                                        {val?.listPoints}
                                      </Typography>
                                    </Box>
                                  </Box>
                                );
                              })}
                          </CardContent>

                          <CardActions
                            sx={{
                              justifyContent: 'center',
                              pt: '24px !important',
                              p: 0,
                            }}
                          >
                            <Button
                              sx={{
                                ...pricingcardstyle.getBtnSx,
                                maxWidth: variation2 ? 'inherit' : '204px',
                              }}
                              onClick={() => onGetStartFunc()}
                            >
                              {val?.getStartedbtn}
                            </Button>
                          </CardActions>
                        </Card>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={8} padding={'0px!important'}>
                    <Box sx={{ color: '#000' }}>
                      <Card sx={{position:'relative',}}>
                        <CardContent>
                          
                          <Box>
                            <Box sx={{...pricingcardstyle.payCardSx, border:'2px solid #D3D3D3',width:'100%',maxWidth:'330px'}}>
                            {active === index ? (
                            <Box sx={{ ...pricingcardstyle.selectIconSx }}>
                              <IconButton
                                sx={{
                                  ...pricingcardstyle.selctbtn,
                                  p: 0,
                                  justifyContent: 'end',
                                }}
                              >
                                <AcceptIcon />
                              </IconButton>
                            </Box>
                          ) : (
                            ''
                          )}
                              <Typography sx={{ ...pricingcardstyle.paySx }}>
                                Pay monthly
                              </Typography>
                            <Box>
                              <Typography
                                sx={{
                                  ...pricingcardstyle.pricingsubSx,
                                  borderBottom:'0px',
                                  pt: '24px',
                                  pb:'0px',
                                }}
                              >
                                $399/month
                              </Typography>
                            </Box>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </Box>
                  </Grid>
                </Grid>
              );
            })}
        </Box>
      )}
    </Box>
  );
}

PricingCard.defaultProps = {};
