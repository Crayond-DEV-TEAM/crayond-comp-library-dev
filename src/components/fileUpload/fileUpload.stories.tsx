import { ComponentMeta, ComponentStory } from '@storybook/react';
import FileUploadIcon from '../../assets/fileUpload';
import FileUpload from './index';
import DeleteIcon from '../../assets/deleteIcon';

export default {
  title: 'components/FileUpload',
  component: FileUpload,
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => (
  <FileUpload {...args} />
);

export const Primary = Template.bind({});

let TotalFileSelected: any[] = [];

Primary.args = {
  icon: <FileUploadIcon width="23px" height="18px" />,
  desc: 'Click to browse and upload',
  onClickUpload: (e: any) => {
    console.log(e, '-----Total File Selected');
  },
  removeIcon: <DeleteIcon />,
  TotalFileSelected: TotalFileSelected,
  maxSize:'1MB',
  isMultiple: true,
  variant: 1,
  rootStyle: {},
  cardStyle: {},
  UploadIconStyle: {},
  descStyle: {},
  uploadedCardStyle: {},
  uploadedFileBoxStyle: {},
  docIconStyle: {},
  fileTitleStyle: {},
  fileSizeStyle: {},
  fileRemoveIconStyle: {},
  allowedTypes: ['jpg', 'jpeg', 'png', 'svg', 'pdf'],
  uploadErrorStyle:{},
  timeout:5000
};
