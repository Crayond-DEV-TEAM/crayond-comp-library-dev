import { styles } from './styles';
// import React, { useRef, useState } from "react";
import { Typography } from '@mui/material';
import Joyride from "react-joyride";
import { VariantOne } from './variantOne';
import { CoachMarkProps, Step } from './props';
import { Tooltip } from './tooltipComp';


export default function CoachMarkComponent(props: CoachMarkProps) {

  const {
    renderingComponent,
    tooltipComponent,
    stepsProps,
    styleProps,
    HandleCallBack : handleCall,
    hideCloseButton = false,
    scrollToFirstStep = false,
    spotlightClicks = false,
    showSkipButton = false,
    showProgress = false,
    run= false,
    continuous =  false,
    floaterProps,
    spotlightPadding
  } = props

  const step: Step[] = [
    {
      content: '',
      locale: {
        skip: <Typography sx={styles.skip}>Skip</Typography>,
        next: <strong>Next</strong>
      },
      placement: "bottom",
      target: "#step-1",
      disableBeacon: false,
      title: <Typography sx={styles?.stepTitle}>Tap to `Back` pages</Typography>
    },
    {
      content: '',
      placement: "bottom",
      disableBeacon: true,
      target: "#step-2",
      title: <Typography sx={styles?.stepTitle}> Add `Bookmark` here</Typography>
    },
    {
      content: '',
      placement: "bottom",
      disableBeacon: true,
      target: '#step-10',
      title: <Typography sx={styles?.stepTitle}>`Menus` to navigate!</Typography>
    },
    {
      content: '',
      placement: "bottom",
      disableBeacon: true,
      target: "#step-3",
      title: <Typography sx={styles?.stepTitle}> Here is `Home` menu!</Typography>
    },
    {
      content: '',
      placement: "bottom",
      disableBeacon: true,
      target: "#step-4",
      title: <Typography sx={styles?.stepTitle}> Here is `Clinical` menu!</Typography>
    },
    {
      content: '',
      placement: "bottom",
      disableBeacon: true,
      target: "#step-5",
      title: <Typography sx={styles?.stepTitle}> Here is `MBF`` menu!</Typography>
    },
    {
      content: '',
      placement: "bottom",
      disableBeacon: true,
      target: "#step-6",
      title: <Typography sx={styles?.stepTitle}>  Here is `Masters` menu!</Typography>
    },
    {
      content: '',
      placement: "bottom",
      disableBeacon: true,
      target: "#step-7",
      title: <Typography sx={styles?.stepTitle}>  Here is `Profile` menu!</Typography>
    },
  ]

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      color: "white",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Joyride
        continuous={ continuous ? continuous : true}
        callback={handleCall}
        run={ run ? run : true}
        steps={stepsProps ? stepsProps : step}
        hideCloseButton={hideCloseButton ? hideCloseButton : false}
        scrollToFirstStep={scrollToFirstStep ? scrollToFirstStep : false}
        spotlightClicks={spotlightClicks ? spotlightClicks : false}
        showSkipButton={showSkipButton ? showSkipButton : false}
        showProgress={showProgress ? showProgress : false}
        tooltipComponent={Tooltip}
        spotlightPadding={spotlightPadding ? spotlightPadding : 1}
        floaterProps={{
          ...{
          hideArrow: true
        },
      ...floaterProps}}
        styles={{
          ...{
            buttonSkip: {
              background: 'transparent'
            },
            buttonNext: {
              outline: 'none'
            },
            buttonBack: {
              background: '#E9E9E9',
              borderRadius: '4px',
              color: '#666666',
              marginRight: '8px'
            },
            tooltipContainer: {
              lineHeight: 'inherit'
            },
            tooltipContent: {
              padding: '0 !important'
            },
            tooltip: {
              // width:'30px'
            },
            tooltipFooter: {
              // background:'red',
            },
            options: {
              arrowColor: '#ffffff',
              backgroundColor: '#ffffff',
              // overlayColor: 'rgba(79, 26, 0, 0.4)',
              primaryColor: '#665CD7',
              // textColor: '#004a14',
              // width: 900,
              // zIndex: 1000,

            }
          },
          ...styleProps
        }}
        
      />
      {
        renderingComponent ? renderingComponent : <VariantOne />
      }
    </div>
  );
}

CoachMarkComponent.defaultProps = {

};
