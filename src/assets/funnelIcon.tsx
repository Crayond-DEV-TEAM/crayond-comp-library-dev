const FunnelIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props?.width ? props?.width : '12'}
    height={props?.height ? props?.height : '12'}
    viewBox="0 0 12 12"
  >
    <path
      id="icons8-funnel"
      d="M6.833,6A.841.841,0,0,0,6,6.833v1.03a2.5,2.5,0,0,0,.953,1.964h0l3.378,2.636V17.5a.5.5,0,0,0,.79.407l2.333-1.667a.5.5,0,0,0,.21-.407V12.464l3.378-2.636h0A2.5,2.5,0,0,0,18,7.863V6.833A.841.841,0,0,0,17.167,6ZM7,7H17v.863a1.5,1.5,0,0,1-.572,1.178l-3.569,2.785a.5.5,0,0,0-.193.395v3.356l-1.333.952V12.22a.5.5,0,0,0-.193-.395L7.572,9.041A1.5,1.5,0,0,1,7,7.863Z"
      transform="translate(-6 -6)"
      fill={props?.color ? props?.color : '#5a5a5a'}
    />
  </svg>
);

export default FunnelIcon;
