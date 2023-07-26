

    import { SvgIcon } from '@mui/material';
    export function ArrowUpIcon(props:any) {
        const { rootStyle, ...rest } = props;
      
        const rootSx = {
          width: 24,
          height: 24,
          ...rootStyle,
        };
        return (
           <SvgIcon  data-name="Group 114860" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
           {...rest}
           sx={rootSx}>
           <rect id="Rectangle_43748" data-name="Rectangle 43748" width="24" height="24" fill="none"/>
           <g id="Group_90920" data-name="Group 90920" transform="translate(4 4)">
             <rect id="Rectangle_46698" data-name="Rectangle 46698" width="16" height="16" fill="none"/>
             <path id="icons8-expand-arrow" d="M14.025,18.4,9,13.38,3.976,18.4a.571.571,0,1,1-.808-.808L8.6,12.168a.571.571,0,0,1,.808,0L14.833,17.6a.571.571,0,1,1-.808.808Z" transform="translate(-1 -7.524)" fill="#29302b"/>
           </g>
         </SvgIcon>
        );
      }