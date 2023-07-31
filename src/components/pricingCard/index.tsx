/* eslint-disable react/prop-types */
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Grid,
  InputAdornment,
  SxProps,
} from '@mui/material';
import { pricingcardstyle } from './style';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { ReactNode, useEffect, useState } from 'react';
import { AcceptIcon } from '../../assets/accept';
import { BasicButtons } from '../button';
import { InputField } from '../inputField';
import { EmailIcon } from '../../assets/email';
import { CardPayment } from '../../assets/cardPayment';

interface PricingCard {
  variation1?: boolean;
  variation2?: boolean;
  activeColor?: string;
  startPlanBtnStyle?: SxProps;
  footerSubPara?: string;
  getStartedPaymentplan?: string;
  emailHeader?: string;
  billPaymentAmount?: string;
  Variation2RigthBoxStyle?: SxProps;
  variationPositionStyle?: SxProps;
  paymentSelectedCardSx?: SxProps;
  billAmountStyle?: SxProps;
  emailInputSx?: SxProps;
  variation2TotalLeftBoxStyle?: SxProps;
  ccvsSx?: SxProps;
  pricingCardVariationOne?: PricingCards[];
  pricing: CombinedPricing | undefined;
  VerfiyIcon?: JSX.Element;
  applyPromoCode?: string;
  cardNumberTitle?: string;
  commonTextColor?: string;
  cardBoxShadow?: string;
  pricingDetailsListStyle?: SxProps;
  promoCodeSx?: SxProps;
  variation1TotalPricingBoxStyle?: SxProps;
  CustomPaymentField?: ReactNode;
  paymentFooter?: ReactNode;
  pricingCardSx?: SxProps;
  pricingCardOneSx?: SxProps;
  pricingCardVariationTwo?: Pricing[];
  cardNumberLength?: number;
  onStartPlan?: (data: Pricing, paymentData: PaymentData) => void;
  onGetStartPlan?: (data: Pricing | PricingCards) => void;
  onPricingChanges?: (data: Pricing | PricingCards, index: number) => void;
}

interface PaymentData {
  email: string;
  expiry: string;
  cardNumber: string;
  ccv: string;
  promoCodeNumber: string;
}

interface Pricing {
  title: string;
  description: string;
  pricingList: {
    icon: ReactNode;
    isCancel: boolean;
    listPoints: string;
  }[];
  subcriptionAmountMonthly: string | number;
  subcriptionAmountYearly: string;
  offerYouSave?: string | undefined;
  totalAmount: string | number;
  subscriptionDue: string;
  getStartedbtn: string;
  currencySymbol: string;
}
interface PricingCards {
  title: string;
  description: string;
  pricingList: {
    icon: ReactNode;
    isCancel: boolean;
    listPoints: string;
  }[];
  subcriptionAmountMonthly: string | number;
  subscriptionDue: string;
  getStartedbtn: string;
  currencySymbol: string;
}

interface CombinedPricing extends Pricing, PricingCards {}

