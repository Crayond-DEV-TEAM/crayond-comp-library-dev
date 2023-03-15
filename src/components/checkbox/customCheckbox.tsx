import  Checkbox from '@mui/material/Checkbox';

export default function CustomCheckbox(props: any) {
   
  return (
    <Checkbox name={props?.name} onChange={()=>props?.onChange(props?.name, event)} checked={props?.value?.includes(props?.name)}/>
  );
}