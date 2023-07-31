import { SxProps } from '@mui/material';
import { ReactElement } from 'react';

export type fileItem = {
  id?: number | string;
  file: File;
  loading?: number;
  uploadProgress: number;
  isPaused?: boolean;
};
export interface FileUploadProps {
  icon?: React.ReactNode;
  setTotalFileSelected: Function;
  placeHolder?: string;
  onClickUpload: (data: {
    event:
      | React.DragEvent<HTMLDivElement>
      | React.ChangeEvent<HTMLInputElement>
      | React.DragEvent<HTMLDivElement>
      | null;
    updatedFile: fileItem;
    totalFile: fileItem[];
  }) => void;
  maxSize?: number | string;
  isMultiple: true | false;
  rootStyle?: SxProps;
  cardStyle?: SxProps;
  UploadIconStyle?: SxProps;
  placeHolderStyle?: SxProps;
  uploadedCardStyle?: SxProps;
  uploadedFileBoxStyle?: SxProps;
  docIconStyle?: SxProps;
  fileTitleStyle?: SxProps;
  fileSizeStyle?: SxProps;
  fileRemoveIconStyle?: SxProps;
  errorStyle?: SxProps;
  variant?: 1 | 2;
  TotalFileSelected?: any;
  removeIcon: React.ReactNode;
  allowedTypes: string[];
  uploadErrorStyle?: object;
  timeout?: number;
  errorMsgStyle?: object;
  fileSizeErrorMsg: string;
  fileTypeErrorMsg: string;
  svgIcon?: ReactElement;
  pdfIcon?: ReactElement;
  imgIcon?: ReactElement;
  closeIcon: ReactElement;
  deleteIconStyle?: object;
  closeIconStyle?: object;
  acceptFiles?: string[];
  inputAccept?: string;
}
