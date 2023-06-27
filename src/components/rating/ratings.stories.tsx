import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CustomRating } from './index';
import SmilyHeart from '../../assets/smily_heart';
import SmilyHeartDisabled from '../../assets/smily_heart_disabled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default {
  title: 'components/CustomRating',
  component: CustomRating,
} as ComponentMeta<typeof CustomRating>;

const Template: ComponentStory<typeof CustomRating> = (args) => (
  <CustomRating {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  variant: 'emoji',
  customIcons: [
    {
      SelectIcon: <SmilyHeart />,
      unSelectIcon: <SmilyHeartDisabled />,
      label: 'Totally wrong',
      value: 0,
    },
    {
      SelectIcon: <SmilyHeart />,
      unSelectIcon: <SmilyHeartDisabled />,
      label: 'Not liked it',
      value: 0,
    },
    {
      SelectIcon: <SmilyHeart />,
      unSelectIcon: <SmilyHeartDisabled />,
      label: 'Average',
      value: 0,
    },
  ],
  selectedLabelStyle: {},
  emojiContainerStyle: {},
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'star',
  precision:1,
  styledRating: [
    {
      filled: <FavoriteIcon />,
      unFilled: <FavoriteBorderIcon />,
      starValue: 4.5,
      remark: '(4.5 | 240 Reviews)',
    },
    {
      filled: <FavoriteIcon />,
      unFilled: <FavoriteBorderIcon />,
      starValue: 3.5,
      remark: '(3.5 | 240 Reviews)',
    },
  ],
  remarkStyle: {},
};
