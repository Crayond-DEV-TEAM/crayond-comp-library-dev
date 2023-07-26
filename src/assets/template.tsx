const TemplateIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19.2"
    height="24"
    viewBox="0 0 19.2 24"
  >
    <path
      id="icons8-template"
      d="M10.4,4A2.414,2.414,0,0,0,8,6.4V27.1a.9.9,0,1,0,1.8,0V6.4a.586.586,0,0,1,.6-.6H24.8a.586.586,0,0,1,.6.6V27.1a.9.9,0,1,0,1.8,0V6.4A2.414,2.414,0,0,0,24.8,4Zm2.1,3.9a.6.6,0,0,0-.6.6v2.4a.6.6,0,0,0,.6.6H22.7a.6.6,0,0,0,.6-.6V8.5a.6.6,0,0,0-.6-.6Zm.6,6.3a.9.9,0,1,0,0,1.8h9a.9.9,0,1,0,0-1.8Zm0,3.6a.9.9,0,1,0,0,1.8h6.6a.9.9,0,1,0,0-1.8Z"
      transform="translate(-8 -4)"
      fill={props?.color ? props?.color : '#666'}
    />
  </svg>
);

export default TemplateIcon;
