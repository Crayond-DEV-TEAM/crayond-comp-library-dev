/* eslint-disable react/prop-types */
import {Box,Card,CardContent,CardActions,Typography} from '@mui/material';
import { pricingcardstyle } from './style';
  export function PricingCard(props: any) {
    const {} = props;

// const pricingCard=[
// {

// }
// ]

    return (
      <Box sx={{...pricingcardstyle.rootSx }}>
         <Box sx={{...pricingcardstyle.totalPricingBoxSx}}>
                {/* {
                  pricingCard && pricingCard?.map((val,index)=>{
                    return( */}
                      <Box >
                           <Card sx={{...pricingcardstyle.cardSx}}>
                             <CardContent>
                              <Box>
                                 <Typography sx={{...pricingcardstyle.pricingHeadSx}}>
                                   Free Trial
                                  </Typography>
                                  <Typography sx={{...pricingcardstyle.pricingSubSx}}>
                                  Scale up at anytime to support your business growth.
                                  </Typography>
                              </Box>

                              <Box sx={{...pricingcardstyle.pricingListSx}}>

                              </Box>
                               
                             </CardContent>
                             <CardActions>

                             </CardActions>
                           </Card>
                      </Box>
                    {/* )
                  })
                } */}
         </Box>
      </Box>
    );
  }
  
  PricingCard.defaultProps = {
  
  };
  