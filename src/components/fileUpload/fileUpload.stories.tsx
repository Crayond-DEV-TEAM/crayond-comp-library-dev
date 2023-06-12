import { ComponentMeta, ComponentStory } from '@storybook/react';
import FileUploadIcon from '../../assets/fileUpload';
import FileUpload from './index';

export default {
  title: 'components/FileUpload',
  component: FileUpload,
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => (
  <FileUpload {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  icon: <FileUploadIcon />,
  desc: 'Click to browse and upload',
  onClickUpload: () => {
    console.log('uploaded');
  },
  maxSize: 1048576,
  isMultiple: true,
  variant:1,
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
};
