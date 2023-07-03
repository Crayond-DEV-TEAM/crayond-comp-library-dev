

    import { SvgIcon } from '@mui/material';
    export function ArrowDownIcon(props:any) {
        const { rootStyle, ...rest } = props;
      
        const rootSx = {
          width: 24,
          height: 24,
          ...rootStyle,
        };
        return (
           <SvgIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  {...rest}
           sx={rootSx}>
           <g id="Group_106711" data-name="Group 106711" transform="translate(-1322 -20)">
             <rect id="Rectangle_43748" data-name="Rectangle 43748" width="24" height="24" transform="translate(1322 20)" fill="none"/>
             <g id="Group_90920" data-name="Group 90920" transform="translate(4 -5)">
               <rect id="Rectangle_46698" data-name="Rectangle 46698" width="16" height="16" transform="translate(1322 29)" fill="none"/>
               <path id="icons8-expand-arrow" d="M14.025,12.168,9,17.192,3.976,12.168a.571.571,0,0,0-.808.808L8.6,18.4a.571.571,0,0,0,.808,0l5.429-5.429a.571.571,0,0,0-.808-.808Z" transform="translate(1321 21.952)" fill="#29302b"/>
             </g>
           </g>
         </SvgIcon>
        );
      }