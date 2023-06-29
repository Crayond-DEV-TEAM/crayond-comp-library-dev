import { SxProps } from '@mui/material';

export interface NestedHeaderProps {
  headingStyle: SxProps;
  subTitleStyle: SxProps;
  hoverHeading: SxProps;
  hoverHeadingStyles: SxProps;
  nestedTitleIconAlign: 'left' | 'right';
  nestedSubTitleIconAlign:'start'|'end'|'center'
  nestedTitleTextAlign: 'flex-start' | 'flex-end' | 'center';
  nestedChild: {
    subValue: string;
    icon: React.ReactNode;
    iconDirection: 'right' | 'left';
    styles: SxProps;
    onClick: () => void;
    link: string;
    nested?: {
      heading?: {
        id: number;
        title: string;
        styles: SxProps;
        onClick: () => void;
      };
      subTitle: {
        subValue: string;
        icon: React.ReactNode;
        iconDirection: 'right' | 'left';
        styles: SxProps;
        onClick: () => void;
        link: string;
      }[];
    };
  };
}
export interface FooterProps {
  headingTitleColor: string;
  headingTitleSize: number;
  headingStyle: SxProps;

  nestedTitleIconAlign: 'left' | 'right';
  nestedSubTitleIconAlign:'start'|'end'|'center'
  nestedTitleTextAlign: 'flex-start' | 'flex-end' | 'center';

  headingTextAlign: 'flex-start' | 'flex-end' | 'center';
  headingIconAlign: 'left' | 'right';

  subTitleTextAlign: 'flex-start' | 'flex-end' | 'center';
  subTitleIconAlign: 'left' | 'right';

  nestedHoverHeadingStyles: SxProps;
  nestedHoverHeadingStyle: SxProps;
  subTitleSize: number;
  subTitleColor: string;
  subTitleStyle: SxProps;
  rootStyles: SxProps;

  companyNameFontColor: string;
  companyNameFontSize: number;
  companyNameStyles: SxProps;
  componentRootStyle: SxProps;
  companyLogoBlockStyle: SxProps;

  bottomTextColor: string;
  bottomFontSize: number;
  logoContainerStyle: SxProps;
  subscriptionBlockStyle: SxProps;
  bottomTextBlockStyle: SxProps;
  bottomTexStyle: SxProps;

  bottomPolicyTextColor: string;
  bottomPolicyFontSize: number;
  reservedYearStyles: SxProps;
  hoverHeadingStyles: SxProps;
  nestedChild: {
    subValue: string;
    icon: React.ReactNode;
    iconDirection: 'right' | 'left';
    styles: SxProps;
    onClick: () => void;
    link: string;
    nested?: {
      heading?: {
        id: number;
        title: string;
        styles: SxProps;
        onClick: () => void;
      };
      subTitle: {
        subValue: string;
        icon: React.ReactNode;
        iconDirection: 'right' | 'left';
        styles: SxProps;
        onClick: () => void;
        link: string;
      }[];
    };
  };
  footerData: {
    order: number;
    heading: {
      id: number;
      title: string;
      icon: React.ReactNode;
      iconDirection: 'right' | 'left';
      styles: SxProps;
      onClick: () => void;
    };
    component: React.ReactNode;

    subTitle?: {
      subValue: string;
      icon: React.ReactNode;
      iconDirection: 'right' | 'left';
      styles: SxProps;
      onClick: () => void;
      link: string;
      nested?: {
        heading?: {
          id: number;
          title: string;
          styles: SxProps;
          onClick: () => void;
        };
        subTitle: {
          subValue: string;
          icon: React.ReactNode;
          iconDirection: 'right' | 'left';
          styles: SxProps;
          onClick: () => void;
          link: string;
        }[];
      };
    }[];
  }[];

  footerLogo: [
    {
      companyLogo: {
        label: string;
        logo: React.ReactNode;
      };
      subscribes: {
        icon: React.ReactNode;
      }[];
      termsOfPolicy: {
        label: string;
      }[];
      copyRight: { label: string }[];
    }
  ];
}
