import { ComponentMeta, ComponentStory } from '@storybook/react';
import SelectBox from './selectBox';
import React, { useState } from 'react';
import { SelectBoxComponent } from '.';


export default {
  title: 'Components/selectBox',
  component: SelectBox,
} as ComponentMeta<typeof SelectBox>;

const Template: ComponentStory<typeof SelectBox> = (args) => {
  const top100Films = [
    { title: 'Option 1', year: 1994 },
    { title: 'Option 2', year: 1972 },
    { title: 'Option 3', year: 1974 },
    { title: 'Option 4', year: 2008 },
    { title: 'Option 5', year: 1957 },
    { title: "Option 6", year: 1993 },
    { title: 'Option 7', year: 1994 },

  ];

  const CheckBoxData = [
    { title: 'The Shawshank Redemption', isChecked: false },
    { title: 'The Godfather', isChecked: false },
    { title: 'The Godfather: Part II', isChecked: false },
    { title: 'The Dark Knight', isChecked: false },
    { title: '12 Angry Men', isChecked: false },
    { title: "Schindler's List", isChecked: false },
    { title: 'Pulp Fiction', isChecked: false },
    {
      title: 'The Lord of the Rings: The Return of the King',
      isChecked: false,
    },
    { title: 'The Good, the Bad and the Ugly', isChecked: false },
    { title: 'Fight Club', isChecked: false },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      isChecked: false,
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      isChecked: false,
    },
    { title: 'Forrest Gump', isChecked: false },
    { title: 'Inception', isChecked: false },
    { title: "One Flew Over the Cuckoo's Nest", isChecked: false },
    { title: 'Goodfellas', isChecked: false },
    { title: 'The Matrix', isChecked: false },
    { title: 'Seven Samurai', isChecked: false },
    {
      title: 'Star Wars: Episode IV - A New Hope',
      isChecked: false,
    },

  ];

  const [checked, setChecked] = useState([])
  const [defaultData, setDefaultData] = useState([])
  const [groupedData, setGroupedData] = useState([])
  const [chipData, setChipData] = useState([])

  const handleCheckedItem = (event: object, newValue: any) => {
    setChecked(newValue)
  }

  const handleDefaultChange = (val: any, newValue: any | never) => {
    setDefaultData(newValue)
  }
  const handleGroupChange = (event: any, val: any | never) => {
    setGroupedData(val)
  }

  const handleChipChange = (val: any, newValue: any | never) => {
    setChipData(newValue)
  }
  return (
    <SelectBoxComponent
      limitTags={2}
      groupingProps={{
        isCloseIcon: true,
        isSearch: true,
        defaultValue: [],
        handleGroupChange: handleGroupChange,
        groupedData: groupedData,
        arrData: top100Films,
        dropdown: {
          minHeight: '',
          maxHeight: '',
          maxWidth: '',
          minWidth: '',
          backgroundColor: '',
          color: ''
        },
        input: {
          minHeight: '',
          minWidth: '',
          backgroundColor: '',
          maxWidth: '',
          maxHeight: '',
          color: '',
          border: '',
          borderRadius: ''
        }
      }}
      defaultProps={{
        isCloseIcon: true,
        isSearch: true,
        handleDefaultChange: handleDefaultChange,
        defaultData: defaultData,
        arrData: top100Films,
        defaultValue: [],
        dropdown: {
          minHeight: '',
          maxHeight: '',
          maxWidth: '',
          minWidth: '',
          backgroundColor: '',
          color: ''
        },
        input: {
          minHeight: '',
          minWidth: '',
          backgroundColor: '',
          maxWidth: '',
          maxHeight: '',
          color: '',
          border: '',
          borderRadius: ''
        }
      }}
      chipProps={{
        isCloseIcon: true,
        isSearch: true,
        handleChipChange: handleChipChange,
        chipData: chipData,
        arrData: top100Films,
        defaultValue: [],
        dropdown: {
          minHeight: '',
          maxHeight: '',
          maxWidth: '',
          minWidth: '',
          backgroundColor: '',
          color: ''
        },
        input: {
          minHeight: '',
          minWidth: '',
          backgroundColor: '',
          maxWidth: '',
          maxHeight: '',
          color: '',
          border: '',
          borderRadius: ''
        }
      }}
      checkboxProps={{
        isCloseIcon: true,
        isSearch: true,
        defaultValue: [],
        handleCheckedItem: handleCheckedItem,
        CheckableData: checked,
        arrData: CheckBoxData,
        dropdown: {
          minHeight: '',
          maxHeight: '',
          maxWidth: '',
          minWidth: '',
          backgroundColor: '',
          color: ''
        },
        input: {
          minHeight: '',
          minWidth: '',
          backgroundColor: '',
          maxWidth: '',
          maxHeight: '',
          color: '',
          border: '',
          borderRadius: ''
        }
      }}
      selectType={args.selectType} multiple={args?.multi} multi={args?.multi} />
  );

}
export const Primary = Template.bind({});

