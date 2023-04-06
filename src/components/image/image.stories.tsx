import { ComponentMeta, ComponentStory } from '@storybook/react';
import CompanyLogo from '../../assets/companyLogo.png';
import Image from './image';

export default {
    title: 'components/Image',
    component: Image,
} as ComponentMeta<typeof Image>;


const Template: ComponentStory<typeof Image> = (args) => (
    <Image {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    imageSrc: CompanyLogo,
    imageWidth: 445,
    imageHeight: 768,
    altText: 'login image',

};

