import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css'; 
import React, { ReactNode, useEffect, useState } from 'react';
import { AcceptIcon } from './assets/accept';
import { CancelIcon } from './assets/cancel';
import { PricingCard } from './components/pricingCard';

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
function App() {
  const [pricing, setPricing] = useState<CombinedPricing | undefined>(undefined);
  const onPricingChanges = (data: Pricing | PricingCards, index: number) => {
    setPricing(data as CombinedPricing);
    console.log(index,'index')
  }

  const onSelectedPlan =(data:Pricing|PricingCards,card:PaymentData)=>{
         console.log(data,'data dtata')
         console.log(card,'cardcardcard')
  }

 const pricingCardVariationOne=[
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
  ]

  const  pricingCardVariationTwo= [
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
   
  ]

  const onGetStartPlan =(data:any)=>{
    console.log(data,'data')
  }
 
  useEffect(()=>{
   setPricing( pricingCardVariationTwo?.[0])
  },[])
return(
 <div style={{width:'100vw',height:'100%'}}>
   <PricingCard  variation1={true}
  pricing={pricing}
  variation2
  onPricingChanges={onPricingChanges}
  pricingCardVariationOne={pricingCardVariationOne}
  pricingCardVariationTwo={pricingCardVariationTwo}
  onStartPlan={onSelectedPlan}
  onGetStartPlan={onGetStartPlan}
  
  />
 </div>
)
}

export default App;
