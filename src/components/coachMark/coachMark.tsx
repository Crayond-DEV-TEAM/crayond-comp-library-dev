import { styles } from './styles';
import React, { useRef, useState } from "react";
import Box from '@mui/material/Box';
import { Stack , Typography } from '@mui/material';
import Joyride, { STATUS } from "react-joyride";
import { VariantOne } from './variantOne';

export default function CoachMarkComponent(props: any) {

  const [{ run, steps }, setState] = useState({
    run: true,
    steps: [
      {
        content: <h2>Tap to "Back" pages</h2>,
        // locale: { skip: <strong>SKIP</strong> },
        placement: "bottom",
        target: "#step-1",
        disableBeacon: false,
        // title: "First step"
      },
      {
        content: <h2>Add "Bookmark" here</h2>,
        placement: "bottom",
        disableBeacon: true,
        target: "#step-2",
        // title: "Second step"
      },
      {
        content: <h2>"Menus" to navigate</h2>,
        placement: "bottom",
        target: "body",
        disableBeacon: true,
        // title: "Second step"
      },
      {
        content: <h2>Here is 'Home' menu!</h2>,
        placement: "bottom",
        disableBeacon: true,
        target: "#step-3",
      },
      {
        content: <h2>Here is 'Clinical' menu!</h2>,
        placement: "bottom",
        disableBeacon: true,
        target: "#step-4",
      },
      {
        content: <h2>Here is 'MBF' menu!</h2>,
        placement: "bottom",
        disableBeacon: true,
        target: "#step-5",
      },
      {
        content: <h2>Here is 'Masters' menu!</h2>,
        placement: "bottom",
        disableBeacon: true,
        target: "#step-6",
      },
      {
        content: <h2>Here is 'Profile' menu!</h2>,
        placement: "bottom",
        disableBeacon: true,
        target: "#step-7",
      },
    ]
  });
  return (
    <div style={{
      // background: "#797979",
      height: "100vh",
      display: "flex",
      color: "white",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Joyride
        continuous
        callback={() => {}}
        run={run}
        steps={steps}
        hideCloseButton
        scrollToFirstStep
        spotlightClicks={false}
        showSkipButton
        showProgress
        spotlightPadding={1}
        styles={{
          tooltipContainer:{
            lineHeight:'inherit'
          },
          tooltipContent:{
            padding:'0 !important'
          },
          tooltip:{
            // width:'30px'
          },

          options: {
            arrowColor: '#e3ffeb',
            // backgroundColor: '#e3ffeb',
            // overlayColor: 'rgba(79, 26, 0, 0.4)',
            // primaryColor: '#000',
            textColor: '#004a14',
            // width: 900,
            // zIndex: 1000,
            
          }
        }}
        // floaterProps={{
        //   styles:{
        //     options: {
        //       arrowColor: '#e3ffeb',
        //       backgroundColor: '#e3ffeb',
        //       overlayColor: 'rgba(79, 26, 0, 0.4)',
        //       primaryColor: '#000',
        //       textColor: '#004a14',
        //       width: 900,
        //       zIndex: 1000,
        //     }
        //   }
        // }}
      
      />
     <VariantOne />
    </div>
  );
}

CoachMarkComponent.defaultProps = {};
