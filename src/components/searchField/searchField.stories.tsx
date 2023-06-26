import { ComponentStory, ComponentMeta } from '@storybook/react';
import {SearchField} from './index';
import Search from '../../assets/search';
import Close from '../../assets/close';
import ArrowUpDownIcon from '../../assets/arrowUpDownIcon';
import EnterIcon from '../../assets/enterIcon';
import EscapeIcon from '../../assets/escapeIcon';

export default {
  title: 'Components/SearchField',
  component: SearchField,
} as ComponentMeta<typeof SearchField>;

const Template: ComponentStory<typeof SearchField> = (args) => <SearchField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isTextSearch: false,
  isRecentSearch: false,
  isCardBased: false,
  isCardWithTitleBased: false,
  isShortcutKeyBased: false,
  isShortComponent: false,

  paperRootStyle: {},

  inputRootStyle: {},
  placeHolderText: 'Search..',
  placeHolderColor: '#929292',
  placeHolderSize: 12,
  inputFontSize: 12,
  inputFontColor: '#393939dd',
  inputBackgroundColor: '',
  inputBorderDefaultColor: '#E9E9E9',
  inputBorderHoverColor: '#b4aef4',
  inputBorderFocusColor: '#665CD7',
  startAdornmentIcon: <Search />,
  endAdornmentIcon: <Close />,

  paperBackgroundColor: '',
  paperBorderColor: '#665CD7',

  listItemSubTextStyles: {},
  listItemSubTextColor: '#E9E9E9',
  listItemSubTextSize: 12,
  listItemLabelStyles: {},
  listItemLabelColor: '#393939dd',
  listItemLabelSize: 12,
  listTextHoverColor: '#665CD7',
  listTextHoverBgColor: '#fdfafa',
  keyDownListBgcolor: '',
  keyDownListTextColor: '',
  cardImgStyle: {},
  cardImgWidth: 30,
  cardImgHeight: 30,
  imgBorderRadius: 4,

  recentLabel: 'Recent Search',
  recentLabelTextColor: '#393939dd',
  recentLabelFontSize: 12,
  recentLabelStyle: {},
  recentSearchItemStyles: {},
  recentSearchItemTextColor: '#393939dd',
  recentSearchItemBgcolor: '#E9E9E9',
  recentSearchItemSize: 10,

  controlsRootStyles: {},
  controlsTextColor: '#393939dd',
  controlsBgColor: '#E9E9E9',
  controlsTextSize: 12,

  componentColumnDirection:"column-reverse",
  recentSearchLabelColor: '#393939dd',
  recentSearchLabelSize: 12,
  recentSearchLabel:"Recent Search",
  categoryLabel1: ' CATEGORY SUGGEST 1',
  categoryLabel2: 'CATEGORY SUGGEST 2',

  handleInputOnChange:()=>{},
  handleOptionChange:()=>{},

  textSearchData: [
    { label: 'Redemption' },
    { label: 'Henry' },
    { label: 'Godfather' },
    { label: 'Dark Knight' },
    { label: 'Angry Men' },
    { label: 'Angry women' },
    { label: 'Angry' },
    { label: 'Schindler' },
    { label: 'Pulp Fiction' },
  ],

  cardData: [
    {
      label: 'The Redemption',
      url: 'https://images.unsplash.com/photo-1517630800677-932d836ab680?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
    {
      label: 'The Godfather',
      url: 'https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      label: 'The Godfather',
      url: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      label: 'The Dark Knight',
      url: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      label: '190 Angry Old',
      url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      label: '23 Angry Men',
      url: 'https://images.unsplash.com/photo-1606510236980-c7cc4e05012a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      label: '21 Angry women',
      url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      label: "Schindler's List",
      url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      label: 'Pulp Fiction',
      url: 'https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
  ],

  navigateData: [
    {
      navigateLabel: 'To Navigate',
      icon: <ArrowUpDownIcon />,
      onClick: () => {
        alert('hii');
      },
      url: '',
    },
    {
      navigateLabel: 'To Select',
      icon: <EnterIcon />,
      onClick: () => {},
      url: '',
    },
    {
      navigateLabel: 'To Escape',
      icon: <EscapeIcon />,
      onClick: () => {},
      url: '',
    },
  ],

};
