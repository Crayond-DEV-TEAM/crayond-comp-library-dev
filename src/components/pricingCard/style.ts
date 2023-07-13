export const pricingcardstyle = {
rootSx:{

},
totalPricingBoxSx:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor:'#F5F5F5',
    
    // alignItems: 'center',
},
totalBodySx:{
    flex: '0 0 1',
    display: 'flex',
    pr:'28px',
    pb:'28px',
    '@media (max-width: 887px)': {
    pr:'0px',
      
     }

},

cardSx:{
    flex:1,
    backgroundColor:'#fff',
    borderRadius:'8px',
    border:'0px',
    width:'100%',
    maxWidth:'368px',
    pt:'34px',pb:'24px',
    px:'24px',
    position:'relative',
    display: 'flex',
    flexDirection: 'column',
    boxShadow:' 0px 0px 6px 2px #d5d5d5c2',
    // height: '445px',
    justifyContent: 'space-between',
   
},
pricingHeadSx:{
    fontSize:'24px',
    color:'#000',
    textAlign:'center',
    fontWeight:'600',
    pb:'30px',
},
pricingDetailSx:{
    fontSize:'36px',
    color:'#000',
    textAlign:'center',
    fontWeight:'600',
    pb:'30px',
    pt: '27px',
},
pricingDetailSubSx:{
    fontSize:'36px',
    color:'#000',
    fontWeight:'600',
    pt: '24px',
    pb: '20px',
    borderBottom:'1px solid #E9E9E9'
},
pricingSubSx:{
    fontSize:'18px',
    color:'#3B3B3B',
    textAlign:'center',
    fontWeight:'400',
    lineHeight: '24px',
},
pricingListSx:{
    pt:'20px'
    
}
,pricingListRow:{
    fontSize:'14px',
    color:'#666666',
    pl:'12px'
},
totalList:{
    display:'flex',
    alignItems:'center',
},
getBtnSx:{
    backgroundColor:'#665CD7',
     width:'100%',
     maxWidth:'204px',
     margin:'0px auto',
     height:'48px',
     color:'#fff',
     borderRadius:'8px',
     boxShadow:'none',
     "&:hover":{
     backgroundColor:'#665CD7',
     color:'#fff',
     }
},
subscriptionDueSx:{
    fontSize:'16px',
    fontWeight:'600',
    color:'#777777',
},

// variation 2 style starts ----
totalPricingBoxvarSx:{
    backgroundColor:'#F5F5F5',
    px:'16px',
    py:'80px',
},
pricingHeadVarSx:{
    fontSize:'24px',
    color:'#665CD7',
    textAlign:'start',
    fontWeight:'600',
    pb:'18px',
    pt:'22px'
},

pricingSubVarSx:{
    fontSize:'18px',
    color:'#3B3B3B',
    fontWeight:'600',
    lineHeight: '24px',
},
pricingsubSx:{
    fontSize:'24px',
    color:'#001C3C',
    textAlign:'start',
    fontWeight:'600',
    pb:'18px',
    borderBottom:'1px solid #E9E9E9'
},
pricingListSubRow:{
    fontSize:'14px',
    color:'#666666',
},
pricingListSubSx:{
    pt:'18px'
},
selectIconSx:{
position:"relative"
},
selctbtn:{
    position:'absolute',
    right:'0px'
},
cardVarSx:{

},
totalBodySubSx: {
    flex: '0 0 1',
    pr: '28px',
    pb: '28px',
    '@media (max-width: 900px)': {
        pr: '0',
       }
  },