Primary.args = {
  limitTags: 2,
  selectType: 'chip',
  groupingProps: {
    isCloseIcon: true,
    isSearch: true,
    handleGroupChange:
      (event: object, e: { title: string; year: number; } | { title: string; year: number; }[] | null) => {
        console.log(e, 'groupDropDown')
      },
    groupedData: [],
    arrData: [
      { title: 'Option 1', year: 1994 },
      { title: 'Option 2', year: 1972 },
      { title: 'Option 3', year: 1974 },
      { title: 'Option 4', year: 2008 },
      { title: 'Option 5', year: 1957 },
      { title: "Option 6", year: 1993 },
      { title: 'Option 7', year: 1994 },

    ],
    defaultValue: [],
    dropdown: {
      minHeight: '',
      maxHeight: '',
      maxWidth: '',
      minWidth: '',
      backgroundColor: '',
      color: ''
    },
    input: {
      minHeight: '',
      minWidth: '',
      backgroundColor: '',
      maxWidth: '',
      maxHeight: '',
      color: '',
      border: '',
      borderRadius: ''
    }
  },
  defaultProps: {
    isCloseIcon: true,
    defaultValue: [],
    isSearch: true,
    handleDefaultChange: (event: object, e: { title: string; year: number; } | { title: string; year: number; }[] | null) => {
      console.log(e, 'defaultDropdown')
    },
    defaultData: [],
    arrData: [
      { title: 'Option 1', year: 1994 },
      { title: 'Option 2', year: 1972 },
      { title: 'Option 3', year: 1974 },
      { title: 'Option 4', year: 2008 },
      { title: 'Option 5', year: 1957 },
      { title: "Option 6", year: 1993 },
      { title: 'Option 7', year: 1994 },

    ],
    dropdown: {
      minHeight: '',
      maxHeight: '',
      maxWidth: '',
      minWidth: '',
      backgroundColor: '',
      color: ''
    },
    input: {
      minHeight: '',
      minWidth: '',
      backgroundColor: '',
      maxWidth: '',
      maxHeight: '',
      color: '',
      border: '',
      borderRadius: ''
    }
  },
  chipProps: {
    isCloseIcon: true,
    isSearch: true,
    handleChipChange: (event: object, e: { title: string; year: number; } | { title: string; year: number; }[] | null) => {
      console.log(e, 'chipDropDown')
    },
    chipData: [],
    defaultValue: [],
    arrData: [
      { title: 'Option 1', year: 1994 },
      { title: 'Option 2', year: 1972 },
      { title: 'Option 3', year: 1974 },
      { title: 'Option 4', year: 2008 },
      { title: 'Option 5', year: 1957 },
      { title: "Option 6", year: 1993 },
      { title: 'Option 7', year: 1994 },

    ],
    dropdown: {
      minHeight: '',
      maxHeight: '',
      maxWidth: '',
      minWidth: '',
      backgroundColor: '',
      color: ''
    },
    input: {
      minHeight: '',
      minWidth: '',
      backgroundColor: '',
      maxWidth: '',
      maxHeight: '',
      color: '',
      border: '',
      borderRadius: ''
    }
  },
  checkboxProps: {
    isCloseIcon: true,
    isSearch: true,
    handleCheckedItem: (event: object, e: { title: string; isChecked: boolean } | { title: string; isChecked: boolean; }[] | null) => {
      console.log(e, 'checkboxDropDown')
    },
    defaultValue: [],
    CheckableData: [],
    arrData: [
      { title: 'The Shawshank Redemption', isChecked: false },
      { title: 'The Godfather', isChecked: false },
      { title: 'The Godfather: Part II', isChecked: false },
      { title: 'The Dark Knight', isChecked: false },
      { title: '12 Angry Men', isChecked: false },
      { title: "Schindler's List", isChecked: false },
      { title: 'Pulp Fiction', isChecked: false },
      {
        title: 'The Lord of the Rings: The Return of the King',
        isChecked: false,
      },
      { title: 'The Good, the Bad and the Ugly', isChecked: false },
      { title: 'Fight Club', isChecked: false },
      {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        isChecked: false,
      },
      {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        isChecked: false,
      },
      { title: 'Forrest Gump', isChecked: false },
      { title: 'Inception', isChecked: false },
      { title: "One Flew Over the Cuckoo's Nest", isChecked: false },
      { title: 'Goodfellas', isChecked: false },
      { title: 'The Matrix', isChecked: false },
      { title: 'Seven Samurai', isChecked: false },
      {
        title: 'Star Wars: Episode IV - A New Hope',
        isChecked: false,
      },

    ],
    dropdown: {
      minHeight: '',
      maxHeight: '',
      maxWidth: '',
      minWidth: '',
      backgroundColor: '',
      color: ''
    },
    input: {
      minHeight: '',
      minWidth: '',
      backgroundColor: '',
      maxWidth: '',
      maxHeight: '',
      color: '',
      border: '',
      borderRadius: ''
    }

  },
  multi: true
};
