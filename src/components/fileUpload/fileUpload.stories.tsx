import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import FileUploadIcon from '../../assets/fileUpload';
import { FileUpload } from './index';
import DeleteIcon from '../../assets/deleteIcon';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfTwoTone';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import CloseIcon from '@mui/icons-material/Close';
import { FileUploadProps } from './props';

export default {
  title: 'components/FileUpload',
  component: FileUpload,
  argTypes: {
    onClickUpload: { action: 'clicked' }, // Add this line to show the action in the actions panel
  },
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => (
  <FileUpload {...args} />
);

export const Primary = (args: JSX.IntrinsicAttributes & FileUploadProps) => {
  const [totalFileSelected, setTotalFileSelected] = useState<Object[]>([]);

  return (
    <Template
      {...args}
      TotalFileSelected={totalFileSelected}
      setTotalFileSelected={setTotalFileSelected}
    />
  );
};

Primary.args = {
  icon: <FileUploadIcon width="23px" height="18px" />,
  placeHolder: 'Click to browse and upload',
  removeIcon: <DeleteIcon />,
  maxSize: '1MB',
  isMultiple: false,
  variant: 1,
  rootStyle: {},
  cardStyle: {},
  UploadIconStyle: {},
  placeHolderStyle: {},
  uploadedCardStyle: {},
  uploadedFileBoxStyle: {},
  docIconStyle: {},
  fileTitleStyle: {},
  fileSizeStyle: {},
  fileRemoveIconStyle: {},
  allowedTypes: ['jpg', 'jpeg', 'png', 'svg', 'pdf'],
  uploadErrorStyle: {},
  timeout: 5000,
  fileSizeErrorMsg: 'File size exceeds the maximum limit',
  fileTypeErrorMsg: 'Invalid file type. Allowed types:',
  svgIcon: <ArticleOutlinedIcon width="42px" height="42px" />,
  pdfIcon: <PictureAsPdfTwoToneIcon width="42px" height="42px" />,
  imgIcon: <InsertPhotoRoundedIcon width="42px" height="42px" />,
  closeIcon: <CloseIcon />,
};