export function PricingCard(props: PricingCard) {
  const {
    variation1 = true,
    variation2 = false,
    activeColor = '#665CD7',
    emailHeader = ' Billing email',
    cardNumberTitle = ' Billing email',
    startPlanBtnStyle = {},
    commonTextColor = '#3B3B3B',
    applyPromoCode = '',
    footerSubPara = '',
    pricingCardSx = {},
    getStartedPaymentplan = '',
    billPaymentAmount = '',
    Variation2RigthBoxStyle = {},
    variationPositionStyle = {},
    paymentSelectedCardSx = {},
    billAmountStyle = {},
    pricingDetailsListStyle = {},
    emailInputSx = {},
    cardBoxShadow = 'none',
    promoCodeSx = {},
    ccvsSx = {},
    pricingCardOneSx = {},
    variation2TotalLeftBoxStyle = {},
    variation1TotalPricingBoxStyle = {},
    CustomPaymentField,
    paymentFooter,
    onStartPlan = () => false,
    onGetStartPlan = () => false,
    pricingCardVariationOne = [],
    pricingCardVariationTwo = [],
    onPricingChanges = () => false,
    pricing,
    cardNumberLength,
    VerfiyIcon,
  } = props;

  const [paymentActive, setPaymentActive] = useState({
    monthly: false,
    yearly: false,
  });

  const [active, setActive] = useState(0);
  const [state, setState] = useState({
    email: '',
    expiry: '',
    cardNumber: '',
    ccv: '',
    promoCodeNumber: '',
    error: {
      email: '',
      expiry: '',
      cardNumber: '',
      ccv: '',
      promoCodeNumber: '',
    },
  });
  const [promoCode, setPromoCode] = useState(true);
  const [errorEnable, setErrorEnable] = useState({
    email: false,
    expiry: false,
    cardNumber: false,
    ccv: false,
    promoCodeNumber: false,
  });

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const inputCardNumber = event.target.value.replace(/[^0-9]/g, '');
    let formattedCardNumber = '';

    for (let i = 0; i < inputCardNumber.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedCardNumber += '-';
      }
      formattedCardNumber += inputCardNumber[i];
    }

    formattedCardNumber = formattedCardNumber.slice(
      0,
      cardNumberLength ? cardNumberLength : 19,
    );

    setState({
      ...state,
      cardNumber: formattedCardNumber,
    });
  };

  const onGetStartFunc = (data: Pricing | PricingCards) => {
    if (pricing) {
      onGetStartPlan(data);
    }
  };

  const ValidateEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return Boolean(re.test(email));
  };

  const validate = () => {
    let isValid = true;
    const updatedError = { ...state.error };
    const updatedErrorEnable = { ...errorEnable };

    // Checking email
    if (state.email.length === 0) {
      isValid = false;
      updatedErrorEnable.email = true;
      updatedError.email = 'Email is required';
    } else if (!ValidateEmail(state.email)) {
      isValid = false;
      updatedErrorEnable.email = true;
      updatedError.email = 'Invalid email';
    } else {
      updatedErrorEnable.email = false;
      updatedError.email = '';
    }

    // Checking cardNumber
    if (state.cardNumber.length === 0) {
      isValid = false;
      updatedErrorEnable.cardNumber = true;
      updatedError.cardNumber = 'Card number is required';
    } else {
      updatedErrorEnable.cardNumber = false;
      updatedError.cardNumber = '';
    }

    // Checking ccv
    if (state.ccv.length === 0) {
      isValid = false;
      updatedErrorEnable.ccv = true;
      updatedError.ccv = 'CCV is required';
    } else {
      updatedErrorEnable.ccv = false;
      updatedError.ccv = '';
    }

    // Checking expiry
    if (state.expiry.length === 0) {
      isValid = false;
      updatedErrorEnable.expiry = true;
      updatedError.expiry = 'MM/YY is required';
    } else {
      updatedErrorEnable.expiry = false;
      updatedError.expiry = '';
    }

    setErrorEnable(updatedErrorEnable);
    setState({ ...state, error: updatedError });
    return isValid;
  };

  const onPricingChange = (val: Pricing | PricingCards, index: number) => {
    onPricingChanges(val, index);
    setActive(index);
  };

  const handleExpiryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    let formattedValue = inputValue.replace(/[^\d]/g, '');

    if (formattedValue.length > 1) {
      formattedValue =
        formattedValue.slice(0, 2) + '/' + formattedValue.slice(2, 4);
    }

    if (formattedValue.endsWith('/') && !inputValue.endsWith('/')) {
      formattedValue = formattedValue.slice(0, -1);
    }

    if (formattedValue.length > 5) {
      formattedValue = formattedValue.slice(0, 5);
    }

    setState({
      ...state,
      expiry: formattedValue,
    });
  };

  const handleCvcChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputCcvNumber = event.target.value;
    const ccvs = inputCcvNumber.replace(/[^0-9]/g, '').slice(0, 3);
    setState({ ...state, ccv: ccvs });
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      email: event?.target?.value,
    });
  };

  const handlePromoCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      promoCodeNumber: event?.target?.value,
    });
  };

  const onPaymentSelect = () => {
    setPaymentActive({
      ...paymentActive,
      monthly: true,
      yearly: false,
    });
  };

  const onPaymentSelectYear = () => {
    setPaymentActive({
      ...paymentActive,
      monthly: false,
      yearly: true,
    });
  };

  const offerPercentage =
    pricing && 'offerYouSave' in pricing && pricing?.offerYouSave
      ? parseInt(pricing.offerYouSave.match(/\d+/)?.[0] ?? '0')
      : 0;

  const yearlyAmount = parseInt(
    String(pricing?.subcriptionAmountYearly ?? '0').replace('$', ''),
  );

  const offerAmount = (yearlyAmount * offerPercentage) / 100;
  const roundedOfferAmount = Math.ceil(offerAmount);
  const finalAmount = yearlyAmount - roundedOfferAmount;

  const onGetSeletePlan = () => {
    if (validate()) {
      if (pricing) {
        const { email, expiry, cardNumber, ccv, promoCodeNumber } = state;
        const updatedPricing: Pricing = {
          ...pricing,
          subcriptionAmountYearly: String(0),
          offerYouSave: '',
          totalAmount: finalAmount,
        };

        onStartPlan(updatedPricing, {
          email,
          expiry,
          cardNumber,
          ccv,
          promoCodeNumber,
        });
        setState({
          ...state,
          ccv: '',
          email: '',
          expiry: '',
          cardNumber: '',
        });
      }
    }
  };

  const onPromoCode = () => {
    setPromoCode(false);
  };

  useEffect(() => {
    setPaymentActive({
      ...paymentActive,
      monthly: true,
      yearly: false,
    });
  }, []);

  return (
    <Box sx={{ ...pricingcardstyle.rootSx }}>
      {variation1 && (
        <Box
          sx={{
            ...pricingcardstyle.totalPricingBoxSx,
            ...variation1TotalPricingBoxStyle,
          }as SxProps}
        >
          {pricingCardVariationOne &&
            pricingCardVariationOne?.map((val: PricingCards, index: number) => {
              return (
                <Box key={index} sx={{ ...pricingcardstyle.totalBodySx }}>
                  <Card
                    sx={
                      {
                        ...pricingcardstyle.cardSx,
                        boxShadow: cardBoxShadow ? cardBoxShadow : 'none',
                        ...pricingCardOneSx,
                      } as SxProps
                    }
                  >
                    <CardContent sx={{ p: '0px' }}>
                      <Box>
                        <Typography
                          sx={{
                            ...pricingcardstyle.pricingHeadSx,
                            color: commonTextColor
                              ? commonTextColor
                              : '#3B3B3B',
                          }}
                        >
                          {val?.title}
                        </Typography>
                        <Typography sx={{ ...pricingcardstyle.pricingSubSx }}>
                          {val?.description}
                        </Typography>
                      </Box>
                      {val?.pricingList &&
                        val?.pricingList?.map((val, index) => {
                          return (
                            <Box
                              key={index}
                              sx={{
                                ...pricingcardstyle.pricingListSx,
                                ...pricingDetailsListStyle,
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
                    <Box>
                      <Typography
                        sx={{
                          ...pricingcardstyle.pricingDetailSx,
                          color: commonTextColor ? commonTextColor : '#3B3B3B',
                        }}
                      >
                        {val?.currencySymbol}
                        {val?.subcriptionAmountMonthly}
                        {val?.subcriptionAmountMonthly === 'Free' ? (
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
                        <BasicButtons
                          inLineStyles={{ ...pricingcardstyle.getBtnSx }}
                          onClick={() => onGetStartFunc(val)}
                        >
                          {val?.getStartedbtn}
                        </BasicButtons>
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
          <Grid
            container
            spacing={1}
            sx={{ ...pricingcardstyle.variationSx, ...variationPositionStyle }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              sx={{
                ...pricingcardstyle.proSx,
                ...variation2TotalLeftBoxStyle,
                paddingTop: '0px !important',
              }}
            >
              {pricingCardVariationTwo &&
                pricingCardVariationTwo?.map((val, index) => {
                  return (
                    <Box
                      key={index}
                      sx={{
                        ...pricingcardstyle.totalBodySubSx,
                        pb:
                          index === pricingCardVariationTwo?.length - 1
                            ? '0px'
                            : '28px',
                      }}
                    >
                      <Card
                        sx={
                          {
                            ...pricingcardstyle.cardTwoSx,
                            ...pricingCardSx,
                            boxShadow: cardBoxShadow ? cardBoxShadow : 'none',
                            pt: variation2 ? '18px' : '24px',
                            border:
                              active === index
                                ? `2px solid ${activeColor}`
                                : '2px solid #fff',
                          } as SxProps
                        }
                        onClick={() => onPricingChange(val, index)}
                      >
                        {active === index ? (
                          <Box sx={{ ...pricingcardstyle.selectIconSx }}>
                            <IconButton
                              sx={{
                                ...pricingcardstyle.selctbtn,
                                right:'-20px',
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
                              sx={{
                                ...pricingcardstyle.pricingHeadVarSx,
                                color: commonTextColor
                                  ? commonTextColor
                                  : '#3B3B3B',
                              }}
                            >
                              {val?.title}
                            </Typography>
                            <Typography
                              sx={{
                                ...pricingcardstyle.pricingSubVarSx,
                                color: commonTextColor
                                  ? commonTextColor
                                  : '#3B3B3B',
                              }}
                            >
                              {val?.description}
                            </Typography>
                          </Box>
                          <Box>
                            <Typography
                              sx={{ ...pricingcardstyle.pricingDetailSubSx }}
                            >
                              {val?.currencySymbol}
                              {val?.subcriptionAmountMonthly}
                              {val?.subcriptionAmountMonthly === 'Free' ? (
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
                                    ...pricingDetailsListStyle,
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
                                        color: commonTextColor
                                          ? commonTextColor
                                          : '#3B3B3B',
                                      }}
                                    >
                                      {val?.listPoints}
                                    </Typography>
                                  </Box>
                                </Box>
                              );
                            })}
                        </CardContent>
                        <CardActions sx={{ ...pricingcardstyle.basicAction }}>
                          {val?.getStartedbtn && (
                            <BasicButtons
                              inLineStyles={{
                                ...pricingcardstyle.getBtnSx,
                                maxWidth: variation2 ? 'inherit' : '204px',
                                backgroundColor:
                                  active === index
                                    ? `${activeColor}`
                                    : '#E3E1F7',
                                color:
                                  active === index ? '#fff' : `${activeColor}`,
                                ...startPlanBtnStyle,
                              }}
                              onClick={() => onGetStartFunc(val)}
                            >
                              {val?.getStartedbtn}
                            </BasicButtons>
                          )}
                        </CardActions>
                      </Card>
                    </Box>
                  );
                })}
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              sx={{
                ...pricingcardstyle.billpaymentFinalSx,
                ...Variation2RigthBoxStyle,
              }as SxProps}
              padding={'0px!important'}
            >
              <Card
                sx={{
                  ...pricingcardstyle.billAmountSx,
                  ...billAmountStyle,
                  boxShadow: cardBoxShadow ? cardBoxShadow : 'none',
                }as SxProps}
              >
                <CardContent
                  sx={{
                    pt: '75px',
                  }}
                >
                  <Box sx={{ ...pricingcardstyle.totalPaymentSx }}>
                    <Box
                      sx={{
                        ...pricingcardstyle.payCardSx,
                        ...paymentSelectedCardSx,
                        border: paymentActive?.monthly
                          ? `2px solid ${activeColor}`
                          : '2px solid #D3D3D3',
                      }as SxProps}
                      onClick={() => onPaymentSelect()}
                    >
                      <Box sx={{ ...pricingcardstyle.selectIconSx }}>
                        {paymentActive?.monthly ? (
                          <IconButton
                            sx={{
                              ...pricingcardstyle.selctbtn,
                              p: 0,
                              justifyContent: 'end',
                            }}
                          >
                            {VerfiyIcon}
                          </IconButton>
                        ) : (
                          ''
                        )}
                      </Box>
                      <Typography sx={{ ...pricingcardstyle.paySx }}>
                        Pay monthly
                      </Typography>
                      <Box sx={{ ...pricingcardstyle.yearlysx }}>
                        <Typography
                          sx={{
                            ...pricingcardstyle.pricingsubSx,
                            borderBottom: '0px',
                            pb: '0px',
                          }}
                        >
                          {pricing?.currencySymbol}{' '}
                          {pricing?.subcriptionAmountMonthly}/
                          {pricing?.subscriptionDue}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        ...pricingcardstyle.payCardSx,
                        ...paymentSelectedCardSx,
                        border: paymentActive?.yearly
                          ? `2px solid ${activeColor}`
                          : '2px solid #D3D3D3',
                      }as SxProps}
                      onClick={() => onPaymentSelectYear()}
                    >
                      <Box sx={{ ...pricingcardstyle.selectIconSx }}>
                        {paymentActive?.yearly ? (
                          <IconButton
                            sx={{
                              ...pricingcardstyle.selctbtn,
                              p: 0,
                              justifyContent: 'end',
                            }}
                          >
                            {VerfiyIcon}
                          </IconButton>
                        ) : (
                          ''
                        )}
                      </Box>
                      <Typography sx={{ ...pricingcardstyle.paySx }}>
                        Pay yearly
                      </Typography>
                      <Box sx={{ ...pricingcardstyle.yearlysx }}>
                        <Typography
                          sx={{
                            ...pricingcardstyle.pricingsubSx,
                            borderBottom: '0px',
                            pb: '0px',
                          }}
                        >
                          {pricing?.currencySymbol}{' '}
                          {pricing?.subcriptionAmountYearly}/
                          {pricing?.subscriptionDue}
                        </Typography>
                        {pricing?.offerYouSave && 'offerYouSave' in pricing ? (
                          <BasicButtons
                            inLineStyles={pricingcardstyle.saveBgSx}
                          >
                            {pricing.offerYouSave}
                          </BasicButtons>
                        ) : (
                          ''
                        )}
                      </Box>
                    </Box>
                  </Box>
                  {CustomPaymentField ? (
                    CustomPaymentField
                  ) : (
                    <>
                      <Box sx={{ ...pricingcardstyle.billSubSx }}>
                        <Box sx={{ ...pricingcardstyle.billSx }}>
                          <Typography sx={{ ...pricingcardstyle.billTitle }}>
                            {emailHeader}
                          </Typography>
                          <Box sx={{ ...pricingcardstyle.emailInputSx }}>
                            <InputField
                              isErrorRequired={errorEnable?.email}
                              error={
                                state?.error?.email?.length > 0 ? true : false
                              }
                              errorMessage={state?.error?.email}
                              isLabelRequired={false}
                              placeholder="Email address"
                              inputStyle={{
                                ...pricingcardstyle.emailSx,
                                ...emailInputSx,
                              }}
                              value={state?.email}
                              onChange={handleEmailChange}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <EmailIcon
                                      rootStyle={{
                                        ...pricingcardstyle.billIconSx,
                                      }}
                                    />
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </Box>
                        </Box>
                        <Box sx={{ ...pricingcardstyle.billSx }}>
                          <Typography sx={{ ...pricingcardstyle.billTitle }}>
                            {cardNumberTitle}
                          </Typography>
                          <Box sx={{ ...pricingcardstyle.cardPaymentSx }}>
                            <Box>
                              <InputField
                                isErrorRequired={errorEnable?.cardNumber}
                                error={
                                  state?.error?.cardNumber?.length > 0
                                    ? true
                                    : false
                                }
                                errorMessage={state?.error?.cardNumber}
                                isLabelRequired={false}
                                value={state?.cardNumber}
                                placeholder="Card Number"
                                onChange={handleCardNumberChange}
                                inputStyle={{
                                  ...pricingcardstyle.emailSx,
                                }}
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <CardPayment
                                        rootStyle={{
                                          ...pricingcardstyle.billIconSx,
                                        }}
                                      />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                              <Box sx={{ mr: '8px' }}>
                                <InputField
                                  isErrorRequired={errorEnable?.expiry}
                                  error={
                                    state?.error?.expiry?.length > 0
                                      ? true
                                      : false
                                  }
                                  errorMessage={state?.error?.expiry}
                                  isLabelRequired={false}
                                  placeholder="MM/YY"
                                  inputStyle={{
                                    ...pricingcardstyle.emailEbSx,
                                    ...ccvsSx,
                                    maxWidth: '54px',
                                    pr: '54px',
                                  }}
                                  value={state?.expiry}
                                  onChange={handleExpiryChange}
                                />
                              </Box>
                              <Box>
                                <InputField
                                  isErrorRequired={errorEnable?.ccv}
                                  error={
                                    state?.error?.ccv?.length > 0 ? true : false
                                  }
                                  errorMessage={state?.error?.ccv}
                                  isLabelRequired={false}
                                  placeholder="CVC"
                                  value={state?.ccv}
                                  inputStyle={{
                                    ...pricingcardstyle.emailEbSx,
                                    ...ccvsSx,
                                    maxWidth: '32px',
                                  }}
                                  onChange={handleCvcChange}
                                />
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Typography sx={{ ...pricingcardstyle.securedSx }}>
                        Secured from with RBI guidelines
                      </Typography>
                    </>
                  )}
                </CardContent>
                <CardActions sx={{ ...pricingcardstyle?.footerCardSx }}>
                  {paymentFooter ? (
                    paymentFooter
                  ) : (
                    <Box sx={{ ...pricingcardstyle.totalAmountSx }}>
                      <Typography sx={{ ...pricingcardstyle.footerSubBill }}>
                        {billPaymentAmount}:{pricing?.currencySymbol}
                        {paymentActive?.yearly
                          ? finalAmount
                          : pricing?.subcriptionAmountMonthly}
                      </Typography>
                      {promoCode ? (
                        <Box onClick={onPromoCode}>
                          <Typography
                            sx={{ ...pricingcardstyle.footerSubHeadApply }}
                          >
                            {applyPromoCode}
                          </Typography>
                        </Box>
                      ) : (
                        <Box sx={{ pb: '12px' }}>
                          <InputField
                            isErrorRequired={errorEnable?.promoCodeNumber}
                            error={
                              state?.error?.promoCodeNumber?.length > 0
                                ? true
                                : false
                            }
                            errorMessage={state?.error?.promoCodeNumber}
                            isLabelRequired={false}
                            placeholder="Enter Promo Code"
                            inputStyle={{
                              ...pricingcardstyle.promoCode,
                              ...promoCodeSx,
                              '& .MuiOutlinedInput-input': {
                                color: activeColor,
                                p: '0px',
                              },
                            }}
                            value={state?.promoCodeNumber}
                            onChange={handlePromoCode}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    disableRipple
                                    onClick={() => setPromoCode(true)}
                                  >
                                    <CancelOutlinedIcon
                                      sx={{ color: activeColor }}
                                    />
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Box>
                      )}
                      <Typography sx={{ ...pricingcardstyle.footerSubHead }}>
                        {footerSubPara}
                      </Typography>
                      <Box sx={{ ...pricingcardstyle.basicButtomSx }}>
                        <BasicButtons
                          inLineStyles={{
                            ...pricingcardstyle.startPlanBtn,
                            ...startPlanBtnStyle,
                          }}
                          onClick={onGetSeletePlan}
                        >
                          {getStartedPaymentplan}
                        </BasicButtons>
                      </Box>
                    </Box>
                  )}
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
}

PricingCard.defaultProps = {
  footerSubPara:
    'By clicking "Strat Brainwave Enterprise Plan", you agree to be charged $399 every month, unless you cancel.',
  applyPromoCode: 'Apply promo code',
  getStartedPaymentplan: ' Start Brainwave Enterprise plan',
  billPaymentAmount: 'Billed now',
  emailHeader: ' Billing email',
  cardNumberTitle: 'Billing email',
  variationPositionStyle: {},
  Variation2RigthBoxStyle: {},
  paymentSelectedCardSx: {},
  pricingDetailsListStyle: {},
  emailInputSx: {},
  variation2TotalLeftBoxStyle: {},
  cardBoxShadow: '',
  variation1TotalPricingBoxStyle: {},
  billAmountStyle: {},
  ccvsSx: {},
  commonTextColor: '#3B3B3B',
  activeColor: '#665CD7',
  onGetStartPlan: {},
  pricing: {},
  onStartPlan: () => false,
  onPricingChanges: () => false,
  pricingCardVariationTwo: [],
  pricingCard: [],
  VerfiyIcon: <AcceptIcon />,
  promoCodeSx: {},
};