cardTwoSx:{
    flex:1,
    backgroundColor:'#fff',
    borderRadius:'8px',
    p:'36px',
    position:'relative',
    border:'1px solid',
    cursor:'pointer',
    boxShadow:'none',
  
},
paySx:{
    fontSize:'18px',
    color:'#666666',
    fontWeight:'600',
},
payCardSx:{
    p:'16px',
    position:'relative',
    borderRadius:'12px',
   width: '100%',maxWidth: '330px', mr: '32px',
    '&:last-child':{
          mr:'0px'
    },
    '@media (max-width: 1097px)': {
       margin:'16px auto',
       '&:last-child':{
        mr:'auto'
      },
      width: 'inherit',maxWidth: 'inherit',
    }
},
saveBgSx:{
    backgroundColor:'#0AAB14',
    width:'100%',
    maxWidth:'102px',
    borderRadius:'8px',
    fontSize:'12px',
},
yearlysx:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    pt: '24px',
    fontSize:'14px',
    '@media (max-width: 429px)': {
      display:'block'
     }
},
billSx:{
    borderBottom:'1px solid #D3D3D3',
    p:'24px',

},
billSubSx:{
    border:'1px solid #D3D3D3',
    borderRadius:'8px'
},
billpaymentSx:{
    width:'100%',
    maxWidth:'773px',
},
proSx:{
    width:'100%',
    maxWidth:'386px !important',
    '@media (max-width: 900px)': {
        maxWidth:'inherit !important'
       },
},
billAmountSx:{
    px:'36px',
    borderRadius:'12px',
    display: 'flex',
    flexDirection:' column',
    justifyContent: 'space-between',
    height:'100%',
    backgroundColor:'#fff',
    maxWidth:'773px !important',
    boxShadow: 'none'
},
billTitle:{
    color:'#3B3B3B',
    fontSize:'14px',
    fontWeight:'600'
},
emailSx:{
    width:'100%',
    '& .MuiOutlinedInput-input': {
        width: '100%',
        fontWeight: '600 !important',
        p:'0px',
        fontSize:'14px',
        // '& .MuiTextField-root': {
        //   mt: 1,
        // },
      },
      '& .Mui-focused.MuiOutlinedInput-notchedOutline':{
        borderColor: '#E9E9E9 !important',
      },
      '& .MuiOutlinedInput-root': {
        p:'0px',
        '& fieldset': {
          borderRadius: '4px',
          border: '0px',
          borderColor: '#E9E9E9 ',
         
         
        },
        '&:hover fieldset': {
          borderColor: 'primary.main',
        },
        '& .Mui-focused fieldset': {
          borderColor: 'primary.main',
        },
      },
},
billIconSx:{
    width:'19px',
    height:'15.29px'
},
cardPaymentSx:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    pt:'22px'
},
emailEbSx:{
    '& .MuiOutlinedInput-input': {
        width: '100%',
        fontWeight: '600 !important',
        padding:"0px",
        fontSize:'14px',
        // '& .MuiTextField-root': {
        //   mt: 1,
        // },
      },
      '& .Mui-focused.MuiOutlinedInput-notchedOutline':{
        borderColor: '#E9E9E9 !important',
      },
      '& .MuiOutlinedInput-root': {
        p:'0px',
        '& fieldset': {
          borderRadius: '4px',
          border: '0px',
          borderColor: '#E9E9E9 ',
         
         
        },
        '&:hover fieldset': {
          borderColor: 'primary.main',
        },
        '& .Mui-focused fieldset': {
          borderColor: 'primary.main',
        },
      },
},
promoCode:{
    maxWidth: '218px',
    '& .MuiOutlinedInput-input': {
        width: '100%',
        fontWeight: '600 !important',
        padding:"0px",
        fontSize:'14px',
        color:'#665CD7',
        // '& .MuiTextField-root': {
        //   mt: 1,
        // },
      },
      '& .Mui-focused.MuiOutlinedInput-notchedOutline':{
        borderColor: '#E9E9E9 !important',
      },
      '& .MuiOutlinedInput-root': {
        p:'0px',
        '& fieldset': {
          borderRadius: '4px',
          border: '0px',
          borderColor: '#E9E9E9 ',
         
         
        },
        '&:hover fieldset': {
          borderColor: 'primary.main',
        },
        '& .Mui-focused fieldset': {
          borderColor: 'primary.main',
        },
      },
},
emailInputSx:{
    pt:'22px'
},
securedSx:{
    pt:'16px',
    color:'#BDBDBD',
    fontSize:'14px',
},
startPlanBtn:{
    backgroundCOlor:'#665CD7',
    color:'#fff',
    width:'100%',
    borderRadius:'8px',
    height:'48px'

},
footerCardSx:{
//    position:'absolute',
   justifyContent:"end",
//    bottom: '26px',
//     right: '42px',
    pb:'22px',

},
footerSubHead:{
    fontSize:'14px',
    textAlign:'end',
    color:'#929292',
    pb:'32px'
},
mainFooterSx:{
    display:'block',
    justifyContent:'end'
},
footerSubBill:{
    fontSize:'24px',
    fontWeight:'600',
    pb:'12px',
},
footerSubHeadApply:{
    fontSize:'16px',
    color:'#776DEF',
    textDecoration:'underline',
    pb:'12px',
    cursor:'pointer'
},
billpaymentFinalSx:{
    
    position:'relative',
    '@media (max-width: 899px)': {
       height:'990px',
       maxWidth:'inherit !important',
       marginTop:'20px'
      },
      
    },
    totalPaymentSx:{
        display: 'flex',
        pb: '32px',
        cursor:'pointer',
        '@media (max-width: 1097px)': {
          display:'block',
           
           },
    },
    variationSx:{
        p: '18px 0px !important', justifyContent: 'start'
    },
    basicAction:{
        justifyContent: 'center',pt: '24px !important',p: 0, 

    },
    basicButtomSx:{
        width: '100%',   maxWidth: '326px',  margin: '0px 0px 0px auto', 
    },
    totalAmountSx:{
        width: '100%', maxWidth: '434px', textAlign: 'end' 
    }

};