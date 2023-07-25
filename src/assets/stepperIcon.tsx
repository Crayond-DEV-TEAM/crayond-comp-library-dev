const StepperIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props?.width ? props?.width : "20"} height={props?.height ? props?.height : "20"} viewBox="0 0 20 20">
    <g id="Group_114718" data-name="Group 114718" transform="translate(9832 14292)">
      <g id="Rectangle_57605" data-name="Rectangle 57605" transform="translate(-9832 -14292)" fill="#fff" stroke="#707070" stroke-width="1" opacity="0">
        <rect width="20" height="20" stroke="none" />
        <rect x="0.5" y="0.5" width="19" height="19" fill={props.color} />
      </g>
      <path id="icons8-icons8" d="M7.667,6A.667.667,0,0,0,7,6.667V21.333A.667.667,0,0,0,7.667,22h6.667A.667.667,0,0,0,15,21.333V18.985A4.068,4.068,0,0,0,18.889,22,4.121,4.121,0,0,0,23,17.889,4.068,4.068,0,0,0,19.985,14,4.068,4.068,0,0,0,23,10.111,4.121,4.121,0,0,0,18.889,6,4.068,4.068,0,0,0,15,9.015V6.667A.667.667,0,0,0,14.333,6Zm.667,1.333h5.333V20.667H8.333Zm10.556,0a2.778,2.778,0,1,1-2.778,2.778A2.768,2.768,0,0,1,18.889,7.333ZM15,11.207A4.025,4.025,0,0,0,17.793,14,4.025,4.025,0,0,0,15,16.793Zm3.889,3.9a2.778,2.778,0,1,1-2.778,2.778A2.768,2.768,0,0,1,18.889,15.111Z" transform="translate(-9837 -14296)" fill="#929292" />
    </g>
  </svg>);
export default StepperIcon;
