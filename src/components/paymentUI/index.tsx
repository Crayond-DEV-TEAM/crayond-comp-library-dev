import { Box, Grid, InputAdornment, SxProps, Typography } from '@mui/material';
import { useState } from 'react';
import RuPayIcon from '../../assets/Rupay-Logo.png';
import MasterCardIcon from '../../assets/masterCard.png';
import VisaCardIcon from '../../assets/visa.png';
import { BasicButtons } from '../button';
import { DateAndTimePicker } from '../dateAndTimePicker';
import { Dropdown } from '../dropdown';
import { InputField } from '../inputField';
import { Item, PaymentUIProps } from './props';
import { styles } from './style';

export function PaymentUI(props: PaymentUIProps) {
  const {
    title,
    description,
    section,
    gridContainerProps,
    titleStyle,
    descStyle,
    subTitleStyle,
    rootStyle,
    buttons = [],
    buttonContainerStyle,
  } = props;

  const [sectionValue, setSection] = useState(section);
  const [cardType, setCardType] = useState('Unknown');

  const handleInputChange = (e: any, item: Item) => {
    const inputType = e.target ? e.target.value : e;
    const maxLength = item.maxNumber;
    let slicedValue = '';
    if (typeof inputType !== 'string') {
      slicedValue = e;
    } else {
      const newValue = e.target.value;
      slicedValue = maxLength ? newValue.slice(0, Number(maxLength)) : newValue;
    }

    const updatedItem = { ...item, value: slicedValue, error: false };

    if (item.inputDet === 'cardNumber') {
      if (slicedValue.length !== 16) {
        updatedItem.error = true;
        updatedItem.errorMessage = 'Please enter valid card number';
      } else {
        updatedItem.error = false;
        updatedItem.errorMessage = '';
      }
      setCardType(getCardType(slicedValue));
    }

    if (item.inputDet === 'cvv') {
      if (slicedValue.length !== 3) {
        updatedItem.error = true;
        updatedItem.errorMessage = 'please Enter valid CVV';
      } else {
        updatedItem.error = false;
        updatedItem.errorMessage = '';
      }
    }

    const updatedSection = sectionValue.map((sec) =>
      sec.items.includes(item)
        ? {
            ...sec,
            items: sec.items.map((i) => (i === item ? updatedItem : i)),
          }
        : sec
    );
    setSection(updatedSection);
  };

  const getCardImage = (cardType: string) => {
    switch (cardType) {
      case 'Visa':
        return VisaCardIcon;
      case 'MasterCard':
        return MasterCardIcon;
      case 'RuPay':
        return RuPayIcon;
      default:
        return undefined;
    }
  };

  const getInputField = (item: any) => {
    if (item.inputType === 'input') {
      const cardImage = getCardImage(cardType);
      return (
        <InputField
          label={item.label}
          value={item.value}
          onChange={(e) => handleInputChange(e, item)}
          error={item.error}
          inputProps={{ max: item.maxNumber }}
          errorMessage={item.errorMessage}
          type={item.type}
          fullWidth={item.fullWidth}
          InputProps={{
            endAdornment: (
              <>
                {item.cardImage && cardImage && (
                  <InputAdornment position="end">
                    <img
                      src={cardImage}
                      alt="Card Type"
                      style={{ width: '41px', height: '24px' }}
                    />
                  </InputAdornment>
                )}
              </>
            ),
          }}
          required={item.required}
          inputStyle={{ ...item.inputStyle, ...styles.inputStyle }}
        />
      );
    } else if (item.inputType === 'dropdown') {
      return (
        <Dropdown
          label={item.label}
          labelStyle={item.labelStyle}
          inputStyle={{ ...item.inputStyle, ...styles.dropdownStyle }}
          selectOption={item.selectOption}
          onChange={(e) => handleInputChange(e, item)}
          value={item.value}
          error={item.error}
          placeholder={item.placeholder}
          errorMessage={item.errorMessage}
          required={item.required}
        />
      );
    } else if (item.inputType === 'date') {
      return (
        <DateAndTimePicker
          views={['year', 'month']}
          openTo="month"
          label={item.label}
          labelStyle={item.labelStyle}
          inputStyle={item.inputStyle}
          onChange={(e: { target: { value: any } }) =>
            handleInputChange(e, item)
          }
          type={item.dateType}
          value={item.value}
          error={item.error}
          errorMessage={item.errorMessage}
          required={item.required}
          format={item.dateFormat}
        />
      );
    }
    return null;
  };

  const getUpdateCardDetails = (item: any) => {
    const updatedSection = sectionValue.map((sec) => ({
      ...sec,
      items: sec.items.map((i) =>
        i.value === '' && i.required
          ? { ...i, error: true }
          : { ...i, error: false }
      ),
    }));
    setSection(updatedSection);

    const hasEmptyValue = updatedSection.some((sec) =>
      sec.items.some((i) => i.required && i.value === '')
    );
    if (!hasEmptyValue) {
      item.onClick(updatedSection);
    }
  };

  const getCardType = (cardNumber: any) => {
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const mastercardRegex = /^(?:5[1-5][0-9]{14})$/;
    const rupayRegex = /^(?:6[0-9]{15})$/;

    if (visaRegex.test(cardNumber)) {
      return 'Visa';
    } else if (mastercardRegex.test(cardNumber)) {
      return 'MasterCard';
    } else if (rupayRegex.test(cardNumber)) {
      return 'RuPay';
    } else {
      return 'Unknown';
    }
  };

  return (
    <Box sx={{ p: 4, ...rootStyle }}>
      <Typography sx={{ ...styles.titleSx, ...titleStyle } as SxProps}>
        {title}
      </Typography>
      <Typography sx={{ ...styles.descSx, ...descStyle } as SxProps}>
        {description}
      </Typography>

      {sectionValue.map((sec, index) => (
        <Box key={index}>
          <Typography
            sx={{ ...styles.subTitleSx, ...subTitleStyle } as SxProps}
          >
            {sec.subTitle}
          </Typography>
          <Box>
            <Grid container spacing={1} {...gridContainerProps}>
              {sec.items.map((item: Item, itemIndex: number) => (
                <Grid item key={itemIndex} {...item.breakpoints}>
                  {getInputField(item)}
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      ))}

      <Grid
        container
        spacing={1}
        {...gridContainerProps}
        sx={{ mt: 2, ...buttonContainerStyle }}
      >
        {buttons.map((item) => (
          <Grid item key={item.buttonText} {...item.breakpoints}>
            <BasicButtons
              onClick={() => getUpdateCardDetails(item)}
              inLineStyles={item.styles}
            >
              {item.buttonText}
            </BasicButtons>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
PaymentUI.defaultProps = {
  title: 'Payment',
  description: 'Please provide the following details:',
  section: [
    {
      subTitle: 'Card Details',
      items: [
        {
          breakpoints: {
            sm: 8,
            md: 8,
            lg: 8,
            xs: 6,
          },
          label: 'Credit /debit card Number',
          fullWidth: true,
          inputType: 'input',
          required: true,
        },
        {
          breakpoints: {
            sm: 4,
            md: 4,
            lg: 4,
            xs: 6,
          },
          label: 'Account holder Name',
          fullWidth: true,
          inputType: 'input',
        },
        {
          breakpoints: {
            sm: 4,
            md: 5,
            lg: 4,
            xs: 6,
          },
          label: 'Month / Year',
          fullWidth: true,
          inputType: 'date',
        },
        {
          breakpoints: {
            sm: 4,
            md: 3,
            lg: 4,
            xs: 6,
          },
          label: 'Cvv',
          fullWidth: true,
          inputType: 'input',
        },
      ],
    },
    {
      subTitle: 'Billing Details',
      items: [
        {
          breakpoints: {
            sm: 6,
            md: 6,
            lg: 6,
            xs: 6,
          },
          label: 'First Name',
          inputType: 'input',
          value: '',
          fullWidth: true,
          errorMessage: 'Please enter First Name',
        },
        {
          breakpoints: {
            sm: 6,
            md: 6,
            lg: 6,
            xs: 6,
          },
          label: 'Last Name',
          inputType: 'input',
          value: '',
          fullWidth: true,
          errorMessage: 'Please enter Last Name',
        },
        {
          breakpoints: {
            sm: 6,
            md: 6,
            lg: 6,
            xs: 6,
          },
          label: 'Address Line 1',
          inputType: 'input',
          value: '',
          fullWidth: true,
          errorMessage: 'Please enter Address',
        },
        {
          breakpoints: {
            sm: 6,
            md: 6,
            lg: 6,
            xs: 6,
          },
          label: 'Address Line 2',
          inputType: 'input',
          value: '',
          fullWidth: true,
          errorMessage: 'Please enter Address',
        },
        {
          breakpoints: {
            sm: 6,
            md: 6,
            lg: 6,
            xs: 6,
          },
          label: 'City',
          inputType: 'dropdown',
          fullWidth: true,
          selectOption: [{ label: 'chennai', value: 'chennai' }],
          value: '',
          errorMessage: 'Please select a value',
        },
        {
          breakpoints: {
            sm: 6,
            md: 6,
            lg: 6,
            xs: 6,
          },
          label: 'Zip code/ Postal code',
          fullWidth: true,
          type: 'number',
          value: '',
          inputType: 'input',
          errorMessage: 'Please enter Zip code/ Postal code',
        },
        {
          breakpoints: {
            sm: 6,
            md: 6,
            lg: 6,
            xs: 6,
          },
          label: 'State',
          inputType: 'dropdown',
          fullWidth: true,
          value: '',
          selectOption: [{ label: 'New York', value: 'New York' }],
          errorMessage: 'Please select a value',
        },
        {
          breakpoints: {
            sm: 6,
            md: 6,
            lg: 6,
            xs: 6,
          },
          label: 'Country',
          inputType: 'dropdown',
          fullWidth: true,
          value: '',
          selectOption: [
            { label: 'US', value: 'US' },
            { label: 'IN', value: 'US' },
          ],
          errorMessage: 'Please select a value',
        },
      ],
    },
  ],
  gridContainerProps: {},
  titleStyle: {},
  descStyle: {},
  subTitleStyle: {},
  rootStyle: {},
  buttons: [],
  buttonContainerStyle: {},
};
