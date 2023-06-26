import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import CustomFilter from './index';
import FunnelIcon from '../../assets/funnelIcon';

export default {
  title: 'components/CustomFilter',
  component: CustomFilter,
} as ComponentMeta<typeof CustomFilter>;

const Template: ComponentStory<typeof CustomFilter> = (args) => <CustomFilter {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    icon:<FunnelIcon color="#fff" width="36px" height="36px" />,
    customData: [
        {
          listName: 'Category',
          selected: false,
          listIcon: <InboxIcon />,
          subList: [
            {
              list: 'Category1',
              selected: false,
              listStyle: {},
              LabelbgColor: '#E9E9E9',
              LabelColor: '#666666',
            },
            {
              list: 'Category2',
              selected: false,
              listStyle: {},
            },
            {
              list: 'Category3',
              selected: false,
              listStyle: {},
            },
          ],
          listNameStyle: {},
          subListType: 'checkbox',
        },
        {
          listName: 'product',
          listIcon: <InboxIcon />,
          selected: false,
          subList: [
            {
              list: 'Product1',
              selected: false,
            },
            {
              list: 'product2',
              selected: false,
            },
            {
              list: 'product3',
              selected: false,
            },
          ],
          subListType: 'chip',
        },
        {
          listName: 'Price',
          selected: false,
          listIcon: <InboxIcon />,
    
          subList: [
            {
              list: '100',
              selected: false,
            },
            {
              list: '200',
              selected: false,
            },
            {
              list: '300',
              selected: false,
            },
          ],
          subListType: 'checkbox',
        },
      ],
    buttons:[{
        label: 'Clear all',
        onClick:()=>{},
        btnstyle: {
          backgroundColor: '#FFE8E9',
          padding: '4px',
          color: '#F44F5A',
          width: '121px',
          height: '36px',
        },
      },
      {
        label: 'Apply',
        onClick: (data: any) => {
          const selectedData: any = [];
  
          data.forEach((item: any) => {
            const { listName, subList } = item;
            const selectedSubList = subList?.filter(
              (subItem: any) => subItem.selected
            );
            if (selectedSubList && selectedSubList.length > 0) {
              selectedData.push({ listName, subList: selectedSubList });
            }
          });
          console.log(selectedData);
        },
        btnstyle: {
          backgroundColor: '#665CD7',
          padding: '4px',
          color: '#fff',
          width: '121px',
          height: '36px',
        },
      },],
    rootStyle:{},
    anchorOrigin:{
      vertical: 'bottom',
      horizontal: 'left',
    },
    // transformOrigin={{}}
    filterTitle:"Filter",
    filterTitleStyle:{
      fontSize: '16px',
      textalign: 'left',
      color: '#262626',
      fontWeight: 'bold',
    },
    listIconStyle:{},
    subListContainerStyle:{},
    buttonContainerStyle:{},
    PopoverStyle:{},
    contentWrapStyle:{},
    searchBarStyle:{},
    showSearchBar:true,
    filterButtonStyle:{height:'36px',width:'10px'}
};

