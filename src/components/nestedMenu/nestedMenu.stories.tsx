import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NestedMenu from './index';

export default {
  title: 'components/NestedMenu',
  component: NestedMenu,
} as ComponentMeta<typeof NestedMenu>;

const Template: ComponentStory<typeof NestedMenu> = (args) => {


return  <NestedMenu {...args} />
}
;

export const Primary = Template.bind({});



Primary.args = {
  menuButtonProps:{
  onClick: ()=>{},
  menuName: 'My Menu',
},
dropDownProps:{
open: true,
  anchorEl: null,
  configuration: [
    {
      key: 'menu1',
      caption: 'Menuuuuuuuuuuuuuuuuu 1',
      subMenu: [
        {
          key: 'menu1.1',
          caption: 'Menu 1.1',
          subMenu: [
            {
              key: 'menu1.1.1',
              caption: 'Menu 1.1.1',
              onClick: ()=>console.log('Menu 1.1.1'),
            },
            {
              key: 'menu1.1.2',
              caption: 'Menu 1.1.2',
              onClick: ()=>console.log('Menu 1.1.1'),
            },
            {
              key: 'menu1.1.3',
              caption: 'Menu 1.1.3',
              onClick: ()=>console.log('Menu 1.1.3'),
            },
          ],
        },
        {
          key: 'menu1.2',
          caption: 'Menu 1.2',
          subMenu: [
            {
              key: 'Menu 1.2.1',
              caption: 'Menu 1.2.1',
              onClick: ()=>console.log('Menu 1.2.1'),
            },
          ],
        },
      ],
    },
    {
      key: 'menu2',
      caption: 'Menu 2',
      subMenu: [
        {
          key: 'menu2.1',
          caption: 'Menuuuuuuuuuuu 2.1',
          subMenu: [
            {
              key: 'menu2.1.1',
              caption: 'Menu 2.1.1',
              onClick: ()=>console.log('Menu 2.1.1'),
            },
            {
              key: 'menu2.1.2',
              caption: 'Menu 2.1.2',
              onClick: ()=>console.log('Menu 2.1.1'),
            },
          ],
        },
        {
          key: 'menu2.2',
          caption: 'Menu 1.2',
          subMenu: [
            {
              key: 'Menu 2.2.1',
              caption: 'Menu 2.2.1',
              onClick: ()=>console.log('Menu 2.2.1'),
            },
          ],
        },
      ],
    },
  ],
  onClose: ()=>{},}
};
