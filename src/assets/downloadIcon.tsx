const DownloadIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14.389"
    height="14.4"
    viewBox="0 0 14.389 14.4"
  >
    <path
      id="icons8-download"
      d="M12.983,5.973a.777.777,0,0,0-.766.788v7.45l-1-1a.777.777,0,1,0-1.1,1.1l2.332,2.332a.777.777,0,0,0,1.1,0L15.876,14.3a.777.777,0,1,0-1.1-1.1l-1,1V6.76a.777.777,0,0,0-.789-.788ZM8.332,10.258A2.343,2.343,0,0,0,6,12.589v5.052a2.343,2.343,0,0,0,2.332,2.332h9.326a2.343,2.343,0,0,0,2.332-2.332V12.589a2.343,2.343,0,0,0-2.332-2.332H16.492a.777.777,0,1,0,0,1.554h1.166a.766.766,0,0,1,.777.777v5.052a.766.766,0,0,1-.777.777H8.332a.766.766,0,0,1-.777-.777V12.589a.766.766,0,0,1,.777-.777H9.5a.777.777,0,1,0,0-1.554Z"
      transform="translate(-5.8 -5.772)"
      fill={props?.color ? props?.color : '#5a5a5a'}
      stroke="#fff"
      strokeWidth="0.4"
    />
  </svg>
);

export default DownloadIcon;
