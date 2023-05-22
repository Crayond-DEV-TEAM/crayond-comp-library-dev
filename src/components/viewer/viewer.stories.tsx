import { ComponentMeta, ComponentStory } from '@storybook/react';
import Viewer from './viewer';
import EditIcon from '../../assets/editIcon';
import DocsIcon from '../../assets/docsIcon';
import profileImg from '../../assets/sampleprof.png';

export default {
  title: 'CommonTable/viewer',
  component: Viewer,
} as ComponentMeta<typeof Viewer>;

const Template: ComponentStory<typeof Viewer> = (args) => (
  <Viewer {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  rootStyle: { backgroundColor: '' },
  headerOptions: {
    title: 'My Profile',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#111111',
    titleBoxStyle: { backgroundColor: '' },
  },
  viewBody: {
    viewBodyStyle: {},
    gridStyle: { justifyContent: 'center' },
    profileimage: {
      breakpoints: { xs: 12, sm: 3.5, md: 3, lg: 2 },
      profileImgStyle: {},
      imgSrc: profileImg,
      variant: 'rounded',
      profileimgContainer: {},
      avatarconStyle: {},
      profileImgEditStyle: {},
      profileImgEditIcon: <EditIcon color="#fff" />,
      onClick: () => { console.log('Profile Edit'); },
    },
    form: {
      breakpoints: { xs: 12, sm: 6, md: 6, lg: 4.5, xl: 4.5 },
      title: 'Michael Bloomberg',
      subTitle: 'Male',
      description: 'Senior Graphic Designer',
      titleStyle: {},
      descriptionStyle: {},
      subTitleStyle: {},
      formContainer: {},
      formList: [
        {
          icon: <DocsIcon color='#665CD7' />,
          label: 'Email',
          value: 'Michaelbloomberg@email.com',
          breakPoint: {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 12,
            lx: 12,
          },
          iconStyle: { backgroundColor: '#FAFAFA' },
          labelStyle: {},
          valueStyle: {},
          listWraper: { py: 1, }
        },
        {
          icon: <DocsIcon />,
          label: 'Date Of Birth',
          value: '01/06/1990',
          breakPoint: {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 12,
            lx: 12,
          },
          iconStyle: { backgroundColor: '#FAFAFA' },
          labelStyle: {},
          valueStyle: {},
          listWraper: { py: 1, }

        },
        {
          icon: <DocsIcon />,
          label: 'Mobile Number',
          value: '+1 9999999999',
          breakPoint: {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 12,
            lx: 12,
          },
          iconStyle: { backgroundColor: '#FAFAFA' },
          labelStyle: {},
          valueStyle: {},
          listWraper: { py: 1, }
        },
        {
          icon: <DocsIcon />,
          label: 'Desgination',
          value: 'Developer',
          breakPoint: {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 12,
            lx: 12,
          },
          iconStyle: { backgroundColor: '#FAFAFA' },
          labelStyle: {},
          valueStyle: {},
          listWraper: { py: 1, }
        },
      ],
    },
    btnList: [
      {
        buttonText: 'Edit',
        onClick: () => { console.log('Edit') },
        breakPoint: {
          xs: 12,
          sm: 12,
          md: 12,
          lg: 12,
          lx: 12,
        },
        btnStyle: { backgroundColor: '#665CD7' },
        btnListConStyle: { mt: 3, display: 'flex', justifyContent: 'center' }
      },
    ],

  },
};

export const secondary = Template.bind({});
secondary.args = {
  rootStyle: { backgroundColor: '', },
  viewBody: {
    viewBodyStyle: {},
    gridStyle: { justifyContent: 'left', },
    profileimage: {
      breakpoints: { xs: 12, sm: 12, md: 12, lg: 12 },
      profileImgStyle: {},
      imgSrc: profileImg,
      variant: 'rounded',
      profileimgContainer: { display: 'flex', justifyContent: 'center' },
      profileImgEditIcon: <EditIcon color='#fff' />,
      onClick: () => { console.log('Profile Edit') },
    },
    form: {
      breakpoints: { xs: 12, sm: 12, md: 12, lg: 12, xl: 12 },
      title: 'Michael Bloomberg',
      titleStyle: { fontSize: '16px', py: 2, textAlign: 'center' },
      descriptionStyle: {},
      subTitleStyle: {},
      formContainer: {},
      formListContainer: { border: '1px solid #E9E9E9', borderRadius: '8px', p: 2 },
      formList: [
        {
          icon: <DocsIcon color='green' />,
          value: 'Mailidhere@gmail.com',
          breakPoint: {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 12,
            lx: 12,
          },
          iconStyle: { backgroundColor: 'none', borderRadius: '0px', py: 0 },
          valueStyle: { fontSize: '14px' },
          listWraper: { alignItems: 'center' }
        },
        {
          icon: <DocsIcon color='yellow' />,
          value: '9999 999 999',
          breakPoint: {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 12,
            lx: 12,
          },
          iconStyle: { backgroundColor: 'none', borderRadius: '0px', py: '0px', },
          valueStyle: { fontSize: '14px' },
          listWraper: { alignItems: 'center' }
        },

        {
          icon: <DocsIcon color='red' />,
          value: '01 Jan 1998 (25Yrs / Male)',
          breakPoint: {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 12,
            lx: 12,
          },
          iconStyle: { backgroundColor: 'none', borderRadius: '0px', py: 0 },
          valueStyle: { fontSize: '14px' },
          listWraper: { alignItems: 'center' }
        },
        {
          icon: <DocsIcon color='blue' />,
          value: '2/498, Ayshika Still water court Sunrise Avenue, 2nd Cross St, Neelankarai, Chennai - 600115',
          breakPoint: {
            xs: 12,
            sm: 6,
            md: 6,
            lg: 12,
            lx: 12,
          },
          iconStyle: { backgroundColor: 'none', borderRadius: '0px', py: 0 },
          valueStyle: { fontSize: '14px' },
          listWraper: { alignItems: 'center' }
        },

      ],
    },
    btnList: [
      {
        buttonText: 'Edit',
        onClick: () => { console.log('Edit') },
        breakPoint: {
          xs: 12,
          sm: 12,
          md: 12,
          lg: 12,
          lx: 12,
        },
        btnStyle: { width: '100%', backgroundColor: '#665CD7' },
        btnListConStyle: { mt: 3 }
      },
    ],

  }
};
