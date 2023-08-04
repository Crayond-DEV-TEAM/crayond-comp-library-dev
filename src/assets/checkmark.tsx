const CheckMark = (props: any) => (

  <svg xmlns="http://www.w3.org/2000/svg" width={props?.width ? props?.width : "16"} height={props?.height ? props?.height : "16"} viewBox="0 0 16 16">
    <g id="Group_105489" data-name="Group 105489" transform="translate(-129 -275)">
      <circle id="Ellipse_129665" data-name="Ellipse 129665" cx="8" cy="8" r="8" transform="translate(129 275)" fill={props?.color ?props?.color : '#fff'} />
      <path id="icons8-ok_2_" data-name="icons8-ok (2)" d="M10,4a6,6,0,1,0,6,6A6.007,6.007,0,0,0,10,4Zm2.568,4.968-3,3a.45.45,0,0,1-.637,0l-1.5-1.5a.45.45,0,1,1,.636-.636L9.25,11.014l2.682-2.682a.45.45,0,0,1,.637.636Z" transform="translate(127 273)" fill={props?.color ? props?.color: "#5ac782"} />
    </g>
  </svg>);
export default CheckMark;
