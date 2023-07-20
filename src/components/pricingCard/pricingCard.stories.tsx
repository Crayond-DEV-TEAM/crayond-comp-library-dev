import React, { ReactNode, useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PricingCard } from './index';
import { AcceptIcon } from '../../assets/accept';
import { CancelIcon } from '../../assets/cancel';

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
    offerYouSave: string | undefined;
    totalAmount: string;
    subscriptionDue: string;
    getStartedbtn: string;
    currencySymbol: string;
  }
 
  interface PricingCards  {
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

  interface PaymentData {
    email: string;
    expiry: string;
    cardNumber: string;
    ccv: string;
  }

interface CombinedPricing extends Pricing, PricingCards {}

export default {
  title: 'components/PricingCard',
  component: PricingCard,
} as ComponentMeta<typeof PricingCard>;

const Template: ComponentStory<typeof PricingCard> = (args) => {
  const [pricing, setPricing] = useState<CombinedPricing | undefined>(undefined);


    const onPricingChanges = (data: Pricing | PricingCards, index: number) => {
      setPricing(data as CombinedPricing);
      console.log(index,'index')
    }
  
    const onSelectedPlan =(data:Pricing|PricingCards,card:PaymentData)=>{
           console.log(data,'data dtata')
           console.log(card,'cardcardcard')
    }
   
    useEffect(()=>{
     setPricing( {
        title: 'Free',
        description: ' More advanced AI.',
        pricingList: [
          {
            icon: <AcceptIcon />,
            isCancel: false,
            listPoints: '30 days history',
          },
          {
            icon: <AcceptIcon />,
            isCancel: false,
            listPoints: 'Up to 1000 message/mo',
          },
          {
            icon: <AcceptIcon />,
            isCancel: false,
            listPoints: 'Limited AI',
          },
        ],
  
        subcriptionAmountMonthly: '0',
        subcriptionAmountYearly: '0',
        offerYouSave:'',
        subscriptionDue: 'month',
        totalAmount:'',
        getStartedbtn: '',
        currencySymbol:'$',
  
      },)
    },[])
    
  return (
    <PricingCard
    {...args}
      variation1={true}
      pricing={pricing}
      onPricingChanges={onPricingChanges}
      onStartPlan={onSelectedPlan}
      
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
    variation1:true,
    variation2: false,
    pricingCardVariationOne: [
        {
          title: 'Free',
          description: 'Scale up at anytime to support your business growth.',
          pricingList: [
            {
              icon: <AcceptIcon/>,
              isCancel: false,
              listPoints: 'Import data from multiple sources.',
            },
            {
                icon: <AcceptIcon/>,  
              isCancel: false,
              listPoints: 'Secure hosted data warehouse & Automatic DataDecoder ETL.',
            },
            {
              icon: <AcceptIcon/>,
              isCancel: false,
              listPoints: 'Export charts and datasets & uploads up to 2 MB each.',
            },
            {
              icon: <CancelIcon/>,
              isCancel: true,
              listPoints: 'Embed charts on 3rd party sites.',
            },
          ],
          subcriptionAmountMonthly: 'Free',
          subscriptionDue: 'month',
          getStartedbtn: 'Get Started',
          currencySymbol:'$'
        },
        {
            title: 'Personal',
            description: 'Scale up at anytime to support your business growth.',
            pricingList: [
              {
                icon: <AcceptIcon/>,
                isCancel: false,
                listPoints: 'Import data from multiple sources.',
              },
              {
                  icon: <AcceptIcon/>,  
                isCancel: false,
                listPoints: 'Secure hosted data warehouse & Automatic DataDecoder ETL.',
              },
              {
                icon: <AcceptIcon/>,
                isCancel: false,
                listPoints: 'Export charts and datasets & uploads up to 2 MB each.',
              },
              {
                icon: <CancelIcon/>,
                isCancel: true,
                listPoints: 'Embed charts on 3rd party sites.',
              },
            ],
            subcriptionAmountMonthly: '15',
            subscriptionDue: 'month',
            getStartedbtn: 'Get Started',
            currencySymbol:'$'
          },
          {
            title: 'Family',
            description: 'Scale up at anytime to support your business growth.',
            pricingList: [
              {
                icon: <AcceptIcon/>,
                isCancel: false,
                listPoints: 'Import data from multiple sources.',
              },
              {
                  icon: <AcceptIcon/>,  
                isCancel: false,
                listPoints: 'Secure hosted data warehouse & Automatic DataDecoder ETL.',
              },
              {
                icon: <AcceptIcon/>,
                isCancel: false,
                listPoints: 'Export charts and datasets & uploads up to 2 MB each.',
              },
              {
                  icon: <CancelIcon/>,
                isCancel: true,
                listPoints: 'Embed charts on 3rd party sites.',
              },
            ],
            subcriptionAmountMonthly: '6',
            subscriptionDue: 'month',
            getStartedbtn: 'Get Started',
            currencySymbol:'$'
          },
      ],
    pricingCardVariationTwo: [
        {
          title: 'Free',
          description: ' More advanced AI.',
          pricingList: [
            {
              icon: <AcceptIcon />,
              isCancel: false,
              listPoints: '30 days history',
            },
            {
              icon: <AcceptIcon />,
              isCancel: false,
              listPoints: 'Up to 1000 message/mo',
            },
            {
              icon: <AcceptIcon />,
              isCancel: false,
              listPoints: 'Limited AI',
            },
          ],
    
          subcriptionAmountMonthly: '0',
          subcriptionAmountYearly: '0',
          offerYouSave:'',
          subscriptionDue: 'month',
          totalAmount:'',
          getStartedbtn: '',
          currencySymbol:'$',
    
        },
        {
          title: 'Pro',
          description: 'More advanced AI',
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
    
          subcriptionAmountMonthly: '399',
          subcriptionAmountYearly: '399',
          subscriptionDue: 'month',
          offerYouSave:'50%',
          totalAmount:'',
          getStartedbtn: 'Get Started',
          currencySymbol:'$'
    
        },
       
      ],
     onStartPlan : (data, cardDetails) => {
       console.log(data, 'data');
    console.log(cardDetails, 'cardDetails!!!');
  },
    onGetStartPlan :(data)=>{
    console.log(data, 'data');
  },
  activeColor:"#665CD7",
  footerSubPara: 'By clicking "Strat Brainwave Enterprise Plan", you agree to be charged $399 every month, unless you cancel.',
  applyPromoCode: 'Apply promo code',
  getStartedPaymentplan: ' Start Brainwave Enterprise plan',
  billPaymentAmount: 'Billed now',
  emailHeader:" Billing email",
  cardNumberTitle:'Billing email',
  variationPositionStyle: {},
  Variation2RigthBoxStyle: {},
  paymentSelectedCardSx: {},
  emailInputSx: {},
  ccvsSx: {},
  commonTextColor : '#3B3B3B',
  
};
