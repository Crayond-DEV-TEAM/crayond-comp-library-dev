import { Props as FloaterType } from 'react-floater';

type valueof<T> = T[keyof T];

type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';

export interface Step {
  content: React.ReactNode;
  disableBeacon?: boolean;
  locale?: {
    skip: React.ReactNode;
    next: React.ReactNode;
  };
  event?: string;
  floaterProps?: FloaterType;
  hideFooter?: boolean;
  isFixed?: boolean;
  offset?: number;
  placement?: Placement;
  placementBeacon?: Placement;
  target: string | HTMLElement;
  title?: React.ReactNode;
}

export interface status {
    IDLE: 'idle';
    READY: 'ready';
    WAITING: 'waiting';
    RUNNING: 'running';
    PAUSED: 'paused';
    SKIPPED: 'skipped';
    FINISHED: 'finished';
    ERROR: 'error';
  }

export interface CallBackProps {
    action: string;
    controlled: boolean;
    index: number;
    lifecycle: string;
    size: number;
    status: valueof<status>;
    step: Step;
    type: string;
  }

export interface StylesProps {
    beacon?: React.CSSProperties;
    beaconInner?: React.CSSProperties;
    beaconOuter?: React.CSSProperties;
    buttonBack?: React.CSSProperties;
    buttonClose?: React.CSSProperties;
    buttonNext?: React.CSSProperties;
    buttonSkip?: React.CSSProperties;
    options?: {
      arrowColor?: string;
      backgroundColor?: string;
      beaconSize?: number;
      overlayColor?: string;
      primaryColor?: string;
      spotlightShadow?: string;
      textColor?: string;
      width?: string | number;
      zIndex?: number;
    };
    overlay?: React.CSSProperties;
    overlayLegacy?: React.CSSProperties;
    overlayLegacyCenter?: React.CSSProperties;
    spotlight?: React.CSSProperties;
    spotlightLegacy?: React.CSSProperties;
    tooltip?: React.CSSProperties;
    tooltipContainer?: React.CSSProperties;
    tooltipContent?: React.CSSProperties;
    tooltipFooter?: React.CSSProperties;
    tooltipFooterSpacer?: React.CSSProperties;
    tooltipTitle?: React.CSSProperties;
  }

export interface CoachMarkProps {
    floaterProps?: FloaterType;
    renderingComponent?: any;
    tooltipComponent?: any;
    stepsProps?: Step[];
    styleProps?:StylesProps;
    continuous?: boolean;
    run?: boolean;
    hideCloseButton?: boolean;
    scrollToFirstStep?: boolean;
    spotlightClicks?: boolean;
    showSkipButton?: boolean;
    showProgress?: boolean;
    spotlightPadding?: number;
    HandleCallBack?: (data: CallBackProps) => void 
}

export type FloaterProps = FloaterType;
