import { getExampleNumber } from 'libphonenumber-js';
import examples from 'libphonenumber-js/examples.mobile.json';
import { Sample } from './constants';

export const changeMobileLimitBasedOnCC = (
  countryDialCode: any,
  isReturnValueNeeded: boolean,
  emoji: any
) => {
  // const selectedCountry = Sample?.filter((cc) => cc.dial_code === countryDialCode);
  // const ISO2Code = selectedCountry?.[0]?.code;
  // const phoneNumber = getExampleNumber(ISO2Code, examples);
  // const limit = phoneNumber?.nationalNumber?.length ?? 10;
  // if (isReturnValueNeeded) {
  //   return limit;
  // }
  return 10;
};
export function getMobileLimitBasedOnCC(selectedCountryValue: any) {
  // const mobileNumberLimitBasedOnCC = changeMobileLimitBasedOnCC(
  //   selectedCountryValue,
  //   true
  // );
  return 10;
}
