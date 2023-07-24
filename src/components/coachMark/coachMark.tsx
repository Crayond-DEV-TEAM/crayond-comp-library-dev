import { styles } from './styles';
import React, { useRef, useState } from "react";
import Box from '@mui/material/Box';
import { CoachMark, ICoachProps } from "react-coach-mark";
import { Stack , Typography} from '@mui/material';

export default function CoachMarkComponent(props: any) {

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const [rerender, setRerender] = React.useState<number>(0);
  const [activatedNumber, setActivateNumber] = useState<number>(0);
  const NextButton = <button onClick={() => setActivateNumber(activatedNumber + 1)}>Next</button>;

  React.useEffect(() => { /* needed so that ref gets updates value to be passed as prop */
      setRerender(rerender + 1);
  }, [ref1.current])

  const coachList : Array<ICoachProps> =  [
      {
          activate: activatedNumber === 0,
          component: <div>I can do this {NextButton} </div>,
          reference: ref1,
          tooltip: { position: 'bottom' }
      },
      {
          activate: activatedNumber === 1,
          component: <div>I can be long. {NextButton}</div>,
          reference: ref2,
          tooltip: { position: 'bottom' }
      },
      {
          activate: activatedNumber === 2,
          component: <div>ok big one. {NextButton}</div>,
          reference: ref3,
          tooltip: { position: 'top' }
      },
      {
          activate: activatedNumber === 3,
          component: <div>fill this. {NextButton}</div>,
          reference: ref4,
          tooltip: { position: 'left' }
      },
      {
          activate: activatedNumber === 4,
          component: <div>Submit here. {NextButton}</div>,
          reference: ref5,
          tooltip: { position: 'right' }
      }
  ]
  const coach = coachList[activatedNumber]

  return (
    <>

    <Stack direction={'row'} alignItems={'center'}>
      <Box sx={{
      }}>
        <h2 ref={ref1}>1st Button</h2>
        <h2 ref={ref2}>2nd Button</h2>

        <h2 ref={ref3}>3rd Button</h2>

        <h2 ref={ref4}>4th Button</h2>

        <h2 ref={ref5}>5th Button</h2>

      </Box>
    </Stack>
    
    <CoachMark {...coach} />
</>
  );
}

CoachMarkComponent.defaultProps = {};
