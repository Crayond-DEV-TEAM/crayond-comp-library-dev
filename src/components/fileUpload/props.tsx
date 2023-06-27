import { ReactElement } from "react";

export interface FileUploadProps {
  icon?: React.ReactNode;
  setTotalFileSelected?:any;
  placeHolder?: string;
  onClickUpload?: Function | any;
  maxSize?: number | string | any;
  isMultiple: true | false;
  rootStyle?: object;
  cardStyle?: object;
  UploadIconStyle?: object;
  placeHolderStyle?: object;
  uploadedCardStyle?: object;
  uploadedFileBoxStyle?: object;
  docIconStyle?: object;
  fileTitleStyle?: object;
  fileSizeStyle?: object;
  fileRemoveIconStyle?: object;
  errorStyle?: object;
  variant?: 1 | 2;
  TotalFileSelected?: any;
  removeIcon: React.ReactNode;
  allowedTypes: string[];
  uploadErrorStyle?: object;
  timeout?: number;
  errorMsgStyle?:object;
  fileSizeErrorMsg:string;
  fileTypeErrorMsg:string;
  svgIcon?:ReactElement;
  pdfIcon?:ReactElement;
  imgIcon?:ReactElement;
  closeIcon:ReactElement;
  deleteIconStyle?:object;
  closeIconStyle?:object;
}
