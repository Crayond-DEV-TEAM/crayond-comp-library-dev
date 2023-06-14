export interface FileUploadProps {
  icon?: React.ReactNode;
  desc?: string;
  onClickUpload?: Function | any;
  maxSize?: number | string | any;
  isMultiple: true | false;
  rootStyle?: object;
  cardStyle?: object;
  UploadIconStyle?: object;
  descStyle?: object;
  uploadedCardStyle?: object;
  uploadedFileBoxStyle?: object;
  docIconStyle?: object;
  fileTitleStyle?: object;
  fileSizeStyle?: object;
  fileRemoveIconStyle?: object;
  errorStyle?: object;
  variant?: 1 | 2;
  TotalFileSelected?: any;
  removeIcon?: React.ReactNode;
  allowedTypes: string[];
  uploadErrorStyle?: object;
  timeout?: number;
}
